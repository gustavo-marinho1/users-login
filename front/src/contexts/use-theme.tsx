import { createContext, useState } from "react";

type Color = {
  bg1: string,
  bg2: string,
  bg3: string,
  bg4: string,
  bg5: string,
  bg6: string,
  bg7: string,
  bg8: string,
  bg9: string,
  bg10: string,
  text1: string,
  text2: string,
  text3: string,
  text4: string,
  text5: string,
  text6: string,
  text7: string,
  text8: string,
  text9: string,
  text10: string,
  border1: string,
  border2: string,
  border3: string,
  border4: string,
  border5: string,
  border6: string,
  border7: string,
  border8: string,
  border9: string,
  border10: string
}

const light: Color = {
  bg1: "rgb(255, 255, 255)",
  bg2: "rgb(245, 245, 245)",
  bg3: "rgb(235, 235, 235)",
  bg4: "rgb(225, 225, 225)",
  bg5: "rgb(215, 215, 215)",
  bg6: "rgb(205, 205, 205)",
  bg7: "rgb(195, 195, 195)",
  bg8: "rgb(185, 185, 185)",
  bg9: "rgb(175, 175, 175)",
  bg10: "rgb(165, 165, 165)",
  text1: "rgb(10,10,10)",
  text2: "rgb(20, 20, 20)",
  text3: "rgb(30, 30, 30)",
  text4: "rgb(40, 40, 40)",
  text5: "rgb(50, 50, 50)",
  text6: "rgb(60, 60, 60)",
  text7: "rgb(70, 70, 70)",
  text8: "rgb(80, 80, 80)",
  text9: "rgb(90, 90, 90)",
  text10: "rgb(100, 100, 100)",
  border1: "rgb(230, 230, 230)",
  border2: "rgb(215, 215, 215)",
  border3: "rgb(200, 200, 200)",
  border4: "rgb(185, 185, 185)",
  border5: "rgb(170, 170, 170)",
  border6: "rgb(155, 155, 155)",
  border7: "rgb(140, 140, 140)",
  border8: "rgb(125, 125, 125)",
  border9: "rgb(110, 110, 110)",
  border10: "rgb(95, 95, 95)"
}

const dark: Color = {
  bg1: "rgb(15,15,15)",
  bg2: "rgb(20,20,20)",
  bg3: "rgb(25,25,25)",
  bg4: "rgb(30,30,30)",
  bg5: "rgb(35,35,35)",
  bg6: "rgb(40,40,40)",
  bg7: "rgb(45,45,45)",
  bg8: "rgb(50,50,50)",
  bg9: "rgb(55,55,55)",
  bg10: "rgb(60,60,60)",
  text1: "rgb(255,255,255)",
  text2: "rgb(245,245,245)",
  text3: "rgb(235,235,235)",
  text4: "rgb(225,225,225)",
  text5: "rgb(215,215,215)",
  text6: "rgb(205,205,205)",
  text7: "rgb(195,195,195)",
  text8: "rgb(185,185,185)",
  text9: "rgb(175,175,175)",
  text10: "rgb(165,165,165)",
  border1: "rgb(30,30,30)",
  border2: "rgb(40,40,40)",
  border3: "rgb(50,50,50)",
  border4: "rgb(60,60,60)",
  border5: "rgb(70,70,70)",
  border6: "rgb(80,80,80)",
  border7: "rgb(90,90,90)",
  border8: "rgb(100,100,100)",
  border9: "rgb(110,110,110)",
  border10: "rgb(120,120,120)"
}

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
  const [isLight, setIsLight] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [theme, setTheme] = useState<Color>(isLight ? light : dark);

  function setLight() {
    setTheme(light);
    setIsLight(true);
    setIsDark(false);
  }

  function setDark() {
    setTheme(dark);
    setIsDark(true);
    setIsLight(false);
  }

  return (
    <ThemeContext.Provider value={{ theme, light, dark, isLight, isDark, setLight, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;