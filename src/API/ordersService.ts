import { IOrder, OrderStatus } from "../types/models";
import { $authInstance } from "./instance";



export class OrdersService {

    static async fetchAll(): Promise<IOrder[]> {
        const { data } = await $authInstance.get<IOrder[]>(`/order/admin`)
        return data
    }

    static async delete(id: string): Promise<IOrder> {
        const { data } = await $authInstance.delete<IOrder>(`/order/${id}`)
        return data
    }


    static async changeStatus(id: string, status: OrderStatus): Promise<IOrder> {
        const { data } = await $authInstance.put<IOrder>(`/order/${id}`, { status })
        return data
    }
}