import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import ordersSlice from "./slices/ordersSlice";
import productsSlice from "./slices/productsSlice";
import usersSlice from "./slices/usersSlice";



const rootReducer = combineReducers({
    auth: authSlice,
    products: productsSlice,
    users: usersSlice,
    orders: ordersSlice
})


export const store = configureStore({
    reducer: rootReducer
})


export type RootState = ReturnType<typeof rootReducer>