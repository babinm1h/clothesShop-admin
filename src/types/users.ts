import { IUser } from "./models";


export interface IUserState {
    users: IUser[]
    isLoading: boolean
    isDeleting: boolean
}


export enum UsersActionTypes {
    FETCH_ALL = "users/FETCH_ALL",
    DELETE = "users/DELETE",
}