import { createBrowserRouter, Outlet, type RouteObject, RouterProvider } from "react-router-dom";
import Layout from "../components/layout/layout";
import Error from "../pages/error/Index";
import Login from "../pages/auth/login/Index";
import Home from "../pages/home/Index"
import Register from "../pages/auth/register/Index";

const routeList: RouteObject[] = [
  { path: "/", element: <Home /> },
];

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Outlet />,
    children: [{ path: "", element: <Login /> }],
  },
  {
    path: "/register",
    element: <Outlet />,
    children: [{ path: "", element: <Register /> }],
  },
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: routeList, 
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}