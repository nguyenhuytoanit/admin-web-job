import clsx from "clsx";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./scss/sb-admin-2.min.scss";

function HomeLayout() {
  const location = useLocation();

  return (
    <div id="wrapper">
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a className="sidebar-brand d-flex align-items-center justify-content-center">Logo</a>

        <hr className="sidebar-divider my-0" />

        <li className={`nav-item ${clsx({ active: location.pathname === "/construction" })}`}>
          <Link className="nav-link" to={"/construction"}>
            <i className="fa-solid fa-trowel-bricks"></i>
            <span>Công trình</span>
          </Link>
        </li>
        <li className={`nav-item ${clsx({ active: location.pathname === "/template" })}`}>
          <Link className="nav-link" to={"/template"}>
            <i className="fa-solid fa-clipboard-list"></i>
            <span>Mẫu báo cáo</span>
          </Link>
        </li>
        <li className={`nav-item ${clsx({ active: location.pathname === "/user" })}`}>
          <Link className="nav-link" to={"/user"}>
            <i className="fa-solid fa-user"></i>
            <span>Người dùng</span>
          </Link>
        </li>
      </ul>

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Nguuyễn ngọc minh anh
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250"
                  />
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                    Activity Log
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div className="container-fluid">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLayout;
