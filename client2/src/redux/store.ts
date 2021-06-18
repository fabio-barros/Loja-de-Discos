import { createStore, applyMiddleware, Store } from "redux";
import reducers from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import { ProductState } from "./types/types";

export interface ApplicationSate {
    productList: ProductState;
}

// const cartItemsFromStorage = localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [];

// const initialState = {
//     cart: { cartItems: cartItemsFromStorage },
// };

const middlewares = [thunk];

const logger = createLogger();
const store: Store<ApplicationSate> = createStore(
    reducers,
    // initialState,
    composeWithDevTools(applyMiddleware(...middlewares, logger))
);

export default store;
