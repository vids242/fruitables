import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { GET_CART } from '../ActionType';

export const getCart = (id) => (dispatch) => {
    try {
        axios.get(baseURL + "fruites/" + id)
            .then((response) => {
                dispatch({ type: GET_CART, payload: response.data })
            })
            .catch((error) => {
                alert(error)
            })
    } catch (error) {
        console.log(error.message);
    }


}