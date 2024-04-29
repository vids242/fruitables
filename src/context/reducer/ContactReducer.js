import { ADD_CONTACT } from "../ActionTyep";

export const Contectreduser =(state,action)=>{
    switch(action.type){
        case ADD_CONTACT:
            return{
                theme:action.payload,
            }
            default:
                return state
    }
}