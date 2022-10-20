import { lazy } from "react";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const LoginPage = lazy(() => import("./app/page/Login/Login"));

const routes = [
  {
    path: "",
    element: <MainLayout />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },
];

export default routes;
