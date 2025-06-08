import { Zap } from "lucide-react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
	{
		type: "Freelance",
		title: "Full Stack App Developer",
		businessName: "Spare Parts Trade",
		location: "Santiago, Chile",
		description:
			"Developed a custom B2B partner portal, optimized website performance, integrated with external API.",
	},
	{
		type: "Internship",
		title: "Frontend Developer Intern",
		businessName: "TechWave Solutions",
		location: "San Francisco, CA",
		description:
			"Implemented responsive UI components using React, collaborated with designers to improve UX, and performed cross-browser testing.",
	},
	{
		type: "Full-time",
		title: "Software Engineer",
		businessName: "InnoSoft Corp",
		location: "New York, NY",
		description:
			"Designed and built RESTful APIs, improved database queries for better performance, and worked closely with product teams on feature development.",
	},
];

export default function ExperienceList() {
	return (
		<section className="my-20">
			<span className="flex gap-2 text-cyan-500 font-light">
				<Zap />
				Experiences
			</span>
			<h2 className="text-4xl font-bold mt-2">Milestones</h2>
			<p className="text-gray-500">
				My experiences working as a solo-dev
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{experiences.map((experience, index) => (
					<ExperienceCard key={index} {...experience} />
				))}
			</div>

            
		</section>
	);
}
