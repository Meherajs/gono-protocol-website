//! C2PA signing logic using `c2pa::Builder`.

use std::fs;
use std::io::Read;
use std::path::Path;

use anyhow::{Context, Result};
use c2pa::{Builder, Context as C2paContext};
use serde::Serialize;
use sha2::{Digest, Sha256};

/// Result of a C2PA signing operation.
#[derive(Debug, Serialize)]
pub struct SignResult {
	/// SHA-256 hash of the original (unsigned) file
	pub content_hash: String,
	/// C2PA manifest label (URN) embedded in the signed file
	pub manifest_label: String,
	/// SHA-256 fingerprint of the signing certificate (DER)
	pub signer_fingerprint: String,
	/// Path to the signed output file
	pub output_path: String,
}

/// Sign a media file with C2PA provenance metadata.
///
/// Uses `c2pa::Builder` to embed a manifest containing:
/// - claim_generator: "Gono Protocol/0.1.0"
/// - Action assertion: "c2pa.created" with softwareAgent "Gono Capture 0.1.0"
/// - Custom assertion "org.gono.provenance" with protocol and version info
pub fn sign_file(
	input_path: &str,
	cert_path: &str,
	key_path: &str,
	output_path: Option<&str>,
) -> Result<SignResult> {
	let input = Path::new(input_path);
	anyhow::ensure!(input.exists(), "Input file not found: {input_path}");

	// Compute SHA-256 of the original file via buffered reading instead of loading full file into memory
	let mut hash_reader = fs::File::open(input).context("Failed to open input file for hashing")?;
	let mut hasher = Sha256::new();
	let mut buffer = [0u8; 64 * 1024];
	loop {
		let bytes_read = hash_reader
			.read(&mut buffer)
			.context("Failed to read input file while computing SHA-256 hash")?;
		if bytes_read == 0 {
			break;
		}
		hasher.update(&buffer[..bytes_read]);
	}
	let content_hash = format!("0x{}", hex::encode(hasher.finalize()));

	// Derive output path
	let out_path = match output_path {
		Some(p) => p.to_string(),
		None => {
			let stem = input.file_stem().unwrap_or_default().to_string_lossy();
			let ext = input.extension().unwrap_or_default().to_string_lossy();
			let parent = input.parent().unwrap_or_else(|| Path::new("."));
			parent
				.join(format!("{stem}.signed.{ext}"))
				.to_string_lossy()
				.to_string()
		}
	};

	// Read certificate and key
	let cert_pem = fs::read(cert_path).context("Failed to read certificate PEM")?;
	let key_pem = fs::read(key_path).context("Failed to read private key PEM")?;

	// Compute signer fingerprint (SHA-256 of the raw PEM bytes for consistency)
	let signer_fingerprint = hex::encode(Sha256::digest(&cert_pem));

	// Manifest definition adhering to C2PA specification + Gono extensions
	let manifest_json = serde_json::json!({
		"claim_generator": "Gono Protocol/0.1.0",
		"assertions": [
			{
				"label": "c2pa.actions.v2",
				"data": {
					"actions": [
						{
							"action": "c2pa.created",
							"softwareAgent": "Gono Capture 0.1.0",
							"digitalSourceType": "http://cv.iptc.org/newscodes/digitalsourcetype/digitalCapture"
						}
					]
				}
			},
			{
				"label": "org.gono.provenance",
				"data": {
					"protocol": "gono",
					"version": "0.1.0",
					"content_hash": content_hash
				}
			}
		]
	});

	// Create builder with trust anchor context configured for the certificate
	let cert_pem_str = String::from_utf8_lossy(&cert_pem).to_string();
	let context = c2pa::settings::Settings::new()
		.with_value("trust.trust_anchors", cert_pem_str)
		.ok()
		.and_then(|s| C2paContext::new().with_settings(s).ok())
		.unwrap_or_default();

	let mut builder = Builder::from_context(context)
		.with_definition(manifest_json.to_string())
		.context("Failed to create C2PA builder")?;

	// Detect format from extension
	let format = match input
		.extension()
		.unwrap_or_default()
		.to_string_lossy()
		.to_lowercase()
		.as_str()
	{
		"jpg" | "jpeg" => "image/jpeg",
		"png" => "image/png",
		"webp" => "image/webp",
		"gif" => "image/gif",
		"mp4" => "video/mp4",
		"mov" => "video/quicktime",
		"wav" => "audio/wav",
		"mp3" => "audio/mpeg",
		"pdf" => "application/pdf",
		other => anyhow::bail!("Unsupported file format: .{other}"),
	};

	// Detect algorithm from key PEM header/content (defaulting to Es256, with Ed25519 fallback)
	let key_str = String::from_utf8_lossy(&key_pem);
	let alg = if key_str.contains("ED25519") || key_str.contains("Ed25519") {
		c2pa::SigningAlg::Ed25519
	} else {
		c2pa::SigningAlg::Es256
	};

	let signer = c2pa::create_signer::from_keys(&cert_pem, &key_pem, alg, None)
		.or_else(|_| {
			let fallback_alg = match alg {
				c2pa::SigningAlg::Es256 => c2pa::SigningAlg::Ed25519,
				_ => c2pa::SigningAlg::Es256,
			};
			c2pa::create_signer::from_keys(&cert_pem, &key_pem, fallback_alg, None)
		})
		.context("Failed to create C2PA signer from PEM keys")?;

	// Use a temporary file in the destination directory to ensure atomic writing
	// and automatic cleanup if signer creation or signing fails.
	let parent_dir = Path::new(&out_path)
		.parent()
		.unwrap_or_else(|| Path::new("."));
	let mut temp_file = tempfile::NamedTempFile::new_in(parent_dir)
		.context("Failed to create temporary output file in target directory")?;

	let mut source = fs::File::open(input).context("Failed to open input for signing")?;
	builder
		.sign(
			signer.as_ref(),
			format,
			&mut source,
			temp_file.as_file_mut(),
		)
		.context("C2PA signing failed")?;

	// Persist the temporary file to the final destination path
	temp_file.persist(&out_path).map_err(|e| {
		anyhow::anyhow!(
			"Failed to persist signed output file to {}: {}",
			out_path,
			e.error
		)
	})?;

	// Read back to extract the manifest label
	let reader = c2pa::Reader::from_context(C2paContext::default())
		.with_file(&out_path)
		.context("Failed to read signed file for manifest label")?;

	let manifest_label = reader.active_label().unwrap_or("unknown").to_string();

	Ok(SignResult {
		content_hash,
		manifest_label,
		signer_fingerprint,
		output_path: out_path,
	})
}
