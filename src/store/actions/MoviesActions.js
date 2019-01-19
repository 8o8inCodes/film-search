import axios from 'axios';
import config from '../../config/config';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MORE_MOVIES = 'GET_MORE_MOVIES';
export const FETCHING_MOVIES = 'FETCHING_MOVIES';
export const FETCHING_MOVIES_ERROR = 'FETCHING_MOVIES_ERROR';

const createGetMoviesAction = (data, searchPrefix) => ({
    type: GET_MOVIES, 
    data,
    searchPrefix
});

const createGetMoreMoviesAction = (data, page) => ({
    type: GET_MORE_MOVIES, 
    data,
    page
});

const createFetchingMoviesAction = () => ({
    type: FETCHING_MOVIES
});

const createFetchingMoviesFailedAction = (message) => ({
    type: FETCHING_MOVIES_ERROR,
    message
});

export const getMovies = (titlePrefix) => (dispatch) => {
    axios.get(`http://www.omdbapi.com/?apikey=${config.imdb.apikey}&s=${titlePrefix}&type=movie&page=1`).then(
        (response) => {
            if(response.data.Response){
                dispatch(createGetMoviesAction(response.data, titlePrefix));
            } else {
                dispatch(createFetchingMoviesFailedAction(response.data.Error));
            }
        }
    );
    dispatch(createFetchingMoviesAction());
};

export const getMoreMovies = (titlePrefix, page) => (dispatch) => {
    axios.get(`http://www.omdbapi.com/?apikey=${config.imdb.apikey}&s=${titlePrefix}&type=movie&page=${page}`).then((response) => {
        if(response.data.Response){
            dispatch(createGetMoreMoviesAction(response.data, page));
        } else {
            dispatch(createFetchingMoviesFailedAction(response.data.Error));
        }
    });
    dispatch(createFetchingMoviesAction());
};

