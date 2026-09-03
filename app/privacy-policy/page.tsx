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
                        Privacy Policy
                    </h1>
                    <div className='space-y-8 text-left'>
                        <p className='text-lg text-primary'>
                            Effective Date: September 3, 2026
                        </p>
                        <p className='text-lg text-primary'>
                            Thank you for playing Imposter.
                            This policy explains what information the app handles and how it is used.
                        </p>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Information We Collect
                            </h2>
                            <p className='text-lg text-primary'>
                                Imposter does not require an account to play, and we do not ask you to sign in.
                                When you play offline (passing one device between players in the same room), the player names you enter and your game settings are stored only on your device and are never sent to us.
                            </p>
                            <p className='text-lg text-primary'>
                                To let you play, the app downloads the list of categories and words from our servers.
                                This is a one-way download of game content to your device, not something we collect about you.
                            </p>
                            <p className='text-lg text-primary'>
                                Any other in-app preferences and settings you choose are also stored only on your device.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Advertising
                            </h2>
                            <p className='text-lg text-primary'>
                                Imposter is supported by ads served through Google AdMob.
                                To show and measure these ads, AdMob may collect information such as your device's advertising identifier, general device information, and approximate location.
                                Depending on your settings, this may be used to show ads that are more relevant to you.
                            </p>
                            <p className='text-lg text-primary'>
                                We do not receive or store this information ourselves.
                                It is handled by Google in accordance with Google's own privacy policy, which you can read at{' '}
                                <a
                                    className='underline'
                                    href='https://policies.google.com/privacy'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    policies.google.com/privacy
                                </a>.
                                You can review or change your ad personalization settings at any time through your device's settings.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Online Play
                            </h2>
                            <p className='text-lg text-primary'>
                                Imposter currently only supports playing on a single shared device.
                                We plan to add an Online mode in a future update, letting each player join a game from their own device instead.
                            </p>
                            <p className='text-lg text-primary'>
                                When Online mode becomes available, information needed to run a shared game, such as the player name you enter and gameplay session details like whose turn it is and which player has been assigned as the imposter, will need to be sent to our servers and shared with the other players in that same session.
                                This information is only used to run the game session you are part of.
                                Online mode will not require creating an account, and we do not intend to keep this information once your session ends.
                                We will update this section with more detail once Online mode is released.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Data Sharing
                            </h2>
                            <p className='text-lg text-primary'>
                                We do not sell or trade your information.
                                Beyond the advertising and, in the future, online play described above, we do not share information with anyone else.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Third-Party Services
                            </h2>
                            <p className='text-lg text-primary'>
                                The app lets you share it with friends and leave a review using your device's own share and app store features.
                                These use your device's built-in tools and are not something we control.
                                If you use them, please review the privacy policy of whichever app or service you choose to share through.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Children's Privacy
                            </h2>
                            <p className='text-lg text-primary'>
                                This game is intended for general audiences and is not directed at children under 13.
                                We do not knowingly collect personal information from children under 13.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Changes to This Policy
                            </h2>
                            <p className='text-lg text-primary'>
                                We may update this policy from time to time, including once Online mode is released.
                                If we make material changes, we will notify you within the app or on our website.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Contact Us
                            </h2>
                            <p className='text-lg text-primary'>
                                If you have any questions about this Privacy Policy, please contact us using one of the provided channels in the app or on our website.
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
