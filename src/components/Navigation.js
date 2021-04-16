import classes from "./Navigation.module.css";
import React from "react";
import logo from "../assets/00_PK-logo.svg";

const Navigation = () => {
  return (
    <nav className={classes.container}>
      <img className={classes.logo} src={logo} alt='pepper kitchen logo' />
      <ul className={classes.navlinks}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SHOP</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};
export default Navigation;
