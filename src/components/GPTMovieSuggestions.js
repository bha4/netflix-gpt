import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
    const result = useSelector((store) => store.gpt);
    const {movieNames,movieResults}=result;
    if(!movieNames) return null;
    if(!movieResults) return <p className='text-red-700 font-bold'>There is no movies Found!! </p>
  return (
    <div className='pt-[30%]  text-black z-auto '>
      {movieNames.map((movie, index) => (
        <MovieList key={index} title={movie} list={movieResults[index]} />
      ))}
    </div>
  );
}

export default GPTMovieSuggestions