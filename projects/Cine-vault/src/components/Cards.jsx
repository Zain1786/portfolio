import React from 'react'
import './Movies.css'
import { NavLink } from 'react-router-dom';
const Cards = ({ movie }) => {
  const { Poster, Title, Year ,imdbID} = movie;
  return (
       <div className="movie-card-page" key={imdbID}>

              <div className="movie-poster">

                <img
                  src={Poster}
                  alt={Title}
                />

              </div>

              <div className="movie-details">

                <h3>{Title}</h3>

                <div className="movie-meta-page">
                  <span>{Year}</span>
                  <NavLink to={`/movies/${imdbID}` } ><button className='dets-btn'>GET DETAILS</button></NavLink>
                </div>
              
              </div>
            </div>
  )
}

export default Cards