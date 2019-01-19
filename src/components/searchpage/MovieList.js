import React, { Component } from 'react';

 class MovieList extends Component {
    render(){
        return (
            <div>
                <h2>Movie List</h2>
                {this.props.movies ? this.props.movies.map((movie) => <p key={movie.imdbID}>{movie.Title}</p>) : null}
            </div>
        );
    }
}

export default MovieList;