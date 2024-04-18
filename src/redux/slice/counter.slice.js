import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counte: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {

        incriments: (state, action) => {
            state.counte += 1
        },
        decriment: (state, action) => {
            state.counte -= 1
        }
    }
})
export const { incriments, decriment } = counterSlice.actions

export default counterSlice.reducer