import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DarkMode from "./DarkMode";
import { SiGithub } from "react-icons/si";
import LanguageMenu from "./LanguageMenu";
import { useTranslation } from "react-i18next";

export default function NavBar() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const location = useLocation();
    const currentPage = location.pathname;

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <div className="mx-auto w-full">
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-row justify-between items-center w-full p-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 shadow-lg backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-white/10 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60">
                <div className="flex items-center gap-4 flex-shrink-0">
                    <a
                        href="https://github.com/Thomas465xd"
                        rel="author"
                        target="_blank"
                        type="website"
                        className="p-2 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/5"
                    >
                        <SiGithub size={32} />
                    </a>
                    <Link
                        to="/"
                        className=" rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/5"
                    >
                        <img
                            src="/complete-circle.png"
                            width={50}
                            height={50}
                        />
                    </Link>
                </div>
                
                <div className="flex gap-2 sm:gap-3 lg:gap-4 items-center flex-1 justify-center max-w-md mx-4">
                    <Link 
                        to="/"
                        className={`px-3 sm:px-4 py-2 rounded-xl tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base backdrop-blur-md border hover:scale-105 hover:shadow-lg
                            ${currentPage === "/" 
                            ? "bg-white/30 dark:bg-white/10 backdrop-blur-lg text-black dark:text-gray-200 border-white/30 dark:border-white/20 shadow-lg shadow-black/10 dark:shadow-white/5" 
                            : "text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-white/10 hover:text-black dark:hover:text-white border-white/10 dark:border-white/5 hover:border-white/20 dark:hover:border-white/10 hover:shadow-black/10 dark:hover:shadow-white/5"}`}
                    >
                        {t("nav.home")}
                    </Link>

                    <Link 
                        to="/projects"
                        className={`px-3 sm:px-4 py-2 rounded-xl tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base backdrop-blur-md border hover:scale-105 hover:shadow-lg
                            ${currentPage === "/projects" 
                            ? "bg-white/30 dark:bg-white/10 backdrop-blur-lg text-black dark:text-gray-200 border-white/30 dark:border-white/20 shadow-lg shadow-black/10 dark:shadow-white/5" 
                            : "text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-white/10 hover:text-black dark:hover:text-white border-white/10 dark:border-white/5 hover:border-white/20 dark:hover:border-white/10 hover:shadow-black/10 dark:hover:shadow-white/5"}`}
                    >
                        {t("nav.projects")}
                    </Link>

                    <Link 
                        to="/contact"
                        className={`px-3 sm:px-4 py-2 rounded-xl tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base backdrop-blur-md border hover:scale-105 hover:shadow-lg
                            ${currentPage === "/blog" 
                            ? "bg-white/30 dark:bg-white/10 backdrop-blur-lg text-black dark:text-gray-200 border-white/30 dark:border-white/20 shadow-lg shadow-black/10 dark:shadow-white/5" 
                            : "text-gray-600 dark:text-gray-400 hover:bg-white/20 dark:hover:bg-white/10 hover:text-black dark:hover:text-white border-white/10 dark:border-white/5 hover:border-white/20 dark:hover:border-white/10 hover:shadow-black/10 dark:hover:shadow-white/5"}`}
                    >
                        {t("nav.contact")}
                    </Link>
                </div>

                <div className="flex items-center gap-3 lg:gap-4 flex-shrink-0">
                    <div className="p-1 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
                        <LanguageMenu />
                    </div>
                    <div className="p-1 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
                        <DarkMode />
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <div className="flex justify-between items-center w-full p-3 px-4 sm:px-6 shadow-lg backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-white/10 supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-gray-900/60">
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <a
                            href="https://github.com/Thomas465xd"
                            rel="author"
                            target="_blank"
                            type="website"
                            className="p-2 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <SiGithub size={24} />
                        </a>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="p-1 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
                            <LanguageMenu />
                        </div>
                        <div className="p-1 rounded-lg backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10">
                            <DarkMode />
                        </div>
                        
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
                <div className={`h-screen fixed top-0 right-0 z-50 w-80 max-w-[85vw] backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-l border-white/20 dark:border-white/10 shadow-2xl shadow-black/20 dark:shadow-black/40 transform transition-all duration-300 ease-out ${
                    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
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

                        {/* Mobile Menu Links */}
                        <nav className="flex-1 p-4 overflow-y-auto">
                            <div className="space-y-3">
                                <Link 
                                    to="/"
                                    onClick={closeMenu}
                                    className={`block px-4 py-3 rounded-xl tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-base w-full text-left backdrop-blur-md border hover:scale-[1.02] active:scale-95 hover:shadow-lg
                                        ${currentPage === "/" 
                                        ? "bg-white/50 dark:bg-white/20 text-black dark:text-gray-200 border-white/50 dark:border-white/30 shadow-lg shadow-black/10 dark:shadow-white/5" 
                                        : "text-gray-600 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/15 hover:text-black dark:hover:text-white border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 hover:shadow-black/10 dark:hover:shadow-white/5"}`}
                                >
                                    {t("nav.home")}
                                </Link>

                                <Link 
                                    to="/projects"
                                    onClick={closeMenu}
                                    className={`block px-4 py-3 rounded-xl tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-base w-full text-left backdrop-blur-md border hover:scale-[1.02] active:scale-95 hover:shadow-lg
                                        ${currentPage === "/projects" 
                                        ? "bg-white/50 dark:bg-white/20 text-black dark:text-gray-200 border-white/50 dark:border-white/30 shadow-lg shadow-black/10 dark:shadow-white/5" 
                                        : "text-gray-600 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/15 hover:text-black dark:hover:text-white border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 hover:shadow-black/10 dark:hover:shadow-white/5"}`}
                                >
                                    {t("nav.projects")}
                                </Link>

                                <Link 
                                    to="/contact"
                                    onClick={closeMenu}
                                    className={`block px-4 py-3 rounded-xl tracking-wide transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-base w-full text-left backdrop-blur-md border hover:scale-[1.02] active:scale-95 hover:shadow-lg
                                        ${currentPage === "/blog" 
                                        ? "bg-white/50 dark:bg-white/20 text-black dark:text-gray-200 border-white/50 dark:border-white/30 shadow-lg shadow-black/10 dark:shadow-white/5" 
                                        : "text-gray-600 dark:text-gray-400 hover:bg-white/40 dark:hover:bg-white/15 hover:text-black dark:hover:text-white border-white/20 dark:border-white/10 hover:border-white/40 dark:hover:border-white/20 hover:shadow-black/10 dark:hover:shadow-white/5"}`}
                                >
                                    {t("nav.contact")}
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}