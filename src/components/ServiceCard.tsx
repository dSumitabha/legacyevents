type Props = {
    title: string
    description: string
}

export default function ServiceCard({ title, description }: Props) {
    return (
        <div className="group relative rounded-3xl border border-stone-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900">

            <h3 className="mb-4 font-serif text-2xl text-stone-800 dark:text-stone-100">
                {title}
            </h3>

            <p className="text-stone-600 dark:text-stone-400">
                {description}
            </p>

            <div className="absolute inset-0 rounded-3xl ring-1 ring-rose-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:ring-stone-700" />

        </div>
    )
}