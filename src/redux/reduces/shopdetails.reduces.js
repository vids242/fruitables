import { GET_REVIEWE } from "../ActionType"


const initialState = {
    isLoding: false,
    reviews: [],
    error: null
}

export const reviewsReducer = (state = initialState, action) => {
    // console.log(action);

    switch (action.type) {
        case GET_REVIEWE:

            return {
                isLoding: false,
                reviews: action.payload,
                error: null
            }

        default:
            return state
    }

}