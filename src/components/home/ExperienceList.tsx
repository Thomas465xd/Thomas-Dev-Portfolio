import { Zap } from "lucide-react";
import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react"


export default function ExperienceList() {
    
    const { t } = useTranslation();

    const experiences = [
        {
            type: `${t("experiences.job-type-1")}`,
            title: `${t("experiences.job-title-1")}`,
            businessName: `${t("experiences.job-business-1")}`,
            location: `${t("experiences.job-location-1")}`,
            description:
                `${t("experiences.job-description-1")}`,
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

	return (
		<motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="my-20"
        >
			<span className="flex gap-2 text-cyan-500 font-light">
				<Zap />
				{`${t("experiences.above-heading")}`}
			</span>
			<h2 className="text-4xl font-bold mt-2">{`${t("experiences.heading")}`}</h2>
			<p className="text-gray-700 dark:text-gray-400">
				{`${t("experiences.subheading")}`}
			</p>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{experiences.map((experience, index) => (
					<ExperienceCard key={index} {...experience} />
				))}
			</div>

            
		</motion.section>
	);
}
