import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductsService } from "../../API/productsService";
import { ProductsActionTypes } from "../../types/products";



export const fetchProducts = createAsyncThunk(ProductsActionTypes.FETCH_ALL,
    async (_, thunk) => {
        try {
            const data = await ProductsService.fetchAll()
            return data
        } catch (err) {
            return thunk.rejectWithValue("Fetch products error")
        }
    })


export const deleteProduct = createAsyncThunk(ProductsActionTypes.DELETE,
    async (id: string, thunk) => {
        try {
            const data = await ProductsService.delete(id)
            return data
        } catch (err) {
            return thunk.rejectWithValue("Fetch products error")
        }
    })