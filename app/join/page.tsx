'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.zrilich.imposter';

function Join() {
    const code = (useSearchParams().get('code') ?? '')
        .toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
    const [copied, setCopied] = useState(false);

    const openApp = `intent://imposter.zrilich.com/join?code=${code}#Intent;scheme=https;package=com.zrilich.imposter;S.browser_fallback_url=${encodeURIComponent(PLAY_URL)};end`;

    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard blocked (old/in-app browser) - the code is still visible to type in.
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
            <img src="/images/logo.svg" alt="Imposter" className="w-28 h-28" />
            <h1 className="text-2xl font-bold">You're invited to an Imposter game!</h1>
            {code && (
                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm uppercase tracking-widest opacity-70">Room code</p>
                    <div className="flex items-center gap-3">
                        <span className="text-4xl font-bold tracking-[0.3em] text-red-500">{code}</span>
                        <button
                            onClick={copyCode}
                            className="rounded-xl border border-current/30 px-3 py-2 text-sm font-semibold"
                            aria-label="Copy room code"
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
            )}
            <a href={openApp} className="rounded-2xl bg-red-500 px-8 py-4 font-bold text-white">
                Open in app
            </a>
            <a href={PLAY_URL}>
                <img src="/images/gp.png" alt="Get it on Google Play" className="h-14" />
            </a>
        </main>
    );
}

export default function JoinPage() {
    return <Suspense><Join /></Suspense>;
}