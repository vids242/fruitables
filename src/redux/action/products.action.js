import { baseURL } from "../../utils/baseURL"
import axios from 'axios';
import { GET_PRODUCTS, LOADING_PRODUCT } from "../ActionType";

const handleLoading = () => (dispatch) => {
    dispatch({ type: LOADING_PRODUCT })
}


export const getproduct = () => async (dispatch) => {
    try {
        await axios.get(baseURL + "product")
            .then((responses) => {
                dispatch(handleLoading())
                setTimeout(() => {
                    dispatch({ type: GET_PRODUCTS, payload: responses.data })
                }, 2000)
            })
            .catch((error) => {
                alert(error)
            })

    } catch (error) {
        alert(error.message)
    }
}