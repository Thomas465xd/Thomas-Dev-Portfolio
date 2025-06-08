import ContactSection from "../../components/home/ContactSection";
import ExperienceList from "../../components/home/ExperienceList";
import PresentationCard from "../../components/home/PresentationCard";
import ProjectsList from "../../components/home/ProjectsList";
import ResumeCard from "../../components/home/ResumeCard";
import TechnologyList from "../../components/home/TechnologyList";

export default function HomeView() {
    return (
        <div className="mb-20 max-w-6xl">
            <PresentationCard />
            <ResumeCard />
            <ProjectsList />
            <ExperienceList />
            <TechnologyList />
            <ContactSection />
        </div>
    )
}
