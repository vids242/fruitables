import { combineReducers } from "redux";
import { FacilitesReducer } from "./facilites.reduces";
import { productReducer } from "./product.reduces";
import { shopReducer } from "./shop.reduces";
import { reviewsReducer } from "./shopdetails.reduces";

export const RootReducer = combineReducers({
    facilites : FacilitesReducer,
    products : productReducer,
    shops : shopReducer,
    review : reviewsReducer
})