import axios from 'axios';
import config from '../../config/config';

export const GET_MOVIES = 'GET_MOVIES';
export const FETCHING_MOVIES = 'FETCHING_MOVIES';
export const FETCHING_MOVIES_ERROR = 'FETCHING_MOVIES';

const createGetMoviesAction = (data) => ({
    type: GET_MOVIES, 
    data
});

const createFetchingMoviesAction = (message) => ({
    type: FETCHING_MOVIES,
    message
});

const createFetchingMoviesFailedAction = () => ({
    type: FETCHING_MOVIES_ERROR
});

export const getMovies = (titlePrefix) => (dispatch) => {
    axios.get(`http://www.omdbapi.com/?apikey=${config.imdb.apikey}&s=${titlePrefix}&type=movie&page=0`, 
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

