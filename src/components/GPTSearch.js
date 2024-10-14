import React from 'react'
import GPTSearchBar from './GPTSearchBar.js'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constants.js';

const GPTSearch = () => {
  return (
    <div>
      <img
        src={BG_URL}
        alt="Bg-image"
        className="absolute inset-0 w-full h-full object-cover "
      />
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
}

export default GPTSearch