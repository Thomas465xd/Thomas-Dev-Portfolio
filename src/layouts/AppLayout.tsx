import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

export default function AppLayout() {

    return (
        <div className="flex flex-col min-h-screen dark:bg-slate-950">
            {/* Header */}
            <header className="bg-gradient-to-r dark:from-blue-950 dark:to-accent-400 shadow-lg border-b border-gray-600">
                <nav>
                    <NavBar />
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