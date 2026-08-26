"use client";

import React, { useState } from "react";
import { C2PAValidationState } from "@/lib/useC2PAVerification";
import {
	ShieldCheck,
	ShieldAlert,
	ShieldX,
	FileCode,
	GitBranch,
	KeyRound,
	Clock,
	Copy,
	Check,
	X,
	ExternalLink,
	Sparkles,
} from "lucide-react";

export interface ProvenanceDetailProps {
	cid: string;
	manifestUri?: string;
	validation: C2PAValidationState;
	isOpen: boolean;
	onClose: () => void;
}

export function ProvenanceDetail({
	cid,
	manifestUri,
	validation,
	isOpen,
	onClose,
}: ProvenanceDetailProps) {
	const [copiedKey, setCopiedKey] = useState<string | null>(null);
	const [activeTab, setActiveTab] = useState<"summary" | "assertions" | "dag" | "json">("summary");

	if (!isOpen) return null;

	const copyToClipboard = (text: string, key: string) => {
		navigator.clipboard.writeText(text);
		setCopiedKey(key);
		setTimeout(() => setCopiedKey(null), 2000);
	};

	const truncate = (str: string, len = 20) => {
		if (!str || str.length <= len) return str;
		return `${str.slice(0, len / 2)}...${str.slice(-len / 2)}`;
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
			<div
				className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-zinc-950/95 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden text-zinc-200"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800/80 bg-zinc-900/40">
					<div className="flex items-center gap-3">
						<div
							className={`p-2.5 rounded-xl ${
								validation.isValid
									? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
									: validation.isTamperFree
									? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
									: "bg-red-500/10 text-red-400 border border-red-500/20"
							}`}
						>
							{validation.isValid ? (
								<ShieldCheck className="w-6 h-6" />
							) : validation.isTamperFree ? (
								<ShieldAlert className="w-6 h-6" />
							) : (
								<ShieldX className="w-6 h-6" />
							)}
						</div>
						<div>
							<h3 className="text-xl font-bold text-white flex items-center gap-2">
								Content Credentials & Provenance
								<span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-normal bg-zinc-800 text-zinc-400 border border-zinc-700">
									C2PA v2.1
								</span>
							</h3>
							<p className="text-xs text-zinc-400 font-mono flex items-center gap-1.5 mt-0.5">
								CID: {truncate(cid, 24)}
								<button
									onClick={() => copyToClipboard(cid, "cid")}
									className="text-zinc-500 hover:text-zinc-300 transition-colors"
									title="Copy CID"
								>
									{copiedKey === "cid" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
								</button>
							</p>
						</div>
					</div>
					<button
						onClick={onClose}
						className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Tabs Navigation */}
				<div className="flex items-center gap-2 px-6 pt-3 border-b border-zinc-800/60 bg-zinc-900/20">
					{[
						{ id: "summary", label: "Overview", icon: Sparkles },
						{ id: "assertions", label: "Assertions", icon: FileCode },
						{ id: "dag", label: "DAG Provenance", icon: GitBranch },
						{ id: "json", label: "Raw Manifest", icon: FileCode },
					].map((tab) => {
						const Icon = tab.icon;
						const isActive = activeTab === tab.id;
						return (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id as typeof activeTab)}
								className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${
									isActive
										? "text-red-400 border-red-500 bg-red-500/5 rounded-t-lg"
										: "text-zinc-400 border-transparent hover:text-zinc-200 hover:border-zinc-700"
								}`}
							>
								<Icon className="w-4 h-4" />
								{tab.label}
							</button>
						);
					})}
				</div>

				{/* Content Body */}
				<div className="flex-1 overflow-y-auto p-6 space-y-6">
					{activeTab === "summary" && (
						<div className="space-y-5">
							{/* Status banner */}
							<div
								className={`p-4 rounded-xl border flex items-start gap-3.5 ${
									validation.isValid
										? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300"
										: validation.isTamperFree
										? "bg-amber-950/20 border-amber-500/30 text-amber-300"
										: "bg-red-950/20 border-red-500/30 text-red-300"
								}`}
							>
								<div className="mt-0.5">
									{validation.isValid ? (
										<ShieldCheck className="w-5 h-5 text-emerald-400" />
									) : validation.isTamperFree ? (
										<ShieldAlert className="w-5 h-5 text-amber-400" />
									) : (
										<ShieldX className="w-5 h-5 text-red-400" />
									)}
								</div>
								<div className="space-y-1">
									<p className="font-semibold text-sm">
										{validation.isValid
											? "Cryptographically Signed & Fully Authenticated"
											: validation.isTamperFree
											? "Tamper-Free Manifest (Development / Self-Signed Certificate)"
											: "Verification Incomplete or Tampered"}
									</p>
									<p className="text-xs opacity-80 leading-relaxed">
										{validation.isValid
											? "This asset contains an intact C2PA manifest signed by a trusted authority. Hashes and cryptographic signatures match on-chain records."
											: validation.isTamperFree
											? "The cryptographic hash matches the original media, but the signing certificate is in development mode or not on the default root trust list."
											: validation.error || "No valid manifest signatures could be confirmed."}
									</p>
								</div>
							</div>

							{/* Verification Grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{/* Signer Identity */}
								<div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
									<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
										<KeyRound className="w-4 h-4 text-red-400" />
										Signer Authority
									</div>
									<div>
										<p className="text-sm font-semibold text-white">
											{validation.signerName || "Gono Protocol Signer"}
										</p>
										<p className="text-xs text-zinc-400 mt-0.5">
											Algorithm: Ed25519 (RFC 8032 PureEdDSA)
										</p>
									</div>
									{validation.signerFingerprint && (
										<div className="pt-2 border-t border-zinc-800/60">
											<span className="text-[11px] text-zinc-500 block mb-1">SHA-256 Fingerprint:</span>
											<div className="flex items-center gap-1.5 bg-zinc-950 p-2 rounded-lg border border-zinc-800/60">
												<code className="text-xs font-mono text-zinc-300 break-all">
													{validation.signerFingerprint}
												</code>
												<button
													onClick={() => copyToClipboard(validation.signerFingerprint!, "fp")}
													className="text-zinc-500 hover:text-zinc-300 p-1"
												>
													{copiedKey === "fp" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
												</button>
											</div>
										</div>
									)}
								</div>

								{/* Asset Authenticity */}
								<div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
									<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
										<Clock className="w-4 h-4 text-emerald-400" />
										Capture & Creation Info
									</div>
									<div>
										<p className="text-sm font-semibold text-white">
											{validation.softwareAgent || "Gono Capture 0.1.0"}
										</p>
										<p className="text-xs text-zinc-400 mt-0.5">
											Source: {validation.digitalSourceType ? truncate(validation.digitalSourceType, 30) : "Digital Camera Capture"}
										</p>
									</div>
									<div className="pt-2 border-t border-zinc-800/60">
										<span className="text-[11px] text-zinc-500 block mb-1">Manifest Label / URN:</span>
										<div className="flex items-center gap-1.5 bg-zinc-950 p-2 rounded-lg border border-zinc-800/60">
											<code className="text-xs font-mono text-zinc-300 break-all">
												{validation.manifestLabel || "urn:c2pa:gono-provenance"}
											</code>
											<button
												onClick={() => copyToClipboard(validation.manifestLabel || "", "urn")}
												className="text-zinc-500 hover:text-zinc-300 p-1"
											>
												{copiedKey === "urn" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
											</button>
										</div>
									</div>
								</div>
							</div>

							{/* IPFS Manifest Resource */}
							{manifestUri && (
								<div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/80 flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div className="p-2 rounded-lg bg-red-500/10 text-red-400">
											<FileCode className="w-4 h-4" />
										</div>
										<div>
											<p className="text-xs font-medium text-white">IPFS Storage URI</p>
											<code className="text-xs font-mono text-zinc-400 break-all">{manifestUri}</code>
										</div>
									</div>
									<a
										href={manifestUri.startsWith("ipfs://") ? `https://ipfs.io/ipfs/${manifestUri.replace("ipfs://", "")}` : manifestUri}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all"
									>
										Open Gateway
										<ExternalLink className="w-3 h-3" />
									</a>
								</div>
							)}
						</div>
					)}

					{activeTab === "assertions" && (
						<div className="space-y-4">
							<p className="text-xs text-zinc-400">
								Embedded C2PA assertions describe the origin, capture environment, editing history, and cryptographic claims.
							</p>
							{validation.assertions.length === 0 ? (
								<div className="p-6 text-center text-zinc-500 border border-dashed border-zinc-800 rounded-xl">
									No assertions recorded in this manifest.
								</div>
							) : (
								validation.assertions.map((assertion, idx) => (
									<div key={idx} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
										<div className="flex items-center justify-between">
											<span className="text-sm font-semibold font-mono text-red-400">
												{assertion.label}
											</span>
											<span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono">
												Assertion #{idx + 1}
											</span>
										</div>
										<pre className="p-3 bg-zinc-950 rounded-lg text-xs font-mono text-zinc-300 overflow-x-auto border border-zinc-800/60">
											{JSON.stringify(assertion.data, null, 2)}
										</pre>
									</div>
								))
							)}
						</div>
					)}

					{activeTab === "dag" && (
						<div className="space-y-4">
							<p className="text-xs text-zinc-400">
								Gono Protocol tracks the Directed Acyclic Graph (DAG) of revisions, linking edits back to root capture assets on-chain.
							</p>
							<div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-6">
								{/* Parent CID node */}
								<div className="flex items-center gap-4">
									<div className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono text-xs text-zinc-400">
										01
									</div>
									<div className="flex-1 p-3 rounded-lg bg-zinc-950 border border-zinc-800">
										<span className="text-[10px] uppercase font-semibold text-zinc-500 block">
											Parent Asset (Root / Prior Revision)
										</span>
										<code className="text-xs font-mono text-zinc-300">
											{validation.parentCid || "None (Root Original Asset)"}
										</code>
									</div>
								</div>

								{/* Connector line */}
								<div className="ml-4 w-0.5 h-6 bg-gradient-to-b from-zinc-700 to-red-500" />

								{/* Current CID node */}
								<div className="flex items-center gap-4">
									<div className="w-9 h-9 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center font-mono text-xs text-red-400 font-bold">
										02
									</div>
									<div className="flex-1 p-3 rounded-lg bg-red-950/20 border border-red-500/30">
										<span className="text-[10px] uppercase font-semibold text-red-400 block">
											Current Asset (Committed on Gono Store)
										</span>
										<code className="text-xs font-mono text-white break-all">{cid}</code>
									</div>
								</div>
							</div>
						</div>
					)}

					{activeTab === "json" && (
						<div className="space-y-3">
							<div className="flex items-center justify-between">
								<span className="text-xs text-zinc-400">Raw C2PA JUMBF Manifest Data</span>
								{validation.rawManifestJson && (
									<button
										onClick={() => copyToClipboard(validation.rawManifestJson!, "raw")}
										className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300"
									>
										{copiedKey === "raw" ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
										Copy JSON
									</button>
								)}
							</div>
							<pre className="p-4 bg-zinc-950 rounded-xl text-xs font-mono text-zinc-300 overflow-x-auto max-h-96 border border-zinc-800">
								{validation.rawManifestJson ||
									JSON.stringify(
										{
											active_manifest: validation.manifestLabel,
											signer: validation.signerName,
											fingerprint: validation.signerFingerprint,
											assertions: validation.assertions,
											is_valid: validation.isValid,
										},
										null,
										2
									)}
							</pre>
						</div>
					)}
				</div>

				{/* Footer */}
				<div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/30 flex items-center justify-between text-xs text-zinc-500">
					<span>Verified on Gono Protocol Layer-1 Parachain</span>
					<button
						onClick={onClose}
						className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-all"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
}
