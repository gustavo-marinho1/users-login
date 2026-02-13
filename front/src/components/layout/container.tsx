import { useContext } from "react";
import { ThemeContext } from "../../contexts/use-theme";

interface Props {
  children: React.ReactNode
}

export const Container = ({children}: Props) => {

  const { theme, isLight } = useContext(ThemeContext);

  return (
    <div
      className="border rounded-xl"
      style={{
        backgroundColor: isLight ? theme.bg1 : theme.bg3,
        color: theme.text1,
        borderColor: isLight ? theme.border2 : theme.border3
      }}
    >
      {children}
    </div>
  )
}