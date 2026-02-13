import { createContext, useState } from "react";

type Color = {
  bg1: string,
  bg2: string,
  bg3: string,
  text1: string,
  text2: string,
  text3: string,
  border1: string,
  border2: string,
  border3: string,
}

const light: Color = {
  bg1: "rgba(255,255,255,1)",
  bg2: "rgba(225,225,225,1)",
  bg3: "rgba(200,200,200,1)",
  text1: "rgba(10,10,10,1)",
  text2: "rgba(23,23,23,1)",
  text3: "rgba(38,38,38,1)",
  border1: "rgba(200,200,200,1)",
  border2: "rgba(170,170,170,1)",
  border3: "rgba(140,140,140,1)"
}

const dark: Color = {
  bg1: "rgba(10,10,10,1)",
  bg2: "rgba(23,23,23,1)",
  bg3: "rgba(38,38,38,1)",
  text1: "rgba(255,255,255,1)",
  text2: "rgba(225,225,225,1)",
  text3: "rgba(200,200,200,1)",
  border1: "rgba(23,23,23,1)",
  border2: "rgba(38,38,38,1)",
  border3: "rgba(64,64,64,1)"
}

export const ThemeContext = createContext({
  theme: light as Color,
  light: light as Color,
  dark: dark as Color,
  setLight: () => {},
  setDark: () => {}
});

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<Color>(light);

  function setLight() {
    setTheme(light);
  }

  function setDark() {
    setTheme(dark);
  }

  return (
    <ThemeContext.Provider value={{ theme, light, dark, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;