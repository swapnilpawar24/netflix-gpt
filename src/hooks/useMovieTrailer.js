import { addTrailerVideos } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// fetching the videos and storing in the store
const useMovieTrailer = () => {
  const dispatch = useDispatch();

  const getMOviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/653346/videos?language=en-US", //this API will provide all the vidios of the movie, be it a teaser, clip, song or trailer
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json.results);
    const filterVideos = json.results.filter(
      (video) => video?.type === "Trailer",
    );
    const trailer = filterVideos.length ? filterVideos[0] : json.results[0]; //handling the case when there is no video found having type :"Trailer" , then play the first video among the list of all the associated videos of that move
    console.log(trailer);
    dispatch(addTrailerVideos(trailer));
    // console.log("key", trailerVideos?.key);
  };

  useEffect(() => {
    getMOviesVideos();
  }, []);
};

export default useMovieTrailer;
