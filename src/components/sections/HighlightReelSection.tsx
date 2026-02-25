export default function HighlightReelSection() {
    return (
        <section
            aria-labelledby="highlight-reel-heading"
            className="relative h-screen w-full overflow-hidden"
        >
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/videos/highlight-reel.mp4" type="video/mp4" />
            </video>

            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-rose-50/80 via-rose-50/60 to-rose-50/80 dark:from-stone-950/90 dark:via-stone-950/80 dark:to-stone-950/90" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <p className="mb-6 text-sm uppercase tracking-[0.25em] text-rose-400">
                    Highlight Reel
                </p>

                <h2
                    id="highlight-reel-heading"
                    className="max-w-3xl font-serif text-4xl leading-tight text-stone-800 dark:text-stone-100 sm:text-5xl lg:text-6xl"
                >
                    Every celebration tells a story.
                    <br className="hidden sm:block" />
                    We bring it to life.
                </h2>

                {/* CTA */}
                <div className="mt-10">
                    <a
                        href="/portfolio"
                        className="inline-block border-b border-rose-400 pb-1 text-lg font-medium text-stone-800 transition hover:text-rose-500 dark:text-stone-100"
                    >
                        Watch Full Story
                    </a>
                </div>
            </div>
        </section>
    )
}