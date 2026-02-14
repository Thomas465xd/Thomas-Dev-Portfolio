'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
    href: string
    label: string
    mobile?: boolean
    onClick?: () => void
}

// Client-side NavLink component
// Uses usePathname to detect active link and apply styling
export function DesktopNavLink({ href, label }: NavLinkProps) {
    const currentPathname = usePathname()

    return (
        <Link
            href={href}
            className={`px-3 sm:px-4 py-2 rounded-xl tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base backdrop-blur-md border hover:scale-105 hover:shadow-lg
                ${
                    currentPathname === href
                        ? 'bg-white/30 dark:bg-white/10 backdrop-blur-lg text-black dark:text-gray-200 border-black/10 dark:border-white/20 shadow-md shadow-black/10 dark:shadow-white/5'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-white/10 hover:text-black dark:hover:text-white border-black/10 dark:border-white/5 hover:border-white/20 dark:hover:border-white/10 hover:shadow-black/10 dark:hover:shadow-white/5'
                }`}
        >
            {label}
        </Link>
    )
}

// Mobile NavLink component
// Used inside the mobile menu
export function MobileNavLink({ href, label }: NavLinkProps) {
    return (
        <Link
            href={href}
            onClick={() => {}}  // Click handler will be attached by parent
            className="block px-4 py-3 rounded-xl tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-base w-full text-left backdrop-blur-md border hover:scale-[1.02] active:scale-95 hover:shadow-lg text-gray-600 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/15 hover:text-black dark:hover:text-white border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 hover:shadow-black/10 dark:hover:shadow-white/5"
        >
            {label}
        </Link>
    )
}
