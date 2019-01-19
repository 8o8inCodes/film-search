import React, { Component } from 'react';
import { getMovies } from '../../store/actions/MoviesActions';
import { connect } from 'react-redux';

// Exporting this component simply because it would be easier to write unit tests after
export class SearchPage extends Component {
    render(){
        return (
            <div>
                <h1>YAAAAS</h1>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: (data) => dispatch(getMovies(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);