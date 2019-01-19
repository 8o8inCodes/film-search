import React from 'react';
import MissingPoster from '../../assets/missingPoster.jpg';

const MovieList = (props) => {
    return (
        <div>
            <h2>Movie List</h2>
            <ul>
                {props.movies ? props.movies.map((movie) => represent(movie)) : null}
            </ul>
        </div>
    );
}

const represent = (movie) =>{
    console.log(movie.Poster);
    const imageSrc = (movie.Poster !== "N/A") ? movie.Poster : MissingPoster
    return (
        <li key={movie.imdbID}>
            <img src={imageSrc} alt="poster"/>
            <div className="container">
                <h4>{movie.Title}</h4>
                <p>Type: {movie.Type}</p>
                <p>Year: {movie.Year}</p>
                <p><a href={`https://www.imdb.com/title/${movie.imdbID}/`}>View on IMDB</a></p>
            </div>
        </li>
    )
}
export default MovieList;