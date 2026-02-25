import Image from "next/image"
import posts from "@/data/InstagramPosts"

export default function InstagramFeedSection() {
    return (
        <section
            aria-labelledby="instagram-feed-heading"
            className="bg-white py-28 dark:bg-stone-950"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                {/* Section Header */}
                <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-rose-400">
                            Living Brand
                        </p>

                        <h2
                            id="instagram-feed-heading"
                            className="font-serif text-4xl leading-tight text-stone-800 dark:text-stone-100 sm:text-5xl"
                        >
                            Moments beyond the spotlight.
                        </h2>
                    </div>

                    <a
                        href="https://instagram.com/"
                        target="_blank"
                        className="border-b border-rose-400 pb-1 text-sm font-medium text-stone-800 transition hover:text-rose-500 dark:text-stone-100"
                    >
                        Follow Us
                    </a>
                </div>

                {/* 6 Image Grid */}
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="group relative overflow-hidden rounded-xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900"
                        >
                            <Image
                                src={post.image}
                                alt={post.caption}
                                width={600}
                                height={600}
                                className="h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                            />

                            {/* Hover Caption */}
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-rose-50/90 via-rose-50/40 to-transparent p-4 opacity-0 transition duration-500 group-hover:opacity-100 dark:from-stone-950/90 dark:via-stone-950/40">
                                <p className="text-sm text-stone-800 dark:text-stone-100">
                                    {post.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}