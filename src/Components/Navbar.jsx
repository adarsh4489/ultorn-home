import React, { useState, useEffect, useRef } from "react";
import brand from "../assets/brand logo.png";
import coin from "../assets/coin.png";
import login from "../assets/login icon.png";
import drop from "../assets/drop down icon.png";
import menu from "../assets/menu.png";
import cross from "../assets/cross.png";
import key from "../assets/key.png";
import logout from "../assets/logout.png";
import "./Navbar.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [settingVisibility, setSettingVisibility] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setSettingVisibility(false);
    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (settingVisibility || showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingVisibility, showMenu]);

  const apiModal = () => (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="row">
          <h3 className="modal-heading">Profile Setting</h3>
          <img src={cross} alt="cross button" onClick={() => setShowModal(false)} />
        </div>
        <form action="">
          <label htmlFor="email">E-mail Address</label>
          <br />
          <input type="text" placeholder="abcd@gmail.com" />
          <br />
          <label htmlFor="api-key">API Key</label>
          <br />
          <input type="text" placeholder="abcd@gmail.com" />
        </form>
      </div>
    </div>
  );

  const MyMenu = () => (
    <div className="nav-menu-wrapper" ref={menuRef}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
    </div>
  );

  const apiSetting = () => {
    setSettingVisibility(prevVisibility => !prevVisibility);
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img className="brand-logo" src={brand} alt="Brand Logo" />
        <span className="brand-name">Ultron</span>
      </div>
      <div className="nav-menu">
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Docs</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <div className="points">
          <img src={coin} alt="Coin" />
          <p>14/20 coins</p>
        </div>
        <div className="login">
          <img className="login-icon" src={login} alt="Login" />
          <img className="drop" onClick={apiSetting} src={drop} alt="Drop" />
          <img onClick={() => setShowMenu(!showMenu)} className="menu-bar" src={menu} alt="Menu Bar" />

          {showMenu && <MyMenu />}

          {settingVisibility && (
            <div ref={dropdownRef} className="api-setting">
              <div className="api-key api-desc" onClick={() => setShowModal(true)}>
                <img src={key} alt="API Key" />
                <p>API Key</p>
              </div>
              <div className="logout api-desc">
                <img src={logout} alt="Logout" />
                <p>Log Out</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {showModal && apiModal()}
    </div>
  );
};

export default Navbar;
