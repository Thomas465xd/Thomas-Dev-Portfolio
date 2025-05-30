import { Link, Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/ui/Footer";
import DarkMode from "../components/ui/DarkMode";

export default function AppLayout() {

    const location = useLocation();
    const currentPage = location.pathname; 

    return (
        <div className="flex flex-col min-h-screen dark:bg-slate-950">
            {/* Header */}
            <header className="bg-gradient-to-r dark:from-blue-950 dark:to-accent-400 shadow-lg border-b border-gray-600">
                <nav>
                    <div className="mx-auto flex flex-wrap justify-center items-center md:justify-between dark:bg-slate-800 w-full p-4 px-32 mt-4 md:mt-0 shadow-inner">
                        <div className="">
                            <Link 
                                to="/" 
                                className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white"
                            >
                            <picture>
                                <img src="/src/assets/logo.jpg" alt="Dev Logo" className="w-10 h-10 border-blue-500 border rounded-full" />
                            </picture>

                            </Link>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Link 
                                to="/"
                                className={`px-4 py-2 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
                                    ${currentPage === "/" 
                                    ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                            >
                                Home
                            </Link>

                            <Link 
                                to="/projects"
                                className={`px-4 py-2 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
                                    ${currentPage === "/projects" 
                                    ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                            >
                                Projects
                            </Link>

                            <Link 
                                to="/about"
                                className={`px-4 py-2 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
                                    ${currentPage === "/about" 
                                    ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                            >
                                About
                            </Link>
                        </div>

                        <DarkMode />
                    </div>
                </nav>
            </header>


            {/* Main Content Area */}
            <main className="flex-1 max-w-screen-2xl md:mx-10 lg:mx-30 xl:mx-auto mt-8 p-4">
                <Outlet />
            </main>

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