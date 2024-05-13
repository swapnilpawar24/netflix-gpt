import React from "react";
import Header from "./Header";
import useNowPlayinMovies from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayinMovies(); // calling the custom hook
  return (
    <div>
      <Header />
      <MainMovieContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
