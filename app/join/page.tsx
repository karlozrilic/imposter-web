'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.zrilich.imposter';

function Join() {
    const code = (useSearchParams().get('code') ?? '')
        .toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
    const openApp = `intent://imposter.zrilich.com/join?code=${code}#Intent;scheme=https;package=com.zrilich.imposter;S.browser_fallback_url=${encodeURIComponent(PLAY_URL)};end`;

    return (
        <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 text-center">
            <img src="/images/logo.svg" alt="Imposter" className="w-28 h-28" />
            <h1 className="text-2xl font-bold">You're invited to an Imposter game!</h1>
            {code && (
                <p className="text-lg">
                    Room code: <span className="font-bold tracking-[0.3em] text-red-500">{code}</span>
                </p>
            )}
            <a href={openApp} className="rounded-2xl bg-red-500 px-8 py-4 font-bold text-white">Open in app</a>
            <a href={PLAY_URL}><img src="/images/gp.png" alt="Get it on Google Play" className="h-14" /></a>
        </main>
    );
}

export default function JoinPage() {
    return <Suspense><Join /></Suspense>;
}