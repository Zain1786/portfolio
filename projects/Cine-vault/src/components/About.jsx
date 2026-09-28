import React from "react";
import "./About.css";
import {useState , useEffect} from 'react'
const About = () => {
  return (
    <main className="about-page">

      <section className="about-hero">
        <span>ABOUT CINEVAULT</span>
        <h1>Movies. Discoveries. Entertainment.</h1>
        <p>
          CineVault is a movie discovery platform designed to help you
          explore movies, discover new favorites, and find something
          worth watching.
        </p>
      </section>

      <section className="about-content">

        <div className="about-box">
          <span>OUR MISSION</span>
          <h2>Making Movie Discovery Simple</h2>

          <p>
            Finding a good movie should not be complicated. CineVault
            brings movies together in a simple and clean experience
            where you can explore popular, trending, and highly-rated
            films.
          </p>

          <p>
            From discovering something new to finding an old favorite,
            CineVault is built to make your movie journey easier.
          </p>
        </div>

        <div className="about-stats">

          <div className="stat-box">
            <h3>10+</h3>
            <p>Movies</p>
          </div>

        

          <div className="stat-box">
            <h3>24/7</h3>
            <p>Discovery</p>
          </div>

        </div>

      </section>

    </main>
  );
};

export default About;

