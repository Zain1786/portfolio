import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Movies.css";
import Cards from "./Cards";
import { useState } from "react";

const Movies = () => {
  const [newMovies,horrorMovies] = useLoaderData();
  const [search, setSearch] = useState("");

const handleSearch = (e) => {
  setSearch(e.target.value);
  };
  console.log(search);
 const filteredMovies = horrorMovies.Search.filter((movie) => {

   if (movie.Title.toLowerCase().includes(search.toLowerCase())) return true
   
 })
   const filteredMovies1 = newMovies.Search.filter((movie) => {

   if (movie.Title.toLowerCase().includes(search.toLowerCase())) return true
   
   })
  
  console.log(filteredMovies)
  const allmovies = [
    ...filteredMovies,...filteredMovies1
  ]
  
  return (
    <main className="movies-page">

      <section className="movies-hero">
        <span>MOVIE COLLECTION</span>

        <h1>Explore Movies</h1>

        <p>
          Discover popular, trending, and top-rated movies all in one place.
        </p>

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange = {handleSearch}
          className="movie-search"
        />
      </section>

      <section className="all-movies">

        <div className="movies-heading">

          <div>
            <span>OUR COLLECTION</span>
            <h2>All Movies</h2>
          </div>

        </div>

        <div className="movies-grid">

        {allmovies.length === 0 ? (
  <h1>Nothing Found</h1>
) : (
  allmovies.map((movie) => (
    <Cards movie={movie} key={movie.imdbID} />
  ))
          )}
              

        </div>

      </section>

    </main>
  );
};

export default Movies;