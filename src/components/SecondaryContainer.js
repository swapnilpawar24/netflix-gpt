import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <div className="">
        <MovieList category={"Now Playing"} movies={movies.nowPlayingmovies} />
        <MovieList category={"Popular "} movies={movies.popularMovies} />
        <MovieList category={"Top Rated "} movies={movies.TopRatedmovies} />
        <MovieList category={"Upcoming "} movies={movies.UpcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
