import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoding: false,
  cart: [],
  error: null

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    
    addToCart: (state, action) => {
      console.log(action);

      const index = state.cart.findIndex((v) => v.pid === action.payload);

      if (index >= 0) {
        state.cart[index].qty++;
      } else {
        state.cart.push({ pid: action.payload, qty: 1 });

      }




    },
    incrementQty: (state, action) => {
      console.log(action);

      const index = state.cart.findIndex((v) => v.pid === action.payload);

      state.cart[index].qty++;
    },
    decrementQty: (state, action) => {
      const index = state.cart.findIndex((v) => v.pid === action.payload);

      if (state.cart[index].qty > 1) {
        state.cart[index].qty--;
      } else {
        console.log("sdjdavdsb");
      }
    },
    deletedata:(state,action)=>{

      const fdata=state.cart.filter((v)=>v.pid !== action.payload);

      state.cart=fdata;
      
    }
  },
});

export const { addToCart, incrementQty, decrementQty,deletedata } = cartSlice.actions;

export default cartSlice.reducer;
