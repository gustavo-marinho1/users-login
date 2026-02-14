import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

interface Props {
  children: React.ReactNode
}

const Main = ({children}: Props) => {
  const { theme, isLight } = useContext(ThemeContext);
  return (
    <main className="flex-[1] w-screen flex flex-col justify-between" style={{
      backgroundColor: isLight ? theme.bg1 : theme.bg1,
      color: theme.text1
    }}>
      {children}
    </main>
  )
}

const MainAuth = ({children}: Props) => {
  const { theme, isLight } = useContext(ThemeContext);
  return (
    <main className="w-screen min-h-screen flex flex-col justify-between" style={{
      backgroundColor: isLight ? theme.bg2 : theme.bg1
    }}>
      {children}
    </main>
  )
}

export {
  Main, MainAuth
}