//! C2PA verification logic using `c2pa::Reader`.

use anyhow::{Context, Result};
use serde::Serialize;

/// Result of a C2PA verification operation.
#[derive(Debug, Serialize)]
pub struct VerifyResult {
	/// Overall validation status (true only if tamper-free and trusted, or if allow_untrusted is explicitly enabled)
	pub is_valid: bool,
	/// Whether cryptographic integrity checks passed (hash matches, assertions validated)
	pub is_tamper_free: bool,
	/// Whether certificate chain is trusted
	pub is_trusted: bool,
	/// Active manifest label (URN)
	pub manifest_label: Option<String>,
	/// Validation status messages
	pub validation_status: Vec<ValidationEntry>,
	/// Signer information
	pub signer_info: Option<SignerInfo>,
	/// List of assertions found in the manifest
	pub assertions: Vec<AssertionInfo>,
	/// Full manifest JSON (for detailed inspection)
	pub manifest_json: String,
}

#[derive(Debug, Serialize)]
pub struct ValidationEntry {
	pub code: String,
	pub explanation: String,
	pub success: bool,
}

#[derive(Debug, Serialize)]
pub struct SignerInfo {
	pub issuer: Option<String>,
	pub alg: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct AssertionInfo {
	pub label: String,
	pub data: serde_json::Value,
}

/// Verify a signed file's C2PA manifest.
///
/// Reads the embedded manifest, checks validation status, and extracts
/// signer info and assertions.
///
/// # Arguments
/// * `file_path` - Path to the signed media file
/// * `allow_untrusted` - If true, allow self-signed / untrusted development certificates (structural validation only)
pub fn verify_file(file_path: &str, allow_untrusted: bool) -> Result<VerifyResult> {
	let reader = c2pa::Reader::from_context(c2pa::Context::default())
		.with_file(file_path)
		.context("Failed to read C2PA manifest from file")?;

	let manifest_json = reader.json();

	// Parse the JSON to extract structured info
	let parsed: serde_json::Value =
		serde_json::from_str(&manifest_json).context("Failed to parse manifest JSON")?;

	let manifest_label = parsed
		.get("active_manifest")
		.and_then(|v| v.as_str())
		.map(|s| s.to_string());

	// Extract validation state and status
	let mut validation_entries = Vec::new();
	let mut is_trusted = true;

	if let Some(results) = parsed.get("validation_results") {
		if let Some(active) = results.get("activeManifest") {
			// Collect successes
			if let Some(successes) = active.get("success").and_then(|v| v.as_array()) {
				for entry in successes {
					validation_entries.push(ValidationEntry {
						code: entry
							.get("code")
							.and_then(|v| v.as_str())
							.unwrap_or("")
							.to_string(),
						explanation: entry
							.get("explanation")
							.and_then(|v| v.as_str())
							.unwrap_or("")
							.to_string(),
						success: true,
					});
				}
			}
			// Collect failures
			if let Some(failures) = active.get("failure").and_then(|v| v.as_array()) {
				for entry in failures {
					let code = entry
						.get("code")
						.and_then(|v| v.as_str())
						.unwrap_or("")
						.to_string();
					if code == "signingCredential.untrusted" {
						is_trusted = false;
					}
					validation_entries.push(ValidationEntry {
						code,
						explanation: entry
							.get("explanation")
							.and_then(|v| v.as_str())
							.unwrap_or("")
							.to_string(),
						success: false,
					});
				}
			}
		}
	}

	// Derive validity from validation_state
	let validation_state_str = parsed
		.get("validation_state")
		.and_then(|v| v.as_str())
		.unwrap_or("Invalid");
	let is_tamper_free = validation_state_str.eq_ignore_ascii_case("Valid");
	let is_valid = is_tamper_free && (is_trusted || allow_untrusted);

	// Extract signer info from the active manifest
	let signer_info = manifest_label.as_ref().and_then(|label| {
		parsed
			.get("manifests")
			.and_then(|m| m.get(label))
			.and_then(|manifest| manifest.get("signature_info"))
			.map(|sig| SignerInfo {
				issuer: sig.get("issuer").and_then(|v| v.as_str()).map(String::from),
				alg: sig.get("alg").and_then(|v| v.as_str()).map(String::from),
			})
	});

	// Extract assertions
	let mut assertions = Vec::new();
	if let Some(label) = &manifest_label {
		if let Some(manifest) = parsed.get("manifests").and_then(|m| m.get(label)) {
			if let Some(asserts) = manifest.get("assertions").and_then(|a| a.as_array()) {
				for assertion in asserts {
					assertions.push(AssertionInfo {
						label: assertion
							.get("label")
							.and_then(|v| v.as_str())
							.unwrap_or("")
							.to_string(),
						data: assertion
							.get("data")
							.cloned()
							.unwrap_or(serde_json::Value::Null),
					});
				}
			}
		}
	}

	Ok(VerifyResult {
		is_valid,
		is_tamper_free,
		is_trusted,
		manifest_label,
		validation_status: validation_entries,
		signer_info,
		assertions,
		manifest_json,
	})
}
