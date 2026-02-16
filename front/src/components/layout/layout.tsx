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
      setUser(res.data);
    }
    catch (error: Error | any) {
      //
    }
  }

  useEffect(() => {
    getMe();
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col justify-between">
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </div>
  )
}