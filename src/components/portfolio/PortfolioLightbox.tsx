"use client"

import { useState } from "react"

type Props = {
    children: React.ReactNode
    src: string
    type: "image" | "video"
}

export default function PortfolioLightbox({ children, src, type }: Props) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="cursor-pointer"
            >
                {children}
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 p-6"
                    onClick={() => setOpen(false)}
                >
                    <div className="max-h-full max-w-5xl overflow-hidden rounded-2xl border border-stone-800">
                        {type === "image" ? (
                            <img
                                src={src}
                                className="max-h-[85vh] w-full object-contain"
                            />
                        ) : (
                            <video
                                src={src}
                                controls
                                autoPlay
                                className="max-h-[85vh] w-full"
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    )
}