import TemplateEdit from "app/page/Template/TemplateEdit";
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const MainLayout = lazy(() => import("./layouts/MainLayout"));
const LoginPage = lazy(() => import("./app/page/Login/Login"));
const HomeLayout = lazy(() => import("layouts/HomeLayout"));
const Template = lazy(() => import("app/page/Template/Template"));
const User = lazy(() => import("app/page/User/User"));
const Construction = lazy(() => import("app/page/Construction/Construction"));

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/template", element: <Template /> },
      { path: "/template/:id/edit", element: <TemplateEdit /> },
      { path: "/user", element: <User /> },
      { path: "/construction", element: <Construction /> },
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
