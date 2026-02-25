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
	{ id: "5", type: "image", src: "/portfolio/event-4.jpg", title: "Royal Birthday Celebration" },
	{ id: "6", type: "video", src: "/portfolio/event-film-2.mp4", title: "Luxury Reception Film" },
	{ id: "7", type: "image", src: "/portfolio/event-5.jpg", title: "Destination Birthday Wedding" },
	{ id: "8", type: "image", src: "/portfolio/event-6.jpg", title: "Corporate Gala Night" },
]

export default portfolioItems