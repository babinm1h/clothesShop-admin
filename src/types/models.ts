

export interface IProduct {
    categories: string[]
    color: string[]
    createdAt: string
    descr: string
    img: string
    price: number
    size: string[]
    title: string
    updatedAt: number
    _id: string
}


export interface IUser {
    isAdmin: boolean
    email: string
    id: string
    _id?: string
}


export interface ICartProduct {
    _id: string
    product: IProduct
    quan: number
    selectedColor: string
}

export interface IAddress {
    city: string
    country: string
    line1: string
}




export enum OrderStatus {
    pending = "pending",
    delivered = "delivered"
}

export interface IOrder {
    _id: string
    products: ICartProduct[]
    amount: number
    status: OrderStatus
    address: IAddress
}

