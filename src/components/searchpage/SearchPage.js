import React, { Component } from 'react';
import { getMoreMovies } from '../../store/actions/MoviesActions';
import { connect } from 'react-redux';

import SearchHeader from './SearchHeader';
import MovieList from './MovieList';

import './SearchPageStyle.css';

// Exporting this component simply because it would be easier to write unit tests after
export class SearchPage extends Component {
    loadMoreMovies = () => {
        const { page, searchPrefix, canLoadMoreVideos } = this.props;
        if(canLoadMoreVideos){
            this.props.getMoreMovies(searchPrefix, page+1);
        }
    }

    render(){
        return (
            <div>
                <SearchHeader></SearchHeader>
                <div className="movies-container">
                    <MovieList movies={this.props.movies}></MovieList>
                    <h2 className="error-msg">{this.props.errorMsg}</h2>
                    {this.props.canLoadMoreVideos ? <button onClick={this.loadMoreMovies} disabled={!this.props.canLoadMoreVideos}>Load More...</button> : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: state.movies.page,
        errorMsg: state.movies.errorMsg,
        movies: state.movies.results,
        searchPrefix: state.movies.searchPrefix,
        canLoadMoreVideos: state.movies.canLoadMoreVideos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMoreMovies: (data, page) => dispatch(getMoreMovies(data, page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);