import React from "react";
import Header from "../header/Header.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-list">
          <li><Header link= "ABOUT US"/></li>
          <li><Header link= "FOR YOU"/></li>
          <li><Header link= "SERVICES"/></li>
          <li><Header link= "BLOG"/></li>
          <li><Header link= "VLOG"/></li>
          <li><Header link= "CONTACT"/></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
