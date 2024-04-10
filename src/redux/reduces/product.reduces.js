import { DELETE_PRODUCTS, GET_PRODUCTS, LOADING_PRODUCT } from "../ActionType";

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
                products: action.products.concet(action.payload),
                error: null
            }
            case DELETE_PRODUCTS:
                return {
                    isLodaing: false,
                    facilites: state.facilites.filter((v) => v.id !== action.payload),
                    error: null
                }

        default:
            return state
    }
}