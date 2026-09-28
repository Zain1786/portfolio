import React from "react";
import { useNavigate } from "react-router-dom";
import "./navigator.css";

const Navigator = () => {
  const navigate = useNavigate();

  return (
    <div className="navigator">
      <button onClick={() => navigate(-1)}>
        ← Go Back
      </button>

      <button onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default Navigator;