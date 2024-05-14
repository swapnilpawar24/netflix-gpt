import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList category={"Now Playing"} movies={movies.nowPlayingmovies} />
      <MovieList category={"Popular Movies"} movies={movies.popularMovies} />
      <MovieList category={"Top Rated Movies"} movies={movies.TopRatedmovies} />
      <MovieList category={"Upcoming Movies"} movies={movies.UpcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
