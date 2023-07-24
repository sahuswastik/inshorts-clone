import React from "react";
import "./NavInshorts.css";
import HamburgerDrawer from "./HamburgerDrawer";

const NavInshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <HamburgerDrawer setCategory={setCategory} />
      </div>

      <img
        style={{ cursor: "pointer" }}
        src="https://w7.pngwing.com/pngs/439/471/png-transparent-inshorts-online-newspaper-india-news-media-india-text-logo-india.png"
        height="80%"
        alt="logo"
      />
    </div>
  );
};

export default NavInshorts;
