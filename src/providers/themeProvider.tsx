"use client";

import { useState, useLayoutEffect, createContext, useContext } from "react";
export type Mode = "light" | "dark";

export const ContextProvider = createContext({
  mode: "dark" as Mode,
  toggleMode: () => {
    return;
  },
});
const ThemeProvider = function Provider({
  children,
}: React.HTMLAttributes<HTMLElement>) {
  const [mode, setMode] = useState<Mode>("dark");

  const setDark = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    document.documentElement.style.colorScheme = "dark";
    setMode("dark");
    window && localStorage.setItem("theme", "dark");
  };

  const setLight = () => {
    document.documentElement.setAttribute("data-theme", "light");
    document.documentElement.style.colorScheme = "light";
    setMode("light");
    window && localStorage.setItem("theme", "light");
  };

  useLayoutEffect(() => {
    let defaultDark = true;
    const storedTheme = window?.localStorage?.getItem("theme");
    if (storedTheme === null) {
      defaultDark =
        window?.matchMedia &&
        window?.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      defaultDark = storedTheme === "dark";
    }

    defaultDark ? setDark() : setLight();
  }, []);

  function toggleMode() {
    mode === "light" ? setDark() : setLight();
  }

  return (
    <ContextProvider.Provider value={{ mode, toggleMode }}>
      {children}
    </ContextProvider.Provider>
  );
};
export default ThemeProvider;

export const useTheme = () => {
  const value = useContext(ContextProvider);
  return value;
};
