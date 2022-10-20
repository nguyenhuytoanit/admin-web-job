import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

MainLayout.propTypes = {};

function MainLayout(props) {
  return (
    <div>
      layout
      <Outlet />
    </div>
  );
}

export default MainLayout;
