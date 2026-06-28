"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme | null;
  toggleTheme: () => void;
};

const themeContext = createContext<ThemeContextType>({
  theme: null,
  toggleTheme() {},
});

export function ThemeProvider({ children }: React.PropsWithChildren) {
  // 🌓 Theme State: null means "use system preference default"
  const [theme, setTheme] = useState<Theme | null>(null);

  // Detect system preference change in real-time just to adjust the button icon seamlessly
  const [isSystemDark, setIsSystemDark] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsSystemDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsSystemDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const toggleTheme = () => {
    if (theme === null) {
      // If currently on system default, switch to the opposite of system default
      setTheme(isSystemDark ? "light" : "dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  // Determine current active visual state
  const currentMode = theme !== null ? theme : isSystemDark ? "dark" : "light";

  return (
    <themeContext.Provider value={{ theme: currentMode, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export const useTheme = () => {
  return useContext(themeContext);
};
