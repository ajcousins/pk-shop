import classes from "./Navigation.module.css";
import React from "react";
import logo from "../assets/00_PK-logo.svg";
import QuantityIndicator from "./QuantityIndicator";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  console.log("Nav:", props.quantity);
  return (
    <nav className={classes.container}>
      <Link to='/'>
        <img className={classes.logo} src={logo} alt='pepper kitchen logo' />
      </Link>
      <ul className={classes.navlinks}>
        <Link to='/' className={classes.link}>
          <li>HOME</li>
        </Link>
        <Link to='/' className={classes.link}>
          <li>ABOUT</li>
        </Link>
        <Link to='/shop' className={classes.link}>
          <li>SHOP</li>
        </Link>
        <Link to='/' className={classes.link}>
          <li>CONTACT</li>
        </Link>
        <li className={classes.spacer} />

        <QuantityIndicator quantity={props.quantity} />
      </ul>
    </nav>
  );
};
export default Navigation;
