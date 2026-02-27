import PortfolioHeroSection from "@/components/sections/PortfolioHeroSection"
import PortfolioIntroSection from "@/components/sections/PortfolioIntroSection"

export default function PortfolioPage() {
    return (
        <main className="bg-rose-50 dark:bg-stone-950 text-stone-800 dark:text-stone-100">
            <PortfolioHeroSection />
            <PortfolioIntroSection />
        </main>
    )
}