import axios from 'axios';
import config from '../../config/config';

export const GET_MOVIES = 'GET_MOVIES';
export const FETCHING_MOVIES = 'FETCHING_MOVIES';
export const FETCHING_MOVIES_ERROR = 'FETCHING_MOVIES_ERROR';

const createGetMoviesAction = (data) => ({
    type: GET_MOVIES, 
    data
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
                dispatch(createGetMoviesAction(response.data));
            } else {
                dispatch(createFetchingMoviesFailedAction(response.data.Error));
            }
        }
    );
    dispatch(createFetchingMoviesAction());
};

export const loadMoreMovies = (titlePrefix, page) => (dispatch) => {
    axios.get(`http://www.omdbapi.com/?apikey=${config.imdb.apikey}&s=${titlePrefix}&type=movie&page=${page}`, 
        (response) => {
            if(response.Response){
                dispatch(createGetMoviesAction(titlePrefix));
            } else {
                dispatch(createFetchingMoviesFailedAction(response.Error));
            }
        }
    );
    dispatch(createFetchingMoviesAction());
};

