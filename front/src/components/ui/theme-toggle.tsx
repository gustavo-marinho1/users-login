import { useContext } from "react"
import { ThemeContext } from "../../contexts/use-theme"
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {

  const { theme, isLight, setDark, setLight } = useContext(ThemeContext);

  function toogle() {
    if (isLight) {
      setDark();
    }
    else {
      setLight();
    }
  }

  return (
    <button
      type="button"
      onClick={() => toogle()}
      className="size-9 border rounded-md flex items-center justify-center cursor-pointer"
      style={{
        backgroundColor: isLight ? theme.bg1 : theme.bg3,
        borderColor: theme.border3,
      }}
    >
      {isLight ? (
        <Sun style={{color: theme.text2}} className="size-4" />
      ) : (
        <Moon style={{color: theme.text2}} className="size-4" />
      )}
    </button>
  )
}