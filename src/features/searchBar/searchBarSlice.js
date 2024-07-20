import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : "",
}

export const searchBarSlice = createSlice({
    name : "searchBar",
    initialState,
    reducers: {
        setValue : (state,action) => {
            state.value = action.payload
        },
    },
})

export const { setValue} = searchBarSlice.actions

export default searchBarSlice.reducer