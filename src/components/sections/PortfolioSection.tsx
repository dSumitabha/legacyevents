import PortfolioItem from "@/components/portfolio/PortfolioItem"
import portfolioItems from "@/data/PortfolioItems"

export default function PortfolioSection() {
    return (
        <section
            aria-labelledby="portfolio-heading"
            className="bg-white py-28 dark:bg-stone-950"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Section Heading */}
                <div className="mb-16 max-w-2xl">
                    <p className="mb-4 text-sm uppercase tracking-[0.2em] text-rose-400">
                        Portfolio
                    </p>

                    <h2
                        id="portfolio-heading"
                        className="font-serif text-4xl leading-tight text-stone-800 dark:text-stone-100 sm:text-5xl"
                    >
                        Moments we’ve transformed into legacy.
                    </h2>
                </div>

                {/* Masonry Layout */}
                <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3 xl:columns-4">
                    {portfolioItems.map((item) => (
                        <PortfolioItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}