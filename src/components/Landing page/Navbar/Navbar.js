import React from "react";
import "./Navbar.css";
import AppApk from "../assets/tieoda.apk";
import Logo from "../assets/icon.png";
const Navbar = () => {
  return (
    <div className="landing-page-navbar-container">
      <div className="landing-page-navbar-heading">
        <div className="landing-page-navbar-heading-container">
          <div
            className="landing-page-navbar-heading-logo"
            // onClick={handleClick}
          >
            <img src={Logo} alt="logo" height={30} />
            <div className="landing-page-navbar-heading-logo-text"> Tieoda</div>
          </div>
          <div
            className="landing-page-navbar-heading-signin"
            // onClick={handleClickSignin}
          >
            <a
              href={AppApk}
              download="tieoda.apk" // Ensuring the correct file name
              className="landing-page-signup-button"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              Get app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
