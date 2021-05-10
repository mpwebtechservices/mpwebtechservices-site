import "./Header.css";
import React, { Component } from "react";
import { FaBars } from "react-icons/fa";

export class Header extends Component {
  render() {
    return (
      <div className="site-header">
        <nav className="navbar navbar-expand navbar-light topbar mb-4 static-top shadow">
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <FaBars />
          </button>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="site-name"
                href="/"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 font-weight-bold large">
                  MPWebTechServices
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
