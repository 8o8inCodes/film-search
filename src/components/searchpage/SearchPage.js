import React, { Component } from 'react';
import { getMovies } from '../../store/actions/MoviesActions';
import { connect } from 'react-redux';

import SearchHeader from './SearchHeader';
import MovieList from './MovieList';

// Exporting this component simply because it would be easier to write unit tests after
export class SearchPage extends Component {
    render(){
        return (
            <div>
                <SearchHeader></SearchHeader>
                <MovieList movies={this.props.movies}></MovieList>
                <button>Load More...</button>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        movies: state.movies.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (data) => dispatch(getMovies(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);