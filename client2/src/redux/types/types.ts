import { ProductInterface } from "../../interfaces/Interfaces";

export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";

export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL";

export enum ActionType {
    PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST",
    PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS",
    PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL",
    ADD = "ADD",
    REMOVE = "REMOVE",
}

export interface ProductState {
    readonly products: ProductInterface[];
    readonly loading: boolean;
    readonly error: string;
}
