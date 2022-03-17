import { IUser } from "../types/models";
import jwt_decode from "jwt-decode"
import { $authInstance, $instance } from "./instance";


export class AuthService {

    static async login(email: string, password: string): Promise<IUser> {
        const { data } = await $instance.post<string>("/auth/login", { email, password })
        const user = jwt_decode<IUser>(data)
        if (user.isAdmin === true) {
            localStorage.setItem("token", data)
        }
        return user
    }


    static async check(): Promise<IUser> {
        const { data } = await $authInstance.get<string>("/auth/check")
        localStorage.setItem("token", data)
        return jwt_decode<IUser>(data)
    }
}