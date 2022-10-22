import User from "app/page/User/User";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const LoginPage = lazy(() => import("./app/page/Login/Login"));
const HomeLayout = lazy(() => import("layouts/HomeLayout"));
const Template = lazy(() => import("app/page/Template/Template"));

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/template", element: <Template /> },
      { path: "/user", element: <User /> },
    ],
  },
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
