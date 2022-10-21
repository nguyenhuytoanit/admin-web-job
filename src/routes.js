import { lazy } from "react";
import { Navigate } from "react-router-dom";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const LoginPage = lazy(() => import("./app/page/Login/Login"));

const routes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/", element: <Navigate to="/login" replace /> },
    ],
  },
];

export default routes;
