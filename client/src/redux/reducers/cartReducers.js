import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            console.log(`item:  ${item.product}`);
            const itemExists = state.cartItems.find(
                (x) => x.product === item.product
            );

            if (itemExists) {
                console.log("EXISTS");
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product === itemExists.product ? item : x
                    ),
                };
            } else {
                console.log("DOES NOT EXISTS");
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (x) => x.product !== action.payload
                ),
            };
        default:
            return state;
    }
};
