import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    localStorage.clear();
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            artistName: data.artistName,
            albumName: data.albumName,
            releaseDate: data.releaseDate,
            albumCover: data.albumCover,
            genres: data.genres,
            price: data.price,
            numInStock: data.numInStock,
            qty,
        },
    });

    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
};

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cart.cartItems)
    );
};
