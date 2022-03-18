import { IUser } from "../types/models";
import { $authInstance } from "./instance";



export class UsersService {

    static async fetchAll(): Promise<IUser[]> {
        const { data } = await $authInstance.get<IUser[]>(`/users/`)
        return data
    }


    static async delete(id: string): Promise<IUser> {
        const { data } = await $authInstance.delete<IUser>(`/users/${id}`)
        return data
    }

}