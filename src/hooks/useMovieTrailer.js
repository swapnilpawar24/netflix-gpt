import { addTrailerVideos } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// fetching the videos and storing in the store
const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies?.nowPlayingmovies);

  // This useEffect hook ensures that movie videos are fetched and added to the Redux store when the component mounts or when there's a change in the movies array or the dispatch function.
  useEffect(() => {
    if (!movies || movies.length === 0) return; // if no movies available at that instant return early

    const mainMovie = movies[0];
    console.log(mainMovie);
    const { id } = mainMovie;

    const getMoviesVideos = async (movieId) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, // this API will provide all the videos of the movie, be it a teaser, clip, song, or trailer
        API_OPTIONS,
      );
      const json = await data.json();
      console.log("fffffffffff", json.results);
      const filterVideos = json?.results?.filter(
        (video) => video?.type === "Trailer",
      );
      const trailer = filterVideos.length ? filterVideos[0] : json.results[0]; // handling the case when there is no video found having type "Trailer", then play the first video among the list of all the associated videos of that movie
      console.log(trailer);
      dispatch(addTrailerVideos(trailer));
      // console.log("key", trailerVideos?.key);
    };

    getMoviesVideos(id);
  }, [movies, dispatch]); // Include 'movies' and 'dispatch' as dependencies
};

export default useMovieTrailer;
