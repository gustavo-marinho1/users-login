import { createContext, useState } from "react";
import { DARK, dark, LIGHT, light } from "../lib/colors";
import type { Color } from "../types/color";

export const ThemeContext = createContext({
  theme: light as Color,
  light: light as Color,
  dark: dark as Color,
  isLight: true,
  isDark: false,
  setLight: () => {},
  setDark: () => {}
});

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const actualTheme = localStorage.getItem("theme") === DARK ? DARK : LIGHT; // If null then light by default

  const [isLight, setIsLight] = useState<boolean>(actualTheme === LIGHT);
  const [isDark, setIsDark] = useState<boolean>(actualTheme === DARK);
  const [theme, setTheme] = useState<Color>(isDark ? dark : light);

  function setLight() {
    setTheme(light);
    setIsLight(true);
    setIsDark(false);
    localStorage.setItem("theme", LIGHT);
  }

  function setDark() {
    setTheme(dark);
    setIsDark(true);
    setIsLight(false);
    localStorage.setItem("theme", DARK);
  }

  return (
    <ThemeContext.Provider value={{ theme, light, dark, isLight, isDark, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;