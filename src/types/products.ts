import { IProduct } from "./models";


export interface IProductsState {
    products: IProduct[]
    isLoading: boolean
    isDeleting: boolean
}


export enum ProductsActionTypes {
    DELETE = "products/DELETE",
    FETCH_ALL = "products/FETCH_ALL",
}