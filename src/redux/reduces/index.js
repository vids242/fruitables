import { combineReducers } from "redux";
import { FacilitesReducer } from "./facilites.reduces";
import { productReducer } from "./product.reduces";
import { shopReducer } from "./shop.reduces";
import { reviewsReducer } from "./review.reducer";
// import  cartReducer  from "./cart.reduces";
import  counterSlice  from "../slice/counter.slice";
import cartSlice from "../slice/cart.slice";

export const RootReducer = combineReducers({
    facilites : FacilitesReducer,
    products : productReducer,
    shops : shopReducer,
    review : reviewsReducer,
    Carts: cartSlice,
    Counte: counterSlice,
    // coupon:couponSlice
})