import Image from "next/image"
import PortfolioLightbox from "@/components/portfolio/PortfolioLightbox"

type PortfolioItemProps = {
    item: {
        id: string
        type: "image" | "video"
        src: string
        title: string
    }
}

export default function PortfolioItem({ item }: PortfolioItemProps) {
    return (
        <div className="group relative break-inside-avoid overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
            <PortfolioLightbox src={item.src} type={item.type}>
                {item.type === "image" ? (
                    <Image
                        src={item.src}
                        alt={item.title}
                        width={800}
                        height={1000}
                        className="h-full w-full transform object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                ) : (
                    <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-rose-50/80 via-rose-50/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100 dark:from-stone-950/80 dark:via-stone-950/40" />

                {/* Title */}
                <div className="absolute bottom-6 left-6 opacity-0 transition duration-500 group-hover:opacity-100">
                    <h3 className="font-serif text-lg text-stone-800 dark:text-stone-100">
                        {item.title}
                    </h3>
                </div>
            </PortfolioLightbox>
        </div>
    )
}