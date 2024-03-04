import React from "react";
import "./Header.css";
import headerData from "../data/headerData.json";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // for a smooth scrolling
  });
};
const Header = () => {
  return (
    <header className="header">
      <div className="name" onClick={scrollToTop} style={{ cursor: "pointer" }}>
        {headerData.name}
      </div>
      <div className="role">{headerData.role}</div>
      <div className="tagline">{headerData.tagline}</div>
    </header>
  );
};

export default Header;
