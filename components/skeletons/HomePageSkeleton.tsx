import { motion } from "motion/react";

export default function HomePageSkeleton() {
    return (
        <div className="w-full space-y-20">
            {/* Presentation Card Skeleton */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full mx-auto p-6 bg-gradient-to-bl from-white dark:from-gray-900 dark:via-slate-950 dark:to-slate-900 rounded-2xl 
                    shadow-[10px_10px_#00000020] dark:shadow-[10px_10px_#ffffff30] 
                    border dark:border-gray-600 border-gray-200"
            >
                {/* Header Skeleton */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="bg-gradient-to-br from-gray-300 dark:from-gray-700 to-gray-400 dark:to-gray-800 p-3 rounded-xl w-14 h-14 animate-pulse" />
                        <div className="space-y-2">
                            <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                            <div className="w-16 h-1 bg-gradient-to-r from-gray-300 dark:from-gray-700 to-gray-400 dark:to-gray-800 rounded-full animate-pulse" />
                        </div>
                    </div>
                    <div className="h-4 w-40 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                </div>

                {/* Typing Animation Skeleton */}
                <div className="py-4 min-h-[120px] sm:min-h-[100px] md:min-h-[80px] space-y-3">
                    <div className="h-8 md:h-10 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
                    <div className="h-8 md:h-10 bg-gray-300 dark:bg-gray-700 rounded w-1/2 animate-pulse" />
                </div>

                {/* Content Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-11/12 animate-pulse" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-10/12 animate-pulse" />
                        </div>
                        <div className="space-y-2 pt-4">
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse" />
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-10/12 animate-pulse" />
                        </div>
                    </div>

                    {/* Right Column Decoration */}
                    <div className="hidden lg:flex items-center justify-center">
                        <div className="w-48 h-48 bg-gradient-to-br from-gray-300/20 dark:from-gray-700/20 to-gray-400/20 dark:to-gray-800/20 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Tech Stack Icons Skeleton */}
                <div className="flex justify-between mt-4">
                    <div className="flex justify-center gap-4">
                        {[...Array(7)].map((_, i) => (
                            <div key={i} className="w-6 h-6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                        ))}
                    </div>
                    <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                </div>
            </motion.section>

            {/* Resume Card Skeleton */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-6xl"
            >
                {/* Left Content Skeleton */}
                <div className="space-y-8">
                    {/* Heading Skeleton */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-8 lg:h-10 bg-gray-300 dark:bg-gray-700 rounded w-2/3 animate-pulse" />
                    </div>

                    {/* Paragraphs Skeleton */}
                    <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="space-y-2">
                                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse" />
                                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-11/12 animate-pulse" />
                                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-10/12 animate-pulse" />
                            </div>
                        ))}
                    </div>

                    {/* Buttons Skeleton */}
                    <div className="flex flex-col items-baseline lg:flex-row lg:items-center gap-4">
                        <div className="h-10 w-48 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
                        <div className="h-10 w-40 bg-gray-300 dark:bg-gray-700 rounded-md animate-pulse" />
                    </div>
                </div>

                {/* Right Card Skeleton */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-400/50 dark:from-gray-600/50 via-gray-500/50 dark:via-gray-700/50 to-gray-400/50 dark:to-gray-600/50 rounded-2xl blur-sm animate-pulse" />
                    
                    <div className="relative bg-white dark:bg-gradient-to-bl dark:from-neutral-950 dark:via-slate-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 space-y-6">
                        {/* Header Skeleton */}
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-r from-gray-300 dark:from-gray-700 to-gray-400 dark:to-gray-800 rounded-xl animate-pulse" />
                            <div className="space-y-2">
                                <div className="h-3 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse" />
                                <div className="w-12 h-1 bg-gradient-to-r from-gray-300 dark:from-gray-700 to-gray-400 dark:to-gray-800 rounded-full animate-pulse" />
                            </div>
                        </div>

                        {/* Description Skeleton */}
                        <div className="space-y-2">
                            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse" />
                            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-11/12 animate-pulse" />
                            <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-10/12 animate-pulse" />
                        </div>

                        {/* Action Buttons Skeleton */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse" />
                            <div className="flex-1 h-10 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse" />
                        </div>

                        {/* Skills Cards Skeleton */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[...Array(2)].map((_, i) => (
                                <div 
                                    key={i}
                                    className="relative overflow-hidden bg-gradient-to-br from-gray-100 dark:from-gray-900/10 to-gray-200 dark:to-gray-800/10 border border-gray-300 dark:border-gray-800/30 rounded-xl p-5"
                                >
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-300/20 dark:from-gray-700/20 to-gray-400/20 dark:to-gray-600/20 rounded-full -translate-y-8 translate-x-8 animate-pulse" />
                                    <div className="relative space-y-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-gray-300 dark:from-gray-700 to-gray-400 dark:to-gray-800 rounded-lg animate-pulse" />
                                        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse" />
                                        <div className="space-y-2">
                                            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse" />
                                            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}