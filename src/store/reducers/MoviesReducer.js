import { GET_MOVIES, FETCHING_MOVIES_ERROR, FETCHING_MOVIES } from '../actions/MoviesActions';

const initState = {
    loading: false,
    page: 0,
    titlePrefix: null
};

const MoviesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            console.log("GET_MOVIES", action);
            return state;
        case FETCHING_MOVIES:
            console.log("FETCHING_MOVIES", action);
            return state;
        case FETCHING_MOVIES_ERROR:
            console.log("FETCHING_MOVIES_ERROR", action);
            return state;
        default:
            return state;
    }
};

export default MoviesReducer;