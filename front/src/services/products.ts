
import { IProduct } from '@/helpers/types';
import axios from 'axios';

export const axiosApiBack = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});


export const getProducts = async (): Promise<IProduct[]> => {
    try {
        const products: IProduct[] = (await axiosApiBack.get("/products")).data;
        return products;
    } catch (error) {
        console.warn(error)
        throw new Error('No se pudo obtener los productos')
    }
}
export const getProductById = async (id: string): Promise<IProduct> => {
    try {
        const products: IProduct = (await axiosApiBack.get(`/products/${id}`)).data;
        return products;
    } catch (error) {
        console.warn(error)
        throw new Error('No se pudo obtener los productos')
    }
}



