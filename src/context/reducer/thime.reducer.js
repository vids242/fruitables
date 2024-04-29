import { TOGGL_THEME } from "../ActionTyep";

export const themereduser =(state,action)=>{
    switch(action.type){
        case TOGGL_THEME:
            return{
                theme:action.payload,
            }
            default:
                return state
    }
}