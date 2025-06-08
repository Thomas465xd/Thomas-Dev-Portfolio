import { Link, useLocation } from "react-router-dom";
import DarkMode from "./DarkMode";
import { SiGithub } from "react-icons/si";

export default function NavBar() {
    
    const location = useLocation();
    const currentPage = location.pathname;

	return (
        <div className="mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center w-full p-4 px-4 sm:px-8 md:px-16 lg:px-32 mt-4 md:mt-0 shadow-inner gap-4 md:gap-0">
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
                    Home
                </Link>

                <Link 
                    to="/projects"
                    className={`px-3 sm:px-4 py-2 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base
                        ${currentPage === "/projects" 
                        ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                >
                    Projects
                </Link>

                <Link 
                    to="/blog"
                    className={`px-3 sm:px-4 py-2 rounded-md tracking-wide transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm sm:text-base
                        ${currentPage === "/blog" 
                        ? "bg-gray-200 dark:bg-slate-900 text-black dark:text-gray-300" 
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-900 hover:text-black dark:hover:text-white"}`}
                >
                    Blog
                </Link>
            </div>

            <div className="flex items-center">
                <DarkMode />
            </div>
        </div>
    )
}