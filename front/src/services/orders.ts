
import { IOrder } from '@/helpers/types';
import axios from 'axios';

export const axiosApiBack = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});

export interface DtoOrder {
    userId: number,
    products: number[]
}

export const postOrder = async (orderData: DtoOrder, token: string): Promise<IOrder> => {
    try {
        const res: IOrder = await axiosApiBack.post("/orders", orderData, {
            headers: {
                authorization: token
            }
        });

        return res;
    } catch (error) {
        console.warn(error)
        throw new Error('No se pudo efectuar la compra')
    }
}

export const getOrders = async (token: string) => {
    try {
        const res: IOrder[] = (await axiosApiBack.get("users/orders",{
            headers: {
                authorization: token
            }
        })).data
        return res;
    } catch (error) {
        console.warn(error)
        throw new Error('No se pudo obtener las ordenes')
    }
}


