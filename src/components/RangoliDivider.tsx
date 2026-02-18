export default function RangoliDivider() {
    return (
        <div className="flex justify-center py-12">
            <svg
                width="120"
                height="120"
                viewBox="0 0 200 200"
                fill="none"
                className="text-rose-300 dark:text-stone-700"
            >
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="20" x2="100" y2="0" stroke="currentColor" strokeWidth="1" />
                <line x1="100" y1="200" x2="100" y2="180" stroke="currentColor" strokeWidth="1" />
                <line x1="20" y1="100" x2="0" y2="100" stroke="currentColor" strokeWidth="1" />
                <line x1="200" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" />
            </svg>
        </div>
    )
}