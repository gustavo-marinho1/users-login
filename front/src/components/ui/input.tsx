import { useContext, useState } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import { Eye, EyeOff } from "lucide-react"

interface Props {
  id?: string
  name?: string
  password?: boolean
  label?: string
  value?: string
  setValue?: (v: string) => void,
  error?: boolean,
  disabled?: boolean
}

export const Input = ({id, name, password, label, value, setValue, error, disabled}: Props) => {
  const { theme, isLight } = useContext(ThemeContext);
  const [hide, setHide] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-1">

      {label && (
        <label htmlFor={name} style={{ color: theme.text5 }}>
          {label}
        </label>
      )}

      <div className="relative" style={{ color: theme.text3 }}>
        <input
          id={id}
          name={name}
          value={value ?? ""}
          disabled={disabled}
          type={password && hide ? "password" : undefined}
          onChange={(e) => {
            if (setValue) setValue(e.target.value);
          }}
          className={`
            w-full rounded-lg border
          `}
          style={{
            backgroundColor: isLight ? theme.bg1 : theme.bg2,
            borderColor: error ? "rgb(255,72,72)" : (isLight ? theme.border3 : theme.border4),
            padding: !password ? "6px 8px" : "6px 33px 6px 8px"
          }}
        />
        {password && (
          <div className="absolute top-0 right-0 h-full flex justify-center items-center px-2">
            <button className="cursor-pointer" onClick={() => setHide(!hide)}>
              {hide ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        )}
      </div>

    </div>
  )
}