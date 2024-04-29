import axios from 'axios';
import { baseURL } from '../../utils/baseURL';
import { GET_REVIEWE } from '../ActionType';

export const getreview = () => (dispatch) => {
    try {
        axios.get(baseURL + "reviewe")
        .then((responses) => {
            dispatch({type : GET_REVIEWE,payload:responses.data})
        })
        .catch ((error) => {
            alert(error)
        })
    } catch (error) {
        alert(error.message)
    }
}