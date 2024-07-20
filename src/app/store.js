import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "../features/searchBar/searchBarSlice"
import notesDataReducer from "../features/notesData/notesDataSlice"

export const store = configureStore({
    reducer : {
        searchBar: searchBarReducer,
        notesData: notesDataReducer
    },
})