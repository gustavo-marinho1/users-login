import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { LoaderIcon } from "lucide-react";

interface Props {
  children: React.ReactNode
  submit?: boolean
  fn?: () => void
  loading?: boolean
  disabled?: boolean
}

export const Button = ({children, submit, fn, loading, disabled}: Props) => {
  const { theme, isLight } = useContext(ThemeContext);

  const handleClick = () => {
    if (fn) fn();
  }

  return (
    <button
      disabled={disabled || loading}
      onClick={() => handleClick()}
      type={submit ? "submit" : "button"}
      className="border rounded-lg flex items-center gap-1"
      style={{
        backgroundColor: isLight ? (loading ? theme.bg3 : theme.bg1) : (loading ? theme.bg4 : theme.bg2),
        borderColor: isLight ? theme.border3 : theme.border4,
        padding: "8px 12px",
        cursor: loading ? "default" : "pointer"
      }}
    >
      {loading && (
        <LoaderIcon size={20} className="animate-spin" />
      )}
      {children}
    </button>
  )
}