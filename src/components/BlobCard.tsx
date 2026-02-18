import Image from "next/image"

export default function BlobCard() {
    return (
        <div className="absolute bottom-16 left-16 hidden md:block">

            <div className="relative w-72 h-80">

                {/* Offset Blob Outline */}
                <svg
                    className="absolute -top-4 -left-4 w-full h-full"
                    viewBox="0 0 300 300"
                    fill="none"
                >
                    <path
                        d="M60 20 C140 -10 260 40 250 150 C240 260 120 280 60 220 C0 160 10 60 60 20 Z"
                        stroke="rgb(254 205 211)"  // rose-200
                        strokeWidth="2"
                        className="dark:stroke-stone-700"
                    />
                </svg>

                {/* Blob Masked Image */}
                <div className="relative w-full h-full overflow-hidden">
                    <svg
                        viewBox="0 0 300 300"
                        className="absolute w-0 h-0"
                    >
                        <defs>
                            <clipPath id="blobClip">
                                <path d="M60 20 C140 -10 260 40 250 150 C240 260 120 280 60 220 C0 160 10 60 60 20 Z" />
                            </clipPath>
                        </defs>
                    </svg>

                    <div
                        className="w-full h-full"
                        style={{ clipPath: "url(#blobClip)" }}
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
        </div>
    )
}