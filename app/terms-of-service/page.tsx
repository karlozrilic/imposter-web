'use client'
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <main className='flex min-h-screen flex-col items-center justify-center pt-24 pb-10 p-4'>
                <div className='max-w-3xl w-full'>
                    <div className='flex justify-center pb-16'>
                        <Image
                            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
                            src='/images/logo.svg'
                            alt='Imposter Logo'
                            width={180}
                            height={37}
                            priority
                        />
                    </div>
                    <h1 className='text-4xl font-bold text-center mb-10'>
                        Terms of Service
                    </h1>
                    <div className='space-y-8 text-left'>
                        <p className='text-lg text-primary'>
                            Effective Date: September 3, 2026
                        </p>
                        <p className='text-lg text-primary'>
                            Welcome to Imposter! By using this app, you agree to these Terms of Service.
                            Please read them carefully.
                        </p>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                1. Use of the App
                            </h2>
                            <p className='text-lg text-primary'>
                                You may use the app for personal, non-commercial entertainment purposes.
                                You must not use the app in any unlawful or harmful way.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                2. Intellectual Property
                            </h2>
                            <p className='text-lg text-primary'>
                                All content in the app, including text, graphics, game design, and branding, is owned by the developer.
                                You may not copy, reproduce, or distribute any part of the app without permission.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                3. Advertising
                            </h2>
                            <p className='text-lg text-primary'>
                                Imposter is free to play and is supported by ads shown through Google AdMob.
                                By using the app, you agree to the display of these ads.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                4. Online Play
                            </h2>
                            <p className='text-lg text-primary'>
                                A future update will add an Online mode, letting you play with other players over the internet instead of sharing one device.
                                When Online mode is available, you agree not to use it to harass, abuse, or send unlawful or offensive content to other players.
                                We may suspend access to Online mode for anyone who misuses it.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                5. No Warranties
                            </h2>
                            <p className='text-lg text-primary'>
                                The app is provided "as is" without any warranties.
                                We do not guarantee that the app will be error-free, uninterrupted, or available at all times.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                6. Limitation of Liability
                            </h2>
                            <p className='text-lg text-primary'>
                                We are not liable for any damages or losses resulting from your use of the app.
                                This includes indirect, incidental, or consequential damages.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                7. User Conduct
                            </h2>
                            <p className='text-lg text-primary'>
                                You agree not to misuse the app, reverse-engineer its code, or use it to harm others or collect data unlawfully.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                8. Termination
                            </h2>
                            <p className='text-lg text-primary'>
                                We may suspend or terminate your access to the app at any time, without notice, if you violate these terms.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                9. Changes to Terms
                            </h2>
                            <p className='text-lg text-primary'>
                                We may update these Terms of Service at any time, including once Online mode is released.
                                If changes are significant, we will notify you in the app or on our website.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                10. Contact
                            </h2>
                            <p className='text-lg text-primary'>
                                If you have any questions about these Terms, contact us using one of the provided channels in the app or on our website.
                            </p>
                        </section>
                    </div>
                    <div className='mt-12 text-center'>
                        <a
                            className='inline-block text-primary hover:underline'
                            href='/'
                        >← Back</a>
                    </div>
                </div>
            </main>
        </>
    );
}
