import React from "react";
import "./Header.css";

const Header = ({link}) => {
  return (
    <>
      <a href={link}>{link}</a>
    </>
  );
};

export default Header;
