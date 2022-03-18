import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "../../types/models";
import { IOrderState } from "../../types/orders";
import { changeOrderStatus, fetchOrders } from "../actions/orders";


const initialState: IOrderState = {
    isChanging: false,
    isLoading: true,
    orders: []
}


const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchOrders.fulfilled.type]: (state, action: PayloadAction<IOrder[]>) => {
            state.orders = action.payload
            state.isLoading = false
        },
        [fetchOrders.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchOrders.rejected.type]: (state) => {
            state.isLoading = false
        },


        [changeOrderStatus.fulfilled.type]: (state, action: PayloadAction<IOrder>) => {
            const order = state.orders.find(p => p._id === action.payload._id)
            if (order) {
                order.status = action.payload.status
            }
            state.isChanging = false
        },
        [changeOrderStatus.pending.type]: (state) => {
            state.isChanging = true
        },
        [changeOrderStatus.rejected.type]: (state) => {
            state.isChanging = false
        },
    }
})


export default ordersSlice.reducer