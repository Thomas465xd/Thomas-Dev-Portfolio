"use client"
import * as motion from "motion/react-client"

export default function HomePageSkeleton() {
    return (
        <div className="w-full min-h-screen">
            {/* NavBar Skeleton */}
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="hidden md:flex flex-row justify-between items-center w-full p-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 shadow-lg backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-white/10"
            > */}
                {/* Logo skeleton */}
                {/* <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-400 dark:bg-gray-700 rounded-lg animate-pulse" />
                    <div className="w-12 h-12 bg-gray-400 dark:bg-gray-700 rounded-lg animate-pulse" />
                </div> */}

                {/* Nav links skeleton */}
                {/* <nav className="flex gap-4 items-center flex-1 justify-center">
                    <div className="h-4 w-16 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                </nav> */}

                {/* Language and theme toggle skeleton */}
                {/* <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-400 dark:bg-gray-700 rounded-lg animate-pulse" />
                    <div className="w-8 h-8 bg-gray-400 dark:bg-gray-700 rounded-lg animate-pulse" />
                </div> */}
            {/* </motion.div> */}

            {/* Main Content */}
            <div className="">
                {/* Presentation Card Skeleton */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full mx-auto p-6 bg-gradient-to-bl from-white dark:from-gray-900 dark:via-slate-950 dark:to-slate-900 rounded-2xl 
                        shadow-[10px_10px_#00000020] dark:shadow-[10px_10px_#ffffff30] 
                        border dark:border-gray-600 border-gray-200"
                >
                    {/* Header with About Me section */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                        <div className="flex items-center gap-4 group/header">
                            <div className="bg-gradient-to-br dark:from-blue-900 from-blue-500 dark:to-purple-500 to-cyan-500 p-3 rounded-xl shadow-lg w-12 h-12 animate-pulse" />
                            <div>
                                <div className="h-4 w-24 bg-gray-400 dark:bg-gray-600 rounded animate-pulse mb-2" />
                                <div className="w-16 h-1 bg-gradient-to-r dark:from-blue-700 from-blue-500 dark:to-purple-600 to-cyan-500 rounded-full"></div>
                            </div>
                        </div>

                        <div className="h-4 w-44 bg-blue-400 dark:bg-blue-600 rounded animate-pulse" />
                    </div>

                    {/* Typing Animation Skeleton */}
                    <div className="py-6 min-h-[80px] space-y-4">
                        <div className="h-10 md:h-12 w-full bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-10 md:h-12 w-3/4 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                    </div>

                    {/* Content Grid Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="space-y-4">
                            {/* First paragraph skeleton */}
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-full animate-pulse" />
                                <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-full animate-pulse" />
                                <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
                            </div>

                            {/* Second paragraph skeleton */}
                            <div className="space-y-2 pt-4">
                                <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-full animate-pulse" />
                                <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-11/12 animate-pulse" />
                                <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-4/5 animate-pulse" />
                            </div>
                        </div>

                        {/* Right Column Decoration */}
                        <div className="hidden lg:flex items-center justify-center">
                            <div className="w-48 h-48 bg-gradient-to-br from-blue-400/10 via-blue-400/10 to-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
                        </div>
                    </div>

                    {/* Tech Stack Icons + Arrow Skeleton */}
                    <div className="flex justify-between items-center mt-8 pt-4">
                        <div className="flex justify-start gap-4">
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className="w-6 h-6 bg-gray-400 dark:bg-gray-600 rounded animate-pulse" />
                            ))}
                        </div>
                        <div className="w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded animate-pulse" />
                    </div>
                </motion.section>

                {/* Resume Card Skeleton */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-20 mx-auto max-w-6xl"
                >
                    {/* Left Content Skeleton */}
                    <div className="space-y-8">
                        {/* Heading with icon */}
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-400 dark:bg-blue-600 rounded animate-pulse" />
                            <div className="h-8 lg:h-10 bg-gray-400 dark:bg-gray-700 rounded w-56 animate-pulse" />
                            <div className="h-8 w-6 bg-yellow-400 dark:bg-yellow-600 rounded animate-pulse" />
                        </div>

                        {/* Paragraphs Skeleton */}
                        <div className="space-y-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-full animate-pulse" />
                                    <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-11/12 animate-pulse" />
                                </div>
                            ))}
                        </div>

                        {/* Buttons Skeleton */}
                        <div className="flex flex-col items-baseline lg:flex-row lg:items-center gap-4 pt-4">
                            <div className="h-10 w-48 bg-blue-500 dark:bg-blue-700 rounded-md animate-pulse" />
                            <div className="h-10 w-40 bg-neutral-700 dark:bg-neutral-800 rounded-md animate-pulse" />
                        </div>
                    </div>

                    {/* Right Card Skeleton */}
                    <div className="relative group">
                        {/* Gradient border */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl opacity-50 group-hover:opacity-100 blur-sm animate-pulse"></div>

                        <div className="relative bg-white dark:bg-gradient-to-bl dark:from-neutral-950 dark:via-slate-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 space-y-6">
                            {/* Header with icon */}
                            <div className="flex items-center gap-4">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl w-14 h-14 animate-pulse" />
                                <div className="space-y-2 flex-1">
                                    <div className="h-3 w-24 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                                    <div className="h-0.5 w-12 bg-blue-400 dark:bg-blue-600 rounded-full"></div>
                                </div>
                            </div>

                            {/* Description Skeleton */}
                            <div className="space-y-2">
                                <div className="h-5 bg-gray-400 dark:bg-gray-700 rounded w-full animate-pulse" />
                                <div className="h-5 bg-gray-400 dark:bg-gray-700 rounded w-11/12 animate-pulse" />
                                <div className="h-5 bg-gray-400 dark:bg-gray-700 rounded w-10/12 animate-pulse" />
                            </div>

                            {/* Action Buttons Skeleton */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <div className="flex-1 h-10 bg-gray-400 dark:bg-gray-700 rounded-xl animate-pulse" />
                                <div className="flex-1 h-10 bg-gray-400 dark:bg-gray-700 rounded-xl animate-pulse" />
                            </div>

                            {/* Skills Cards Skeleton */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {[...Array(2)].map((_, i) => (
                                    <div key={i} className="bg-gradient-to-br from-gray-200 dark:from-gray-800 to-gray-300 dark:to-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl p-5 space-y-3 animate-pulse">
                                        <div className="w-10 h-10 bg-gray-400 dark:bg-gray-600 rounded-lg" />
                                        <div className="space-y-2">
                                            <div className="h-4 w-full bg-gray-400 dark:bg-gray-600 rounded" />
                                            <div className="h-4 w-5/6 bg-gray-400 dark:bg-gray-600 rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer Skeleton */}
            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full max-w-[480px] sm:max-w-xl md:max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t-2 dark:border-gray-700 border-gray-300 mb-16"
            >
                {/* Footer top section */}
                <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
                    <div className="h-4 w-48 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                        <div className="h-4 w-32 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                    </div>
                </div>

                {/* Footer links grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="space-y-3">
                            <div className="h-5 w-24 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                            <div className="space-y-2">
                                {[...Array(3)].map((_, j) => (
                                    <div key={j} className="h-4 w-32 bg-gray-400 dark:bg-gray-700 rounded animate-pulse" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.footer>
        </div>
    )
}