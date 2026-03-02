import { Menu, Search, ShoppingBag, User } from "lucide-react"
import { ThemeToggle } from "../ui/theme-toggle"
import { ButtonHeaderAction } from "../ui/buttons-header"
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { UserDropdown } from "../ui/user-dropdown";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { loading, user } = useContext(UserContext);

  return (
    <header className="relative">
      
      <div className="absolute top-0 bottom-0 left-0 right-0">
        <div className="size-full flex items-end opacity-5 dark:opacity-40 overflow-hidden">
          <img src="gray-gradient.png" />
        </div>
      </div>

      <div className="backdrop-blur dark:text-white flex items-center justify-between gap-4 p-4">
        {/* Menu */}
        <div className="w-full flex justify-start">
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Logo */}
        <div className="w-full flex justify-center">
          <h1 className="text-xl tracking-wider">MONOCHROME</h1>
        </div>

        {/* Actions desktop */}
        <div className="w-full hidden md:flex justify-end items-center gap-4">
          <ButtonHeaderAction>
            <Search className="h-5 w-5" />
          </ButtonHeaderAction>
          {!loading && (
            user ? (
              <UserDropdown>
                <User className="h-5 w-5" /> {user.name}
              </UserDropdown>
            ) : (
              <ButtonHeaderAction onClick={() => navigate("/login")}>
                <User className="h-5 w-5" />
              </ButtonHeaderAction>
            )
          )}
          <ButtonHeaderAction>
            <div className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">
                0
              </span>
            </div>
          </ButtonHeaderAction>
          <ThemeToggle />
        </div>

        {/* Actions mobile */}
        <div className="w-full flex justify-end items-center md:hidden">
          <ButtonHeaderAction>
            <Search className="h-5 w-5" />
          </ButtonHeaderAction>
        </div>
      </div>

    </header>
  )
}

export { Header }