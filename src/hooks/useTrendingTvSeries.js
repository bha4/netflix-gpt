import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingTvSeries } from "../utils/movieSlice";

const useTrendingTvSeries = () => {
  const dispatch = useDispatch();
  const trendingTvSeries = useSelector(
    (store) => store.movies.trendingTvSeries
  );
  const getTrendingTvSeries = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrendingTvSeries(json.results));
  };

  useEffect(() => {
    !trendingTvSeries && getTrendingTvSeries();
  }, []);
};

export default useTrendingTvSeries;
