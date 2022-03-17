import { $authInstance } from "./instance"; import { IProduct } from "../types/models";



export class ProductsService {

    static async createProduct(formData: FormData): Promise<IProduct> {
        const { data } = await $authInstance.post<IProduct>(`/products/`, formData)
        return data
    }

    static async fetchAll(): Promise<IProduct[]> {
        const { data } = await $authInstance.get<IProduct[]>(`/products/`)
        return data
    }


    static async delete(id: string): Promise<IProduct> {
        const { data } = await $authInstance.delete<IProduct>(`/products/${id}`)
        return data
    }
}