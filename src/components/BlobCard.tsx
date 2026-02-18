import Image from "next/image"

export default function BlobCard() {
    return (
        <div className="absolute bottom-16 left-16 hidden md:block">

            <div className="relative w-72 h-80">

                {/* Offset Blob Border */}
                <div
                    className="absolute inset-0 -translate-x-4 -translate-y-4 border border-rose-200 dark:border-stone-700"
                    style={{
                        clipPath:
                            "path('M 60 10 Q 140 -10 200 40 Q 260 90 230 170 Q 200 250 120 260 Q 40 270 20 200 Q 0 130 60 10 Z')",
                    }}
                />

                {/* Image Blob */}
                <div
                    className="relative w-full h-full overflow-hidden"
                    style={{
                        clipPath:
                            "path('M 60 10 Q 140 -10 200 40 Q 260 90 230 170 Q 200 250 120 260 Q 40 270 20 200 Q 0 130 60 10 Z')",
                    }}
                >
                    <Image
                        src="/images/wedding_sample.jpg"
                        alt="Wedding moment"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </div>
    )
}