import { IUser } from "./models";



export interface IAuthState {
    isAuth: boolean
    user: IUser | null
    isLoading: boolean
    error: string
}


export enum AuthActionTypes {
    LOGIN = "auth/login",
    CHECK = "auth/check"
}