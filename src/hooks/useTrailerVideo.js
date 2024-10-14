import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";
 

const useMovieTrailer =(id)=>{
const dispatch = useDispatch();
const trailerVideo = useSelector((store) => store.movies.trailerVideo);
   const getMovieTrailer = async () => {
     const data = await fetch(
       "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
       API_OPTIONS
     );
     const json = await data.json();
     const trailer = json.results.filter((video) => video.type === "Trailer");
     const trailerKey = trailer.length
       ? trailer[0]?.key
       : json?.results[0]?.key;
     dispatch(addTrailerVideo(trailerKey));
   };
   useEffect(() => {
    !trailerVideo && getMovieTrailer();
   }, []);
 }

 export default useMovieTrailer;