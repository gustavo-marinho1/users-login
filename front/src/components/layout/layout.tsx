import { Outlet } from "react-router-dom";
import { Main } from "./main";
import { Header } from "./header";
import { Footer } from "./footer";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/user-context";
import { me } from "../../services/me";

export default function Layout() {
  const { setUser } = useContext(UserContext);
  
  const getMe = async () => {
    try {
      const res = await me();
      console.log(res)
      setUser(res.data);
    }
    catch (error: Error | any) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-background text-foreground">
      <div className="sticky z-50 w-full top-0 border-border">
        <Header />
      </div>

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  )
}