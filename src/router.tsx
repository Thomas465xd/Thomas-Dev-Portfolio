import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Loader from "./components/ui/Loader";
import { Suspense, lazy } from "react";
import ErrorBoundary from "./components/ui/ErrorBoundary";

// Lazy load route components
const HomeView = lazy(() => import("./views/home/HomeView"));
const ProjectsView = lazy(() => import("./views/home/ProjectsView"));
const BlogView = lazy(() => import("./views/home/BlogView"));
const ContactView = lazy(() => import("./views/home/ContactView"));
const PhotographyView = lazy(() => import("./views/home/PhotographyView"));
const NotFound = lazy(() => import("./views/404/NotFound"));

export default function Router() {
	return (
		<BrowserRouter>
			<ErrorBoundary>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route element={<AppLayout />}>
							<Route path="/" element={<HomeView />} />
							<Route
								path="/projects"
								element={<ProjectsView />}
							/>
							<Route path="/blog" element={<BlogView />} />
							<Route path="/contact" element={<ContactView />} />
							<Route
								path="/photography"
								element={<PhotographyView />}
							/>

							{/* 404 routes */}
							<Route path="/404" element={<NotFound />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</BrowserRouter>
	);
}
