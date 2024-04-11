import { combineReducers } from "redux";
import { FacilitesReducer } from "./facilites.reduces";
import { productReducer } from "./product.reduces";
import { shopReducer } from "./shop.reduces";
import { ReviewReducer } from "./review.reduces";

export const RootReducer = combineReducers({
    facilites : FacilitesReducer,
    products : productReducer,
    shops : shopReducer,
    Review : ReviewReducer
})