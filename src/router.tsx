import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/home/HomeView";
import ProjectsView from "./views/home/ProjectsView";
import BlogView from "./views/home/BlogView";
import ContactView from "./views/home/ContactView";
import PhotographyView from "./views/home/PhotographyView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/projects" element={<ProjectsView />} />
                    <Route path="/blog" element={<BlogView />} />

                    <Route path="/contact" element={<ContactView />} />
                    <Route path="/photography" element={<PhotographyView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 