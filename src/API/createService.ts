import { $authInstance } from "./instance";
import { IProduct } from "../types/models";



export class CreateService {

    static async createProduct(formData: FormData): Promise<IProduct> {
        const { data } = await $authInstance.post<IProduct>(`/products/`, formData)
        return data
    }


}