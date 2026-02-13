import { Outlet } from "react-router-dom";
import { Main } from "./main";
import { Header } from "./header";
import { Footer } from "./footer";

export default function Layout() {
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