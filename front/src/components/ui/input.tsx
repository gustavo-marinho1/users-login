import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

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
  const [hide, setHide] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-1">

      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}

      <div className="relative">
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