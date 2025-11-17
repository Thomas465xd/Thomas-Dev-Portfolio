import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

type Theme = "light" | "dark" | "system";

export default function DarkMode() {
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("theme") as Theme | null;
			return saved || "system";
		}
		return "system";
	});

	useEffect(() => {
		const root = document.documentElement;
		
		const applyTheme = (currentTheme: Theme) => {
			if (currentTheme === "system") {
				const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
				if (prefersDark) {
					root.classList.add("dark");
					root.classList.remove("light");
				} else {
					root.classList.add("light");
					root.classList.remove("dark");
				}
			} else if (currentTheme === "dark") {
				root.classList.add("dark");
				root.classList.remove("light");
			} else {
				root.classList.add("light");
				root.classList.remove("dark");
			}
		};

		applyTheme(theme);
		localStorage.setItem("theme", theme);

		// Listen for system theme changes when in system mode
		if (theme === "system") {
			const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
			const handleChange = () => applyTheme("system");
			mediaQuery.addEventListener("change", handleChange);
			return () => mediaQuery.removeEventListener("change", handleChange);
		}
	}, [theme]);

	return (
		<div className="flex items-center justify-center">
			<div className="rounded-lg p-1 flex gap-1">
				<button
					onClick={() => setTheme("light")}
					className={`flex items-center justify-center p-2 rounded-md transition-all duration-200 ${
						theme === "light"
							? "bg-white dark:bg-gray-800 text-yellow-500 shadow-md"
							: "text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
					}`}
					aria-label="Light mode"
				>
					<Sun size={18} />
				</button>

				<button
					onClick={() => setTheme("system")}
					className={`flex items-center justify-center p-2 rounded-md transition-all duration-200 ${
						theme === "system"
							? "bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 shadow-md"
							: "text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
					}`}
					aria-label="System theme"
				>
					<Monitor size={18} />
				</button>

				<button
					onClick={() => setTheme("dark")}
					className={`flex items-center justify-center p-2 rounded-md transition-all duration-200 ${
						theme === "dark"
							? "bg-gray-800 text-blue-400 shadow-md"
							: "text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
					}`}
					aria-label="Dark mode"
				>
					<Moon size={18} />
				</button>
			</div>
		</div>
	);
}