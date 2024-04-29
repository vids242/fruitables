
import { createContext, useReducer } from "react"
import { ADD_CONTACT } from "./ActionTyep";

import { Contectreduser } from "./reducer/ContactReducer";
import axios from "axios";
import { baseURL } from "../utils/baseURL";
import { type } from "@testing-library/user-event/dist/type";
import { GridContextProvider } from "@mui/x-data-grid";

const initialState = {
    cotect:"contect"
}

export const ContectContext = createContext();

export const contactProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Contectreduser, initialState);

    
  const add_contect =async (data) => {
try {
    const response = await axios.post(baseURL+"Contect",data)
    dispatch({ type: ADD_CONTACT, payload:response, data })
    


} catch (error) {
    
}
  }
    return (
     <ContectContext.Provider
     
     value={{
        ...state,
        add_contect
     }}
     >
        {children}
     </ContectContext.Provider>

    )
}
