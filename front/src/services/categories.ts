import { ICategory } from '@/helpers/types';
import axios from 'axios';

export const axiosApiBack = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});


export const getCategories = async (): Promise<ICategory[]> => {
    try {
        const categories: ICategory[] = (await axiosApiBack.get("/categories")).data;
        return categories;
    } catch (error) {
        console.warn(error)
        throw new Error('No se pudo obtener las categorias')
    }
}