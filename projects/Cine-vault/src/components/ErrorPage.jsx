
import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import "../App.css";

const ErrorPage = () => {
  const navigate = useNavigate()
  console.log(navigate)
  const handlerNvigate = () => {
    navigate(-1)
  }
  return (
    <main className="error-page">

      <div className="error-content">

        <span className="error-number">404</span>

        <h1>Page Not Found</h1>

        <p>
          Looks like this movie has disappeared from our collection.
          The page you're looking for doesn't exist.
        </p>

     
        <button onClick={handlerNvigate} className="home-btn">
                    ← Back to Previous

        </button>

      </div>

    </main>
  );
};

export default ErrorPage;

