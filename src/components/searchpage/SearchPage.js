import React, { Component } from 'react';
import { getMoreMovies } from '../../store/actions/MoviesActions';
import { connect } from 'react-redux';

import SearchHeader from './SearchHeader';
import MovieList from './MovieList';

// Exporting this component simply because it would be easier to write unit tests after
export class SearchPage extends Component {
    loadMoreMovies = () => {
        const { page, totalResults, movies, searchPrefix } = this.props;
        if(movies.length < totalResults){
            this.props.getMoreMovies(searchPrefix, page+1);
        }
    }

    render(){
        return (
            <div>
                <SearchHeader></SearchHeader>
                <MovieList movies={this.props.movies}></MovieList>
                <button onClick={this.loadMoreMovies}>Load More...</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.movies.page,
        totalResults: state.movies.totalResults,
        movies: state.movies.results,
        searchPrefix: state.movies.searchPrefix
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreMovies: (data, page) => dispatch(getMoreMovies(data, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);