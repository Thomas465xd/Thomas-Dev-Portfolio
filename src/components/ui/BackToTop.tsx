import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // optional: you can use any icon
import { AnimatePresence, motion } from "framer-motion"

export default function BackToTopButton() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setShowButton(scrollY > window.innerHeight); // Show after first viewport
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<AnimatePresence>
			{showButton && (
				<motion.button
                    key="back-to-top"
                    initial={{ opacity: 0, y: 50 }}          // start slightly below and invisible
                    animate={{ opacity: 1, y: 0 }}           // animate to visible and in position
                    exit={{ opacity: 0, y: 50 }}             // animate out when removed (optional)
                    transition={{ duration: 0.5, ease: "easeOut" }}
					onClick={scrollToTop}
					className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-200"
					aria-label="Back to top"
				>
					<ArrowUp className="w-5 h-5" />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
