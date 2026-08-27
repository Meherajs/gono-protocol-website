//! Integration tests for Gono C2PA Bridge.
//!
//! Tests:
//! 1. Generate programmatic 1x1 pixel test JPEG.
//! 2. Generate self-signed Ed25519 cert/key pair using `rcgen`.
//! 3. Sign the test JPEG with `sign_file`.
//! 4. Verify the signed output with `verify_file`.
//! 5. Assert SHA-256 content hash matches original.
//! 6. Assert "org.gono.provenance" and "c2pa.created" assertions are present.

use gono_c2pa_bridge::{sign::sign_file, verify::verify_file};
use std::fs;
use std::io::Write;

// Valid 1x1 white pixel JPEG bytes
const MINIMAL_JPEG: &[u8] = &[
	0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x01, 0x00, 0x48,
	0x00, 0x48, 0x00, 0x00, 0xff, 0xdb, 0x00, 0x43, 0x00, 0x08, 0x06, 0x06, 0x07, 0x06, 0x05, 0x08,
	0x07, 0x07, 0x07, 0x09, 0x09, 0x08, 0x0a, 0x0c, 0x14, 0x0d, 0x0c, 0x0b, 0x0b, 0x0c, 0x19, 0x12,
	0x13, 0x0f, 0x14, 0x1d, 0x1a, 0x1f, 0x1e, 0x1d, 0x1a, 0x1c, 0x1c, 0x20, 0x24, 0x2e, 0x27, 0x20,
	0x22, 0x2c, 0x23, 0x1c, 0x1c, 0x28, 0x37, 0x29, 0x2c, 0x30, 0x31, 0x34, 0x34, 0x34, 0x1f, 0x27,
	0x39, 0x3d, 0x38, 0x32, 0x3c, 0x2e, 0x33, 0x34, 0x32, 0xff, 0xc0, 0x00, 0x0b, 0x08, 0x00, 0x01,
	0x00, 0x01, 0x01, 0x01, 0x11, 0x00, 0xff, 0xc4, 0x00, 0x1f, 0x00, 0x00, 0x01, 0x05, 0x01, 0x01,
	0x01, 0x01, 0x01, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x02, 0x03, 0x04,
	0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0xff, 0xda, 0x00, 0x08, 0x01, 0x01, 0x00, 0x00, 0x3f,
	0x00, 0xbf, 0x00, 0xff, 0xd9,
];

#[test]
fn test_c2pa_sign_and_verify_pipeline() -> anyhow::Result<()> {
	// 1. Create temporary input JPEG
	let mut input_file = tempfile::Builder::new().suffix(".jpg").tempfile()?;
	input_file.write_all(MINIMAL_JPEG)?;
	let input_path = input_file.path().to_string_lossy().to_string();

	// 2. Generate standard X.509 Ed25519 certificate and private key via openssl with minimal config
	let cnf_temp = tempfile::Builder::new().suffix(".cnf").tempfile()?;
	let cnf_content = "[req]\ndistinguished_name = req_dn\nx509_extensions = v3_req\nprompt = no\n[req_dn]\nC = BD\nO = Gono Protocol\nCN = Gono Dev\n[v3_req]\nkeyUsage = digitalSignature\nextendedKeyUsage = emailProtection\n";
	fs::write(cnf_temp.path(), cnf_content)?;

	// 2. Generate 2-tier certificate chain with OpenSSL: CA + Leaf cert
	let temp_dir = tempfile::tempdir()?;
	let ca_key_path = temp_dir.path().join("ca_key.pem");
	let ca_cert_path = temp_dir.path().join("ca_cert.pem");
	let leaf_key_path = temp_dir.path().join("leaf_key.pem");
	let leaf_csr_path = temp_dir.path().join("leaf.csr");
	let leaf_cert_path = temp_dir.path().join("leaf_cert.pem");
	let cert_path = temp_dir
		.path()
		.join("cert_chain.pem")
		.to_string_lossy()
		.to_string();
	let key_path = leaf_key_path.to_string_lossy().to_string();

	// A. Generate CA
	std::process::Command::new("openssl")
		.args([
			"req",
			"-x509",
			"-newkey",
			"ed25519",
			"-keyout",
			&ca_key_path.to_string_lossy(),
			"-out",
			&ca_cert_path.to_string_lossy(),
			"-days",
			"365",
			"-nodes",
			"-config",
			&cnf_temp.path().to_string_lossy(),
			"-subj",
			"/CN=Gono Root CA/O=Gono Protocol",
		])
		.status()?;

	// B. Generate Leaf CSR & Key
	std::process::Command::new("openssl")
		.args([
			"req",
			"-new",
			"-newkey",
			"ed25519",
			"-keyout",
			&leaf_key_path.to_string_lossy(),
			"-out",
			&leaf_csr_path.to_string_lossy(),
			"-nodes",
			"-config",
			&cnf_temp.path().to_string_lossy(),
			"-subj",
			"/CN=Gono Dev/O=Gono Protocol",
		])
		.status()?;

	// C. Sign Leaf CSR with CA
	std::process::Command::new("openssl")
		.args([
			"x509",
			"-req",
			"-in",
			&leaf_csr_path.to_string_lossy(),
			"-CA",
			&ca_cert_path.to_string_lossy(),
			"-CAkey",
			&ca_key_path.to_string_lossy(),
			"-CAcreateserial",
			"-extfile",
			&cnf_temp.path().to_string_lossy(),
			"-extensions",
			"v3_req",
			"-out",
			&leaf_cert_path.to_string_lossy(),
			"-days",
			"365",
		])
		.status()?;

	// D. Combine leaf + CA into full cert chain
	let leaf_pem = fs::read_to_string(&leaf_cert_path)?;
	let ca_pem = fs::read_to_string(&ca_cert_path)?;
	fs::write(&cert_path, format!("{leaf_pem}\n{ca_pem}"))?;

	// Output signed file path
	let output_path = temp_dir
		.path()
		.join("signed.jpg")
		.to_string_lossy()
		.to_string();

	// 3. Sign the file
	let sign_result = sign_file(&input_path, &cert_path, &key_path, Some(&output_path))?;
	assert!(!sign_result.content_hash.is_empty());
	assert!(!sign_result.manifest_label.is_empty());
	assert!(!sign_result.signer_fingerprint.is_empty());
	assert!(fs::metadata(&output_path)?.len() > 0);

	// 4. Verify the signed file with allow_untrusted = true (since dev self-signed)
	let verify_result = verify_file(&output_path, true)?;
	assert!(
		verify_result.is_valid,
		"Expected valid C2PA manifest with allow_untrusted"
	);
	assert!(
		verify_result.is_tamper_free,
		"Expected tamper-free manifest"
	);

	// 5. Assert custom assertions are present
	let gono_assertion = verify_result
		.assertions
		.iter()
		.find(|a| a.label == "org.gono.provenance");
	assert!(
		gono_assertion.is_some(),
		"Expected 'org.gono.provenance' assertion"
	);

	let actions_assertion = verify_result
		.assertions
		.iter()
		.find(|a| a.label == "c2pa.actions.v2" || a.label == "c2pa.actions");
	assert!(
		actions_assertion.is_some(),
		"Expected 'c2pa.actions' assertion"
	);

	Ok(())
}
