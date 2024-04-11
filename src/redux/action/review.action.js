import axios from "axios";
import { baseURL } from "../../utils/baseURL"
import { GET_REVIEWE } from "../ActionType";

export const getReview = () => async (dispatch) => {
    try {
        await axios.get(baseURL + "reviewe")
            .then((response) => {
                dispatch({ type: GET_REVIEWE, payload: response.data })
            }).catch((error) => {
                console.log(error);
            })


    } catch (error) {
        alert(error.message)
    }
}