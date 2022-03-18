import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrdersService } from "../../API/ordersService";
import { OrderStatus } from "../../types/models";
import { OrdersActionTypes } from "../../types/orders";



export const fetchOrders = createAsyncThunk(OrdersActionTypes.FETCH_ALL, async (_, thunk) => {
    try {
        const data = await OrdersService.fetchAll()
        return data
    } catch (err) {
        return thunk.rejectWithValue("Fetching orders error")
    }
})


export const changeOrderStatus = createAsyncThunk(OrdersActionTypes.CHANGE_STATUS,
    async (payload: { id: string, status: OrderStatus }, thunk) => {
        try {
            const data = await OrdersService.changeStatus(payload.id, payload.status)
            return data
        } catch (err) {
            return thunk.rejectWithValue("Fetching orders error")
        }
    })

