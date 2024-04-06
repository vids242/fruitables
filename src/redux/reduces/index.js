import { combineReducers } from "redux";
import { FacilitesReducer } from "./facilites.reduces";
import { productReducer } from "./product.reduces";

export const RootReducer = combineReducers({
    facilites : FacilitesReducer,
    products : productReducer,
})