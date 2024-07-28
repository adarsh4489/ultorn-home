import React, { useState } from "react";
import brand from "../assets/brand logo.png";
import coin from "../assets/coin.png";
import login from "../assets/login icon.png"
import drop from "../assets/drop down icon.png"
import menu from "../assets/menu.png"
import "./Navbar.css";
import key from "../assets/key.png"
import logout from "../assets/logout.png"

const Navbar = () => {

const [settingVisibility,setSettingVisibility]=useState(false)
  function apiSetting(){
 setSettingVisibility((prevVisibility) => !prevVisibility);

  };

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
            <img className="drop" onClick={apiSetting} src={drop} alt="" />
            <img className="menu-bar" src={menu} alt="menu bar" />

            { settingVisibility&&(
<div className="api-setting">
              <div className="api-key api-desc">
<img src={key} alt="" />
<p>API Key</p>
              </div>
              <div className="logout api-desc">
                <img src={logout} alt="" />
<p>Log Out</p>
              </div>
            </div>
            )

            }

            
        </div>
      </div>
    </div>

  );
};

export default Navbar;
