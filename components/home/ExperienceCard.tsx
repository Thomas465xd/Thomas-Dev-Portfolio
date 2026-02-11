type ExperienceCardProps = {
    type: string;
    title: string; 
    businessName: string; 
    location: string; 
    description: string; 
}

export default function ExperienceCard({ type, title, businessName, location, description }: ExperienceCardProps) {
    return (
        <article className="mt-12 group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/20 dark:hover:shadow-gray-900/40 hover:-translate-y-1 p-6 space-y-5">
            {/* Gradient overlay for visual interest */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            {/* Type badge */}
            <div className="relative z-10">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-200/50 dark:border-cyan-500/30 backdrop-blur-sm">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 animate-pulse"></div>
                    {type}
                </span>
            </div>

            {/* Title */}
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {title}
                </h3>
            </div>

            {/* Business info */}
            <div className="relative z-10 space-y-1">
                <p className="text-lg font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {businessName}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-1.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location}
                </div>
            </div>

            {/* Description */}
            <div className="relative z-10">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Decorative corner element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </article>
    );
}