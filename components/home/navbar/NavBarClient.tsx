'use client'

import { useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

type NavBarClientProps = {
    github: ReactNode
    languageMenu: ReactNode
    themeToggle: ReactNode
    desktopNav: ReactNode
    mobileMenuPanel: ReactNode
}


// Client-side NavBar wrapper
// Handles all interactive state (menu toggling, pathname tracking, scroll management)
// Receives pre-rendered components from server to maintain separation of concerns
export default function NavBarClient({
    github,
    languageMenu,
    themeToggle,
    desktopNav,
    mobileMenuPanel,
}: NavBarClientProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const currentPathname = usePathname()
    const { t } = useTranslation()
    const closeMenu = () => setIsMenuOpen(false) 
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Close menu when pathname changes
    useEffect(() => {
        setIsMenuOpen(false)
    }, [currentPathname])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMenuOpen])

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show navbar at the very top
            if (currentScrollY < 10) {
                setIsNavVisible(true);
            }
            // Hide navbar when scrolling down, show when scrolling up
            else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down & past threshold
                setIsNavVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                setIsNavVisible(true);
            }
            
            setLastScrollY(currentScrollY);
        };

        // Throttle scroll events for better performance
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, [lastScrollY]);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
                isNavVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            {/* Desktop Navigation - Rendered as-is */}
            {desktopNav}

            {/* Mobile Navigation */}
            <div className="md:hidden">
                {/* Mobile Header with hamburger trigger */}
                <div className="flex justify-between items-center w-full p-3 px-4 sm:px-6 shadow-lg backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-white/10 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60">
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <Link
                            href="https://github.com/Thomas465xd"
                            rel="author"
                            target="_blank"
                            type="website"
                            className="p-2 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/5"
                        >
                            {github}
                        </Link>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                        {languageMenu}
                        {themeToggle}

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 hover:scale-105 active:scale-95"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    className={`h-screen fixed inset-0 z-40 bg-black/50 dark:bg-black/70 transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onClick={closeMenu}
                />

                {/* Mobile Menu Panel */}
                <div
                    className={`h-screen fixed top-0 right-0 z-50 w-80 max-w-[85vw] backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-l border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 dark:shadow-black/40 transform transition-all duration-300 ease-out ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Header */}
                        <div className="flex justify-between items-center p-4 border-b border-white/20 dark:border-white/10 backdrop-blur-sm">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                {t("nav.menu", "Menu")}
                            </h2>
                            <button
                                onClick={closeMenu}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded-lg backdrop-blur-md bg-white/20 dark:bg-white/10 border border-white/30 dark:border-white/20 hover:bg-white/30 dark:hover:bg-white/20 hover:scale-105 active:scale-95"
                                aria-label="Close menu"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <span className="block w-5 h-0.5 bg-current rotate-45 absolute" />
                                    <span className="block w-5 h-0.5 bg-current -rotate-45 absolute" />
                                </div>
                            </button>
                        </div>

                        {/* Mobile Menu Panel Content */}
                        <div className="flex-1 p-4 overflow-y-auto" onClick={closeMenu}>
                            {mobileMenuPanel}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
