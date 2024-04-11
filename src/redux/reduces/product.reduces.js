import { GET_PRODUCTS, LOADING_PRODUCT } from "../ActionType";

const inistialstate = {
    isLodaing: false,
    products: [],
    error: null
}
export const productReducer = (state = inistialstate, action) => {
    // console.log(action);

    switch (action.type) {
        case LOADING_PRODUCT:
            return {
                ...state,
                isLoading: true,
            }


        case GET_PRODUCTS:
            return {
                isLodaing: false,
                products: action.payload,
                error: null
            }

        default:
            return state
    }
}