import { GET_MOVIES, GET_MORE_MOVIES, FETCHING_MOVIES_ERROR, FETCHING_MOVIES } from '../actions/MoviesActions';

const initState = {
    loading: false,
    page: 0,
    searchPrefix: ""
};

const MoviesReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                results: action.data.Search,
                totalResults: action.data.totalResults,
                loading: false,
                page: 1,
                searchPrefix: action.searchPrefix
            };
        case GET_MORE_MOVIES:
            return {
                ...state,
                results: [
                    ...state.results, 
                    ...action.data.Search
                ],
                totalResults: action.data.totalResults,
                loading: false,
                page: action.page
            };
        case FETCHING_MOVIES:
            return {
                ...state,
                loading: true
            };
        case FETCHING_MOVIES_ERROR:
            return state;
        default:
            return state;
    }
};

export default MoviesReducer;