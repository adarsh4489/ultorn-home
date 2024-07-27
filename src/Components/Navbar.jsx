import React from "react";
import brand from "../assets/brand logo.png";
import coin from "../assets/coin.png";
import login from "../assets/login icon.png"
import drop from "../assets/drop down icon.png"
import menu from "../assets/menu.png"
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img className="brand-logo" src={brand} alt="" />
        <span className="brand-name">Ultron</span>
      </div>
      <div className="nav-menu">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>

        <div className="points">
          <img src={coin} alt="" />
          <p>14/20 coins</p>
        </div>

        <div className="login">
            <img className="login-icon"src={login} alt="" />
            <img className="drop" src={drop} alt="" />
            <img className="menu-bar" src={menu} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
