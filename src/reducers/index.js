import { combineReducers } from "redux";
import productsReducers from "./productsReducers";
import filtersReducer from "./filterReducer";

export default combineReducers({
    products: productsReducers,
    filters: filtersReducer
});