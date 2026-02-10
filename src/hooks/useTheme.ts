import { useContext } from "react";
import { ThemeContext, type ThemeContextType, type Theme } from "../contexts/ThemeContext";

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}

export type { Theme };
