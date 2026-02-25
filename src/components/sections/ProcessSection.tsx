import steps from "@/data/ProcessSteps"

export default function ProcessSection() {
    return (
        <section
            aria-labelledby="process-heading"
            className="bg-rose-50 py-28 dark:bg-stone-950"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Section Header */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-rose-400">
                        How We Work
                    </p>

                    <h2
                        id="process-heading"
                        className="font-serif text-4xl leading-tight text-stone-800 dark:text-stone-100 sm:text-5xl"
                    >
                        A refined process.
                        <br className="hidden sm:block" />
                        Designed for peace of mind.
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="group relative text-center"
                        >
                            {/* Number */}
                            <div className="mb-6 flex justify-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-rose-300 text-lg font-serif text-rose-400 transition duration-300 group-hover:border-rose-500 group-hover:text-rose-500">
                                    {step.number}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="mb-4 font-serif text-xl text-stone-800 dark:text-stone-100">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="mx-auto max-w-xs text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                                {step.description}
                            </p>

                            {/* Subtle Connector Line (Desktop Only) */}
                            <div className="absolute right-[-50%] top-7 hidden h-px w-full bg-stone-200 dark:bg-stone-800 lg:block last:hidden" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}