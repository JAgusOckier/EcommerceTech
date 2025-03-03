
import { IUser } from '@/helpers/types';
import axios from 'axios';

export const axiosApiBack = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});


export const registerUser = async (formValues: Partial<IUser>) => {
    try {
        await axiosApiBack.post('/users/register', formValues);
        return 'REGISTRO_EXITOSO';
    } catch (error) {
        console.warn(error)
        throw new Error ('ERROR_REGISTRO');
    }
} 

export const loginUser = async (loginValues: {email: string, password: string}) => {
    try {
        const res = (await axiosApiBack.post('/users/login', loginValues)).data;
        return res;
    } catch (error) {
        console.warn(error)
        throw new Error ('LOGIN_FALLO');
    }
} 

