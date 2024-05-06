import { combineReducers } from "redux";
import { FacilitesReducer } from "./facilites.reduces";
import { productReducer } from "./product.reduces";
import { shopReducer } from "./shop.reduces";
import { ReviewReducer } from "./review.reduces";
import counterSlice from "../slice/counter.slice";
import cartSlice from "../slice/cart.slice";
import coupanSlice from "../slice/coupan.slice";

export const RootReducer = combineReducers({
    facilites : FacilitesReducer,
    products : productReducer,
    shops : shopReducer,
    Review : ReviewReducer,
    counter : counterSlice,
    cart : cartSlice,
    coupon : coupanSlice
})