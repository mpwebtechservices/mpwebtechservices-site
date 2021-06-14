import React, { Component } from "react";
// import { FaBars } from "react-icons/fa";
import logo from "../assets/logos/logo.png";

export class Header extends Component {
  render() {
    console.log("this.props : ", this.props);
    return (
      <div>
        <div className="site-header">
          <a href="/home" className="logo">
            <img src={logo} alt="MPWEBTECHSERVICES" />
          </a>
          <div className="header-right">
            <a className="active" href="/home">
              Home
            </a>
            <a href="/blogs">Blogs</a>
            <a href="#">About</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
