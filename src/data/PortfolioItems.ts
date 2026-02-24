type PortfolioItem = {
	id: string
	type: "image" | "video"
	src: string
	title: string
}

const portfolioItems: PortfolioItem[] = [
	{ id: "1", type: "image", src: "/portfolio/event-1.jpg", title: "Royal Birthday Celebration" },
	{ id: "2", type: "video", src: "/portfolio/event-film.mp4", title: "Luxury Reception Film" },
	{ id: "3", type: "image", src: "/portfolio/event-2.jpg", title: "Destination Birthday Wedding" },
	{ id: "4", type: "image", src: "/portfolio/event-3.jpg", title: "Corporate Gala Night" },
]

export default portfolioItems