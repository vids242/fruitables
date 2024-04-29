import { baseURL } from "../../utils/baseURL"
import axios from 'axios';
import { ADD_PRODUCTS, DELETE_PRODUCTS, GET_PRODUCTS, LOADING_PRODUCT } from "../ActionType";

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
export  const addProducts =(data)=>async(dispatch)=>{
    try {
        await axios.get(baseURL + "product",data)
        .then((response)=> dispatch({type:ADD_PRODUCTS,payload:response.data}))
        .catch((error)=>console.log(error))

    } catch (error) {
        
    }
}
export const deleteprodact =(id)=>   async(dispatch)=>{
    try {
        await axios.delete(baseURL + "product/"+ id)
        .then((response)=> dispatch({type:DELETE_PRODUCTS,payload:id}))
        .catch((error)=>console.log(error))
    } catch (error) {
        
    }
}