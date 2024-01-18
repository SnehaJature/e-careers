import React from "react";
import "./navbar.css";
import LogoImg from "../../assets/logo.png";
import NavbarItem from "./NavbarItem";
import {
  LanguageIcon,
  PermIdentityIcon,
  AddIcon,
} from "../../../icons";

function NavBar() {
  return (
    <>
      <nav className="mainContainer-navbar">
        <div className="logoContainer-navbar">
          <img src={LogoImg} alt="" />
          <h1>E-Careers</h1>
        </div>

        <ol className="navigation-list">
          <li>
            <NavbarItem
              itemName={"Hello"}
              icon={<AddIcon id="nav-icon" style={{ fontSize: 20 }} />}
            />
          </li>
          <li>
            <NavbarItem
              itemName={"Governmet Job"}
              icon={<AddIcon id="nav-icon" />}
            />
          </li>
          <li>
            <NavbarItem
              itemName={"Student"}
              icon={<AddIcon className="nav-icon" id="nav-icon" />}
            />
          </li>
          <li>
            <NavbarItem
              itemName={" Others"}
              icon={<AddIcon className="nav-icon" id="nav-icon" />}
            />
          </li>
          <li>
            <NavbarItem
              itemName={" Videos"}
              icon={<AddIcon className="nav-icon" id="nav-icon" />}
            />
          </li>
        </ol>

        <div className="loginContainer-navbar">
          <NavbarItem itemName={"English"} icon={<LanguageIcon />} />
          <NavbarItem itemName={"Login"} icon={<PermIdentityIcon />} />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
