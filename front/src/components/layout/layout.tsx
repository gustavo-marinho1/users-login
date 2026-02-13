import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="w-screen min-h-screen flex flex-col bg-neutral-950">
      <Outlet />
    </main>
  )
}