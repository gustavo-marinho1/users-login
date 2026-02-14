import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

interface Props {
  children: React.ReactNode,
  submit?: boolean,
  fn?: () => void
}

export const Button = ({children, submit, fn}: Props) => {
  const { theme, isLight } = useContext(ThemeContext);

  const handleClick = () => {
    if (fn) fn();
  }

  return (
    <button
      onClick={() => handleClick()}
      type={submit ? "submit" : "button"}
      className="border rounded-lg cursor-pointer"
      style={{
        backgroundColor: isLight ? theme.bg1 : theme.bg2,
        borderColor: isLight ? theme.border3 : theme.border4,
        padding: "8px 12px",
      }}
    >
      {children}
    </button>
  )
}