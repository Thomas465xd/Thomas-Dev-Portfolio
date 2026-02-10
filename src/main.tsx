import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n"; 
import Router from "./router";
import { ThemeProvider } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider>
			<Router />
		</ThemeProvider>
	</StrictMode>
);
