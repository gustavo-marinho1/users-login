import { createContext, useState } from "react";
import type { UserLogin } from "../types/user";

interface Context {
  user: UserLogin | undefined,
  setUser: (u: UserLogin) => void,
  cleanUser: () => void,
}

export const UserContext = createContext<Context>({
  user: undefined,
  setUser: () => {},
  cleanUser: () => {},
});

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserLogin | undefined>(undefined);

  function cleanUser() {
    setUser(undefined);
  }

  return (
    <UserContext.Provider value={{ user, setUser, cleanUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;