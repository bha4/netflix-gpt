import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcommingMovies } from "../utils/movieSlice";

const useUpcommingMovies = () => {
  const dispatch = useDispatch();
  const upcommingMovies = useSelector((store) => store.movies.upcommingMovies);
  const getUpCommingMovies = async () => {
    const data = await fetch(
      "//api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcommingMovies(json.results));
  };

  useEffect(() => {
   !upcommingMovies && getUpCommingMovies();
  }, []);
};

export default useUpcommingMovies;