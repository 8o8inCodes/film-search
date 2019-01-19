import MoviesReducer from "./MoviesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    movies: MoviesReducer
});

export default rootReducer;