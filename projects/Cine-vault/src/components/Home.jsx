
import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [newMovies] = useLoaderData();
  
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">WELCOME TO CINEVAULT</span>

          <h1>
            Discover Your
            <span> Next Favorite Movie</span>
          </h1>

          <p>
            Explore the latest movies, trending films, and top-rated movies.
          </p>

          <NavLink to="/movies" className="hero-btn">
            Explore Movies
          </NavLink>
        </div>
      </section>

      <section className="movies-section">
        <div className="section-heading">
          <div>
            <span>EXPLORE</span>
            <h2>Trending Movies</h2>
          </div>

          <NavLink to="/movies" className="more-btn">
            More Movies →
          </NavLink>
        </div>

        <div className="movie-grid">
          {newMovies.Search?.slice(0,4).map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <div className="movie-image">
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </div>

              <div className="movie-info">
                <h3>{movie.Title}</h3>

                <div className="movie-meta">
                  <span>{movie.Year}</span>
                  <span>{movie.Type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;