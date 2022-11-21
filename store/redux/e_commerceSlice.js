import { createSlice } from "@reduxjs/toolkit";

export const e_commerceSlice = createSlice({
    name: 'e_commerce',
    initialState: {
        favouriteProducts: [
            {productNumber: 2, title: 'Mens Casual Premium Slim Fit T-Shirts ', source: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: 22.3, rating: 4.1, size: "XS", source: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", title: "Mens Casual Premium Slim Fit T-Shirts"},
            {productNumber: 4, title: 'Mens Casual Premium Slim Fit T-Shirts ', source: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', price: 22.3, rating: 4.1, size: "XS", source: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", title: "Mens Casual Premium Slim Fit T-Shirts"},
        ],
        carts: [],
    },
    reducers: {
        addToFavourites: (state, action) => {
            state.favouriteProducts = action.payload;
        },
        removeFromFavourites: (state, action) => {
            state.favouriteProducts = action.payload;
        },
        addToCart: (state, action) => {
            state.carts = action.payload;
        },
        setCart: (state, action) => {
            state.carts = action.payload;
        }
    }
});

export const { addToFavourites, removeFromFavourites, addToCart, setCart } = e_commerceSlice.actions;
export default e_commerceSlice.reducer;