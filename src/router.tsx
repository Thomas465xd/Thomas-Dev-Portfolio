import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/home/HomeView";
import ProjectsView from "./views/home/ProjectsView";
import BlogView from "./views/home/BlogView";
import ContactView from "./views/home/ContactView";
import PhotographyView from "./views/home/PhotographyView";
import Loader from "./components/ui/Loader";
import { Suspense } from "react";
import ErrorBoundary from "./components/ui/ErrorBoundary";
import NotFound from "./views/404/NotFound";

export default function Router() {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route element={<AppLayout />}>
                            <Route path="/" element={<HomeView />} />
                            <Route path="/projects" element={<ProjectsView />} />
                            <Route path="/blog" element={<BlogView />} />
                            <Route path="/contact" element={<ContactView />} />
                            <Route path="/photography" element={<PhotographyView />} />

                            {/* Optional: Direct 404 page */}
                            <Route path="/404" element={<NotFound />} />

                            {/* This is the key route to catch all unrecognized URLs */}
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    )
} 