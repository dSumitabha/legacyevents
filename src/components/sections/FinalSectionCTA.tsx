export default function FinalCTASection() {
    return (
        <section
            aria-labelledby="final-cta-heading"
            className="bg-rose-50 py-32 dark:bg-stone-950"
        >
            <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
                
                {/* Emotional Headline */}
                <h2
                    id="final-cta-heading"
                    className="font-serif text-4xl leading-tight text-stone-800 dark:text-stone-100 sm:text-5xl lg:text-6xl"
                >
                    Let’s Begin Your Celebration
                </h2>

                {/* Reassurance Line */}
                <p className="mx-auto mt-6 max-w-xl text-lg text-stone-600 dark:text-stone-400">
                    Thoughtfully designed. Seamlessly executed. 
                    Tailored entirely around you.
                </p>

                {/* CTA Button */}
                <div className="mt-12">
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-rose-400 px-10 py-4 text-sm font-medium uppercase tracking-wide text-white transition duration-300 hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-offset-2 focus:ring-offset-rose-50 dark:focus:ring-offset-stone-950"
                    >
                        Book a Consultation
                    </a>
                </div>
            </div>
        </section>
    )
}