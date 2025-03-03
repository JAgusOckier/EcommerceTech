enum eRole {
    ADMIN = "admin",
    USER = "user"
}

export interface IProduct {
    id: number,
    name: string,
    description: string,
    price: number,
    stock: number,
    image: string,
    categoryId: number
}

export interface IOrder {
    id: number,
    status: string,
    date: Date,
    products: IProduct[]
    user: IUser,
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    address: string,
    phone: string,
    role: eRole,
    orders: IOrder[]
}

export interface ICategory {
    id: number,
    name: string,
    products: IProduct[]
}