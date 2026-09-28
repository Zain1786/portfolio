import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">

      <NavLink to="/" className="logo">
        Cine<span>Vault</span>
      </NavLink>

      <nav className="navbar">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/movies">
          Movies
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

      </nav>


    </header>
  );
};

export default Header;
