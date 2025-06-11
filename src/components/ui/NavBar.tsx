import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
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

    return (
        <div className="mx-auto w-full">
            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-row justify-between items-center w-full p-4 px-4 sm:px-8 md:px-16 lg:px-32 shadow-inner">
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/Thomas465xd"
                        rel="author"
                        target="_blank"
                        type="website"
                        className=""
                    >
                        <SiGithub size={32} />
                    </a>
                </div>
                
                <div className="flex gap-2 sm:gap-4 items-center">
                    <Link 
                        to="/"
                        className={`px-3 sm:px-4 py-2 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base
                            ${currentPage === "/" 
                            ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                    >
                        {t("nav.home")}
                    </Link>

                    <Link 
                        to="/projects"
                        className={`px-3 sm:px-4 py-2 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base
                            ${currentPage === "/projects" 
                            ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                    >
                        {t("nav.projects")}
                    </Link>

                    <Link 
                        to="/blog"
                        className={`px-3 sm:px-4 py-2 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base
                            ${currentPage === "/blog" 
                            ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                    >
                        {t("nav.blog")}
                    </Link>
                </div>

                <LanguageMenu />

                <div className="flex items-center gap-4">
                    <DarkMode />
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                {/* Mobile Header */}
                <div className="flex justify-between items-center w-full p-4 px-4 sm:px-8 shadow-inner">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/Thomas465xd"
                            rel="author"
                            target="_blank"
                            type="website"
                            className=""
                        >
                            <SiGithub size={28} />
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <LanguageMenu />
                        <DarkMode />
                        
                        {/* Hamburger Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded-md"
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
                {isMenuOpen && (
                    <div className="fixed inset-0 z-50 backdrop-blur-sm" onClick={closeMenu} />
                )}

                {/* Mobile Menu Panel */}
                <div className={`fixed top-0 right-0 z-50 h-full w-80 max-w-sm bg-white dark:bg-gray-900 border-l border-gray-700 shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full">
                        {/* Mobile Menu Header */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Menu</h2>
                            <button
                                onClick={closeMenu}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded-md"
                                aria-label="Close menu"
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <span className="block w-5 h-0.5 bg-current rotate-45 absolute" />
                                    <span className="block w-5 h-0.5 bg-current -rotate-45 absolute" />
                                </div>
                            </button>
                        </div>

                        {/* Mobile Menu Links */}
                        <nav className="flex-1 p-4">
                            <div className="space-y-2">
                                <Link 
                                    to="/"
                                    onClick={closeMenu}
                                    className={`block px-4 py-3 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-base w-full text-left
                                        ${currentPage === "/" 
                                        ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                                >
                                    {t("nav.home")}
                                </Link>

                                <Link 
                                    to="/projects"
                                    onClick={closeMenu}
                                    className={`block px-4 py-3 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-base w-full text-left
                                        ${currentPage === "/projects" 
                                        ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                                >
                                    {t("nav.projects")}
                                </Link>

                                <Link 
                                    to="/blog"
                                    onClick={closeMenu}
                                    className={`block px-4 py-3 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-base w-full text-left
                                        ${currentPage === "/blog" 
                                        ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                                >
                                    {t("nav.blog")}
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}