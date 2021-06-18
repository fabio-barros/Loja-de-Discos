import { Reducer } from "redux";
import { ActionType, ProductState } from "../types/types";

const INITIAL_STATE: ProductState = {
    products: [
        {
            _id: "1",
            artistName: "Common",
            albumName: "Be",
            releaseDate: 2005,
            producers: "Kanye West, J Dilla",
            albumCover: "/images/BE.jpg",
            genres: `Hip hop`,
            description: `
    Be é o sexto álbum de estúdio do rapper americano Common. Foi lançado em 24 de maio de 2005.
    O álbum foi produzido principalmente pelo rapper e produtor Kanye West.
    Be também foi um sucesso de crítica, recebendo aclamação e elogios de vários críticos e publicações musicais.`,
            price: 0.0,
            numInStock: 10,
            rating: 4.5,
            numReviews: 12,
        },
    ],
    loading: false,
    error: "",
};

export const productListReducer: Reducer<ProductState> = (
    state = INITIAL_STATE,
    action
) => {
    switch (action.type) {
        case ActionType.PRODUCT_LIST_REQUEST:
            return { ...state, loading: true };
        case ActionType.PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                error: "",
                // product: action.payload.data,
            };
        case ActionType.PRODUCT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
                product: [],
            };
        default:
            return state;
    }
};
