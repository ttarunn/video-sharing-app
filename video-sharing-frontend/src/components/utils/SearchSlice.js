import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name:"search",
    initialState: {
        state: false
    },
    reducers: {
        changeState: (state, action) => {
            state.state = action.payload
        }
    }
});


export const { changeState} = searchSlice.actions

export default searchSlice.reducer;