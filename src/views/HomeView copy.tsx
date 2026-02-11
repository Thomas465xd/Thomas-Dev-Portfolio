import { lazy, Suspense } from "react";
import HomePageSkeleton from "../../components/skeletons/HomePageSkeleton";
const PresentationCard = lazy(() => import("../../components/home/PresentationCard"));
const ResumeCard = lazy(() => import("../../components/home/ResumeCard"));
const ContactSection = lazy(() => import("../../components/home/ContactSection"));
const ProjectsList = lazy(() => import("../../components/home/ProjectsList"));
const ExperienceList = lazy(() => import("../../components/home/ExperienceList"));
const TechnologyList = lazy(() => import("../../components/home/TechnologyList"));

export default function HomeView() {
    return (
        <div className="mb-20 max-w-6xl">
            <Suspense fallback={<HomePageSkeleton />}>
                <PresentationCard />
                <ResumeCard />
                <ProjectsList />
                <ExperienceList />
                <TechnologyList />
                <ContactSection />
            </Suspense>
        </div>
    )
}
