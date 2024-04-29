import { ADD_PRODUCTS, DELETE_PRODUCTS, GET_PRODUCTS, LOADING_PRODUCT, UPDATE_PRODUCTS } from "../ActionType";


const initialState = {
    isLoading: false,
    product: [],
    error: null
}

export const productReducer = (state = initialState, action) => {
    console.log(action);

    switch (action.type) {


        case LOADING_PRODUCT:
            console.log("loading...");
            return {
                ...state,
                isLoading: true,
            }

        

        case GET_PRODUCTS:
            return {
                isLoading: false,
                product: action.payload,
                error: null
            }

        case ADD_PRODUCTS:
            return {
                isLoading: false,
                product: state.product.concat(action.payload),
                error: null
            }

        case DELETE_PRODUCTS:
            return {
                isLoading: false,
                product: state.product.filter((v) => v.id !== action.payload),
                error: null
            }

        case UPDATE_PRODUCTS:
            return {
                isLoading: false,
                product: state.product.map((v) => {
                    if (v.id === action.payload.id) {
                        return action.payload
                    } else {
                        return v
                    }
                }),
                error: null
            }


        default:
            return state
    }
}