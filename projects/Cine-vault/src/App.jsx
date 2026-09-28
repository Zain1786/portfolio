import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./components/AppLayout";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Home from "./components/Home";
import Movies from "./components/Movies";
import ErrorPage from "./components/ErrorPage";
import Contact, { contactData } from "./components/Contact";
import "./index.css";
import { getMovies } from "./components/Api";
import { MovieDetails } from "./components/MovieDetails";
import { getMovieDetails } from "./components/ApiDetails";
import Step from "./components/Step";
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: getMovies,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movies",
          element: <Movies />,
          loader: getMovies,
        },
          {
          path: "/movies/:movieID",
            element: <MovieDetails/>,
          loader: getMovieDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "/step",
          element:<Step/>
        }
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default App;
