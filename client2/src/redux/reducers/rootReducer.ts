import { combineReducers } from "redux";
import { productListReducer } from "./productReducer";
// import { cartReducer } from "./cartReducers";

const reducers = combineReducers({
    productList: productListReducer,
    // productDetails: productDetailsReducer,
    // cart: cartReducer,
});

export default reducers;
