import { createContext, useState } from "react";

export const UserContext = createContext({
  user: undefined as any,
  setUser: (user: any) => {}
});

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<any>(undefined);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;