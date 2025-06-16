import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";
import BackToTopButton from "../components/ui/BackToTop";
import { useTranslation } from "react-i18next";

export default function AppLayout() {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const { i18n } = useTranslation();

    const supportedLangs = ['en', 'es', 'de'];

    const location = useLocation();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const lang = searchParams.get("lang");

        if (lang && supportedLangs.includes(lang) && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [location, i18n]);

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
        <div className="flex flex-col min-h-screen dark:bg-slate-950 overflow-auto scrollbar dark:scrollbar-thumb-cyan-300 scrollbar-thumb-indigo-900 dark:scrollbar-track-neutral-800 scrollbar-track-gray-100">
            {/* Fixed Header with scroll-responsive animation */}
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
                    isNavVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <nav className="">
                    <NavBar />
                </nav>
            </header>

            {/* Main Content Area - with top padding to account for fixed navbar */}
            <main className="pt-28 md:pt-36 flex-1 max-w-screen-2xl md:mx-10 lg:mx-30 xl:mx-auto p-4 mt-0">
                <Outlet />
            </main>

            <BackToTopButton />

            {/* Footer */}
            <footer className="mt-auto">
                <Footer />
            </footer>

            {/* Toast Notifications */}
            <ToastContainer
                position="top-right"
                autoClose={4000}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
            />
        </div>
    );
}