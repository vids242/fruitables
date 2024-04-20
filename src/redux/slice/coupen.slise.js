
// import { createSlice } from "@reduxjs/toolkit";
// // import { BASE_URL } from "../../utils/baseURL";
// import axios from "axios";
// import { baseURL } from "../../utils/baseURL";

// const initialState = {
//   isLoading: false,
//   coupon: [],
//   error: null,
// };

// const couponSlice = createSlice({
//   name: "coupon",
//   initialState,
//   reducers: {
//     getCoupon: async (state) => {
//       try {
//         await axios
//           .get(baseURL + "coupon")
//           .then((response) => response.data)
//           .catch((error) => console.log(error));
//       } catch (error) {}
//     },
//     addCoupon: async (state, action) => {
//       try {
//         await axios
//           .post(baseURL + "coupon", action.payload)
//           .then((response) => {
//             state.coupon.concat(response.data);
//           })
//           .catch((error) => console.log(error));
//       } catch (error) {}
//     },
//     editCoupon: (state, action) => {
      
//     },

//     deleteCoupon: (state, action) => {
      
//     },
//   },
// });

// export const { getCoupon, addCoupon, editCoupon, deleteCoupon } = couponSlice.actions;
// export default couponSlice.reducer;