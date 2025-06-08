import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";
import BackToTopButton from "../components/ui/BackToTop";

export default function AppLayout() {

    return (
        <div className="flex flex-col min-h-screen dark:bg-slate-950 overflow-auto scrollbar dark:scrollbar-thumb-cyan-300 scrollbar-thumb-indigo-900 dark:scrollbar-track-neutral-800 scrollbar-track-gray-100">
            {/* Header */}
            <header className="shadow-lg dark:shadow-none">
                <nav>
                    <NavBar />
                </nav>
            </header>


            {/* Main Content Area */}
            <main className="pt-12 flex-1 max-w-screen-2xl md:mx-10 lg:mx-30 xl:mx-auto p-4">
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