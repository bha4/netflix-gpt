import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies || []);
  const popular = useSelector((store) => store.movies.popularMovies || []);
  const topRated = useSelector((store) => store.movies.topRatedMovies || []);
  const upComming = useSelector((store) => store.movies.upcommingMovies || []);
  const TrendingTvSeries = useSelector((store) => store.movies.trendingTvSeries || []);


  return (
    <div className="bg-black ">
      <div className="-mt-80 pl-12  text-white">
        <MovieList title={"Now Playing"} list={nowPlaying} />
        <MovieList title={"Popular"} list={popular} />
        <MovieList title={"Top Rated"} list={topRated} />
        <MovieList title={"Up Comming"} list={upComming} />
        <MovieList title={"Trending Tv Series"} list={TrendingTvSeries} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
