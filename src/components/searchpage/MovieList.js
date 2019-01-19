import React from 'react';
import MissingPoster from '../../assets/missingPoster.jpg';

import './MovieListStyle.css';
const MovieList = (props) => {
    return (
        <div className="movie-list-container">
            {searchResults(props.movies)}
        </div>
    );
}

const searchResults = (movies) => {
    if(movies){
        return (
            <div>
                <h1>Search Results</h1>
                <ul>
                    {movies ? movies.map((movie) => represent(movie)) : null}
                </ul>
            </div>
        );
    } else {
        return (
            <div>
                <h1>IMDB Movie Searcher</h1>
            </div>
        )
    }
}

const represent = (movie) =>{
    console.log(movie.Poster);
    const imageSrc = (movie.Poster !== "N/A") ? movie.Poster : MissingPoster
    return (
        <li key={movie.imdbID}>
            <img src={imageSrc} alt="poster"/>
            <div className="container">
                <h2>{movie.Title}</h2>
                <p>Type: {movie.Type}</p>
                <p>Year: {movie.Year}</p>
                <p><a href={`https://www.imdb.com/title/${movie.imdbID}/`}>View on IMDB</a></p>
            </div>
        </li>
    )
}
export default MovieList;