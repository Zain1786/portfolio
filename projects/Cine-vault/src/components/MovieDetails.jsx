import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const params = useParams();
  const detsData = useLoaderData();
 const navigate =  useNavigate();

  console.log(params);
  console.log(detsData);

  return (
    <section className="movie-details-container">
      {/* LEFT - POSTER */}
      <div className="movie-details-poster">
        <img src={detsData.Poster} alt={detsData.Title} />
      </div>

      {/* RIGHT - DETAILS */}
      <div className="movie-details-content">
        <h1>{detsData.Title}</h1>

        <p className="movie-meta">
          {detsData.Year} • {detsData.Rated} • {detsData.Runtime}
        </p>

        <p className="movie-rating">
          ⭐ {detsData.imdbRating} / 10
        </p>

        <p>
          <strong>Genre:</strong> {detsData.Genre}
        </p>

        <p>
          <strong>Director:</strong> {detsData.Director}
        </p>

        <p>
          <strong>Writer:</strong> {detsData.Writer}
        </p>

        <p>
          <strong>Actors:</strong> {detsData.Actors}
        </p>

        <p>
          <strong>Language:</strong> {detsData.Language}
        </p>

        <p>
          <strong>Country:</strong> {detsData.Country}
        </p>

        <p>
          <strong>Box Office:</strong> {detsData.BoxOffice}
        </p>

        <p>
          <strong>IMDb Votes:</strong> {detsData.imdbVotes}
        </p>

        <div className="movie-plot">
          <h3>Plot</h3>
          <p>{detsData.Plot}</p>
        </div>

        <p className="movie-awards">
          🏆 {detsData.Awards}
        </p>
     
      </div>
    </section>
  );
};

export default MovieDetails;