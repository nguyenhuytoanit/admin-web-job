import React from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet, useLocation } from "react-router-dom";

MainLayout.propTypes = {};

function MainLayout(props) {
  const location = useLocation();
  return (
    <div>
      <Outlet />
    </div>
  );
  // return ["/login", "/register"].includes(location.pathname) ? (
  //   <Navigate to="/app" replace />
  // ) : (
  //   <Outlet />
  // );
}

export default MainLayout;
