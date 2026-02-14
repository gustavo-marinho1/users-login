import { useContext } from "react";
import { ThemeToggle } from "../ui/theme-toggle"
import { ThemeContext } from "../../contexts/theme-context";

export const Header = () => {
  const { theme, isLight } = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center p-3 border-b" style={{
      backgroundColor: theme.bg1,
      borderColor: isLight ? theme.border1 : theme.border2,
      color: theme.text1
    }}>

      <div className="flex items-center">
        Logo
      </div>

      <div className="flex items-center">
        <ThemeToggle />
      </div>

    </header>
  )
}