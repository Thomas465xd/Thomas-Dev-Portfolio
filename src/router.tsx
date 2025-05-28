import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomeView from "./views/home/HomeView";
import ProjectsView from "./views/home/ProjectsView";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/projects" element={<ProjectsView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
} 