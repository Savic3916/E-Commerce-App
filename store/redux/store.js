import { configureStore } from "@reduxjs/toolkit";
import e_commerceReducer from './e_commerceSlice'

export const store = configureStore({
    reducer: {
        e_commerce: e_commerceReducer,
    },
})