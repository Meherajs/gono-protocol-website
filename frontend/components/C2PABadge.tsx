"use client";

import React, { useState } from "react";
import { useC2PAVerification } from "@/lib/useC2PAVerification";
import { ProvenanceDetail } from "./ProvenanceDetail";
import { ShieldCheck, ShieldAlert, ShieldX, Shield, Loader2 } from "lucide-react";

export interface C2PABadgeProps {
	cid: string;
	manifestUri?: string;
	signerFingerprint?: string;
	manifestLabel?: string;
	parentCid?: string | null;
	size?: "sm" | "md" | "lg";
	showSigner?: boolean;
	allowUntrusted?: boolean;
	className?: string;
}

export function C2PABadge({
	cid,
	manifestUri,
	signerFingerprint,
	manifestLabel,
	parentCid,
	size = "md",
	showSigner = true,
	allowUntrusted = true,
	className = "",
}: C2PABadgeProps) {
	const [isDetailOpen, setIsDetailOpen] = useState(false);

	const validation = useC2PAVerification(manifestUri, {
		allowUntrusted,
		initialSignerFingerprint: signerFingerprint,
		initialManifestLabel: manifestLabel,
		parentCid,
	});

	// Size styles
	const sizeClasses = {
		sm: "text-xs px-2 py-0.5 gap-1.5",
		md: "text-xs px-2.5 py-1 gap-1.5",
		lg: "text-sm px-3.5 py-1.5 gap-2",
	}[size];

	const iconSizeClasses = {
		sm: "w-3 h-3",
		md: "w-3.5 h-3.5",
		lg: "w-4 h-4",
	}[size];

	// Loading state
	if (validation.isLoading) {
		return (
			<div
				className={`inline-flex items-center rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-400 animate-pulse font-medium ${sizeClasses} ${className}`}
			>
				<Loader2 className={`${iconSizeClasses} animate-spin text-zinc-500`} />
				<span>Verifying C2PA...</span>
			</div>
		);
	}

	// No C2PA URI present
	if (!manifestUri || manifestUri.trim() === "") {
		return (
			<div
				className={`inline-flex items-center rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-500 font-medium ${sizeClasses} ${className}`}
				title="No C2PA provenance manifest attached to this asset"
			>
				<Shield className={iconSizeClasses} />
				<span>No C2PA</span>
			</div>
		);
	}

	// Valid & Trusted or Allow-Untrusted Valid
	const isDevUnverified = validation.isTamperFree && !validation.isTrusted;

	const badgeTheme = validation.isValid && !isDevUnverified
		? {
				bg: "bg-emerald-500/10 hover:bg-emerald-500/15 border-emerald-500/30 text-emerald-300 hover:border-emerald-500/50 shadow-emerald-950/30",
				icon: ShieldCheck,
				label: "C2PA Verified",
		  }
		: isDevUnverified
		? {
				bg: "bg-amber-500/10 hover:bg-amber-500/15 border-amber-500/30 text-amber-300 hover:border-amber-500/50 shadow-amber-950/30",
				icon: ShieldAlert,
				label: "C2PA (Dev Signer)",
		  }
		: {
				bg: "bg-red-500/10 hover:bg-red-500/15 border-red-500/30 text-red-300 hover:border-red-500/50 shadow-red-950/30",
				icon: ShieldX,
				label: "C2PA Tampered",
		  };

	const Icon = badgeTheme.icon;

	return (
		<>
			<button
				type="button"
				onClick={() => setIsDetailOpen(true)}
				className={`inline-flex items-center rounded-full border shadow-sm font-medium transition-all cursor-pointer select-none group ${badgeTheme.bg} ${sizeClasses} ${className}`}
				title="Click to inspect content authenticity credentials and DAG provenance"
			>
				<Icon className={`${iconSizeClasses} transition-transform group-hover:scale-110`} />
				<span className="font-semibold">{badgeTheme.label}</span>
				{showSigner && validation.signerName && (
					<span className="opacity-70 font-normal border-l border-current/20 pl-1.5 truncate max-w-[120px]">
						{validation.signerName}
					</span>
				)}
			</button>

			<ProvenanceDetail
				cid={cid}
				manifestUri={manifestUri}
				validation={validation}
				isOpen={isDetailOpen}
				onClose={() => setIsDetailOpen(false)}
			/>
		</>
	);
}
