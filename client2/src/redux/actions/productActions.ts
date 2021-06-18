import { ActionType } from "../types/types";
import { action } from "typesafe-actions";
import { ProductInterface } from "../../interfaces/Interfaces";
import { Dispatch } from "redux";

export const productListRequest = () => action(ActionType.PRODUCT_LIST_REQUEST);

export const productListSucess = (data: ProductInterface[]) =>
    action(ActionType.PRODUCT_LIST_SUCCESS, data);

export const productListFailure = () => action(ActionType.PRODUCT_LIST_FAIL);

export const listProducts = () => async (dispatch: Dispatch) => {
    try {
        dispatch({ type: ActionType.PRODUCT_LIST_REQUEST });

        dispatch({
            type: ActionType.PRODUCT_LIST_SUCCESS,
        });
    } catch (error) {
        dispatch({
            type: ActionType.PRODUCT_LIST_FAIL,
            payload:
                error.response && error.reponse.data.message
                    ? error.reponse.data.message
                    : error.message,
        });
    }
};
