import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/models";
import { IProductsState } from "../../types/products";
import { deleteProduct, fetchProducts } from "../actions/products";



const initialState: IProductsState = {
    products: [],
    isLoading: true,
    isDeleting: false
}


const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
            state.isLoading = false
        },
        [fetchProducts.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchProducts.rejected.type]: (state) => {
            state.isLoading = false
        },

        [deleteProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter(p => p._id !== action.payload._id)
            state.isDeleting = false
        },
        [deleteProduct.pending.type]: (state) => {
            state.isDeleting = true
        },
        [deleteProduct.rejected.type]: (state) => {
            state.isDeleting = false
        },
    }
})


export default productsSlice.reducer;