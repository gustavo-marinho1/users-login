import { useContext } from "react";
import { ThemeContext } from "../../contexts/use-theme";
import { Link } from "react-router-dom";

export default function Error() {
  const { theme, isLight } = useContext(ThemeContext);
  return (
    <main
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundColor: isLight ? theme.bg2 : theme.bg1,
        color: theme.text1
      }}
    >
      
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl">
          This page doesn't exist
        </h1>
        <Link to="/" className="underline font-semibold">
          Home
        </Link>
      </div>

    </main>
  )
}