import { IOrder } from "./models";



export interface IOrderState {
    orders: IOrder[]
    isLoading: boolean
    isChanging: boolean
}


export enum OrdersActionTypes {
    FETCH_ALL = 'orders/FETCH_ALL',
    DELETE = 'orders/DELETE',
    CHANGE_STATUS = 'orders/CHANGE_STATUS',
}