import MoviesReducer from "./MoviesReducer";
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    movies: MoviesReducer
});

export default RootReducer;