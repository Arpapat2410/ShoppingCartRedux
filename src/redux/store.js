import { configureStore } from "@reduxjs/toolkit"
import productReducer from "./products/productReducer"
import cartReducer from "./carts/cartReducers"
import pagePeducer from "./pages/pagePeducer"

export const store = configureStore({
    reducer: {
        products : productReducer,
        carts : cartReducer,
        pages : pagePeducer
    },
    devTools : true ,
})