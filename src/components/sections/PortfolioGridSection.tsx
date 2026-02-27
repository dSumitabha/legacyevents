"use client"

import { useState } from "react"
import Image from "next/image"
import  PortfolioItems  from "@/data/PortfolioItems"

type Category = "All" | "Weddings" | "Rice Ceremony" | "Birthdays" | "Corporate"

const categories: Category[] = [
    "All",
    "Weddings",
    "Rice Ceremony",
    "Birthdays",
    "Corporate",
]

export default function PortfolioGridSection() {
    const [activeCategory, setActiveCategory] = useState<Category>("All")

    const filteredItems =
        activeCategory === "All"
            ? PortfolioItems.filter((item) => item.type === "image")
            : PortfolioItems.filter(
                (item) => item.category === activeCategory && item.type === "image"
            );

    return (
        <section className="bg-white dark:bg-stone-950 py-24 md:py-32">

            <div className="max-w-7xl mx-auto px-6">

                {/* Category Filter */}
                <div className="flex justify-center mb-16">
                    <div className="flex flex-wrap gap-6 text-sm tracking-wide">

                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`transition-colors duration-300 pb-1 border-b ${
                                    activeCategory === category
                                        ? "border-rose-400 text-stone-800 dark:text-stone-100"
                                        : "border-transparent text-stone-400 hover:text-rose-400"
                                }`}
                            >
                                {category}
                            </button>
                        ))}

                    </div>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden break-inside-avoid rounded-2xl shadow-sm hover:shadow-md transition-all duration-500"
                        >

                            <div className="relative w-full aspect-[4/5]">

                                <Image
                                    src={item.src}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Text Reveal */}
                            <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">

                                <h3 className="font-serif text-xl text-white">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-stone-300 mt-1">
                                    {item.location} · {item.year}
                                </p>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}