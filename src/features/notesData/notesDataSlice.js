import {createSlice} from "@reduxjs/toolkit"
import searchBarSlice from "../searchBar/searchBarSlice"

const initialState = {
    value : [],
}

export const notesDataSlice = createSlice({
    name : "notesData",
    initialState,
    reducers: {
        setData : (state,action) => {
            // state.value.push(action.payload) 
            console.log(state)
            state.value = action.payload
        },
    },
})

export const {setData} = notesDataSlice.actions

export default notesDataSlice.reducer