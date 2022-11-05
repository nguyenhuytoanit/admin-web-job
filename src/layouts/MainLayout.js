import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

MainLayout.propTypes = {};

function MainLayout() {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user, shallowEqual);
  return user && ["/login", "/register"].includes(location.pathname) ? (
    <Navigate to="/template" replace />
  ) : (
    <Outlet />
  );
}

export default MainLayout;
