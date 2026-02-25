"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
                scrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-stone-950/90"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
                
                {/* Logo */}
                <Link
                    href="/"
                    className="font-serif text-2xl text-stone-800 transition dark:text-stone-100"
                >
                    Legacy Events
                </Link>

                {/* Navigation */}
                <nav className="hidden gap-10 text-sm uppercase tracking-[0.15em] md:flex">
                    <Link
                        href="/"
                        className="text-stone-700 transition hover:text-rose-500 dark:text-stone-200"
                    >
                        Home
                    </Link>
                    <Link
                        href="/portfolio"
                        className="text-stone-700 transition hover:text-rose-500 dark:text-stone-200"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/services"
                        className="text-stone-700 transition hover:text-rose-500 dark:text-stone-200"
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="text-stone-700 transition hover:text-rose-500 dark:text-stone-200"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    )
}