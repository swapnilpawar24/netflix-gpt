import React from "react";
import Header from "./Header";
import useNowPlayinMovies from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayinMovies(); // calling the custom hook
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
