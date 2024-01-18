import React from "react";
import "./header.css";
import {
  TwitterIcon,
  FacebookIcon,
  YouTubeIcon,
  InstagramIcon,
  EmailOutlinedIcon,
} from "../../../icons";
function Header() {
  return (
    <header className="header-container">
      <div>
        <EmailOutlinedIcon />
        example@email.com
      </div>
      <div className="social-media-icon-container">
        <div>
          <TwitterIcon />
        </div>
        <div>
          <FacebookIcon />
        </div>
        <div>
          <InstagramIcon />
        </div>
        <div>
          <YouTubeIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
