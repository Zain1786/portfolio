import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <NavLink to="/" className="logo">
            Cine<span>Vault</span>
          </NavLink>

          <p>
            Discover the latest movies, popular films, and your next favorite
            movie all in one place.
          </p>

        </div>


        <div className="footer-section">

          <h3>Quick Links</h3>

          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>

        </div>




        <div className="footer-section">

          <h3>Follow Us</h3>

          <NavLink to="https://www.instagram.com/buildwithzain1/">Instagram</NavLink>
         
          

        </div>

      </div>


      <div className="footer-bottom">

        <p>© 2026 CineVault. All Rights Reserved.</p>

      </div>

    </footer>
  );
};

export default Footer;

