import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
export class Leftside extends Component {
  render() {
    return (
      <div>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-start"
            href="/"
          >
            <div className="sidebar-brand-text mx-3 h4 ">MP</div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="/">
              <FaHome />
              <span className="mx-3">Home</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <div className="sidebar-heading">Applications</div>
          <li className="nav-item active">
            <a className="nav-link" href="/movies">
              <FaHome />
              <span className="mx-3">Movies / TV Show</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <div className="text-center d-none d-md-inline">
            <button
              className="rounded-circle border-0"
              id="sidebarToggle"
            ></button>
          </div>
        </ul>
      </div>
    );
  }
}

export default Leftside;
