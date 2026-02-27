"use client"

import Image from "next/image"

export default function FeaturedStorySection() {
    return (
        <section className="bg-white dark:bg-stone-950 py-28 md:py-36">

            {/* Full Width Hero Image */}
            <div className="relative w-full h-[70vh] overflow-hidden">
                <Image
                    src="/portfolio/event-4.jpg"
                    alt="Luxury wedding stage design by Legacy Events"
                    fill
                    className="object-cover"
                />

                {/* Soft cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent" />
            </div>

            {/* Narrative Section */}
            <div className="max-w-7xl mx-auto px-6 mt-20">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column — Story */}
                    <div className="space-y-8">

                        <div className="space-y-4">
                            <p className="text-sm tracking-widest text-rose-400 uppercase">
                                Featured Story
                            </p>

                            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-stone-800 dark:text-stone-100">
                                The Sen Wedding Celebration
                            </h2>

                            <p className="text-stone-400 text-sm">
                                Kolkata · 2024
                            </p>
                        </div>

                        <div className="space-y-6 text-stone-600 dark:text-stone-400 leading-relaxed font-light">

                            <p>
                                Inspired by timeless Bengali heritage and modern
                                elegance, this celebration was designed to feel
                                intimate yet grand. The visual direction focused on
                                warm florals, layered lighting, and handcrafted
                                detailing.
                            </p>

                            <p>
                                The challenge was balancing tradition with
                                contemporary refinement. From stage architecture
                                to guest flow experience, every element was
                                carefully orchestrated to preserve cultural
                                authenticity while elevating aesthetics.
                            </p>

                            <p>
                                The result was a seamless emotional journey —
                                beginning with ritual depth and culminating in a
                                luminous evening reception.
                            </p>

                        </div>

                    </div>

                    {/* Right Column — Stacked Images */}
                    <div className="space-y-10">

                        <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-sm">
                            <Image
                                src="/portfolio/mandap.jpg"
                                alt="Floral mandap design"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        <div className="relative h-[380px] overflow-hidden rounded-2xl shadow-sm">
                            <Image
                                src="/portfolio/lighting.jpg"
                                alt="Reception lighting design"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}