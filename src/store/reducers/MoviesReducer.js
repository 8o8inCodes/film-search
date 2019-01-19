import { GET_MOVIES, GET_MORE_MOVIES, FETCHING_MOVIES_ERROR, FETCHING_MOVIES } from '../actions/MoviesActions';

const initState = {
    loading: false,
    page: 0,
    searchPrefix: "",
    canLoadMoreVideos: false
};

const MoviesReducer = (state = initState, action) => {
    let canLoadMoreVideos = false;
    switch (action.type) {
        case GET_MOVIES:
            canLoadMoreVideos = action.data.Search.length < action.data.totalResults;
            return {
                ...state,
                results: action.data.Search,
                totalResults: action.data.totalResults,
                loading: false,
                page: 1,
                searchPrefix: action.searchPrefix,
                canLoadMoreVideos,
                errorMsg: null
            };
        case GET_MORE_MOVIES:
            canLoadMoreVideos = state.results.length + action.data.Search.length < action.data.totalResults;
            return {
                ...state,
                results: [
                    ...state.results, 
                    ...action.data.Search
                ],
                totalResults: action.data.totalResults,
                loading: false,
                page: action.page,
                canLoadMoreVideos,
                errorMsg: null
            };
        case FETCHING_MOVIES:
            return {
                ...state,
                loading: true,
                errorMsg: null
            };
        case FETCHING_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                results: [],
                errorMsg: action.message,
                searchPrefix: ""
            };
        default:
            return state;
    }
};

export default MoviesReducer;