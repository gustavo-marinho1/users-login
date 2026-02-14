import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export const Footer = () => {
  const { theme, isLight } = useContext(ThemeContext);

  return (
    <footer className="p-3 shadow-inner" style={{
      backgroundColor: isLight ? theme.bg1 : theme.bg3,
      color: theme.text1
    }}>
      Footer
    </footer>
  )
}