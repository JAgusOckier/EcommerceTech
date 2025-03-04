'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser } from '@/services/auth';
import { toast } from 'react-toastify';
import { routes } from '@/routes/routes';
import { useRouter } from 'next/navigation';
import usePublic from '@/hooks/usePublic';
import Link from 'next/link';
import { IoIosHome } from "react-icons/io";
import { FaEyeSlash, FaEye } from 'react-icons/fa'; 

const Register = () => {
    usePublic()
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            address: '',
            phone: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(50, 'Demasiado largo!')
                .required('Este campo es obligatorio'),
            email: Yup.string()
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Email invalido')
                .required('Este campo es obligatorio'),
            password: Yup.string()
                .min(6, 'La contraseña es muy corta!')
                .matches(/[A-Z]/, 'Debe contener al menos una letra mayuscula')
                .matches(/[a-z]/, 'Debe contener al menos una letra minuscula')
                .matches(/[0-9]/, 'Debe contener al menos un numero')
                .matches(/[\W_]/, 'Debe contener al menos un caracter especial')
                .required('Este campo es obligatorio'),
            address: Yup.string()
                .max(50, 'Demasiado largo!')
                .required('Este campo es obligatorio'),
            phone: Yup.string()
                .matches(/^\+?[0-9\s\-()]{8,17}$/, 'Numero de telefono invalido')
                .required('Este campo es obligatorio'),
        }),
        onSubmit: async values => {
            try {
                await registerUser(values)
                toast.success("Registro exitoso");
                setTimeout(() => {
                    router.push(routes.login);
                }, 3000)
            } catch (error: any) {
                console.warn(error);
                if (error.message === 'User already exists') {
                    toast.error("El email ya se encuentra registrado")
                    return;
                }
                toast.error("El Registro no pudo completarse")
            }
        },
    });
    return (
        <div>
            <nav className="bg-gray-900 text-white w-full py-4">
                <div className="container mx-auto flex justify-center space-x-6">
                    <Link href={routes.home} className="text-white text-lg font-bold flex items-center gap-1">
                        <IoIosHome className='size-9' />
                    </Link>
                </div>
            </nav>


            <div className='flex h-min-screen h-fit w-full'>
                <div className='w-3/5 bg-custom-primary-2 flex items-center justify-center'>
                    <img src="https://cdn.qwenlm.ai/output/51c48882-a043-4c08-9354-bed3deeaa3d9/t2i/9faa6d3f-8e3b-4c9f-9fd8-65e06bac8097/0e298ad9-0519-41fe-8be5-57643070543e.png" alt="foto login"
                        className='w-[32rem] h-[32rem] rounded-full' />
                </div>
                <div className='w-2/5 bg-custom-primary flex items-center justify-center flex-col'>
                    <form
                        onSubmit={formik.handleSubmit}
                        className="w-2/3 mx-auto mt-12 p-7 bg-gradient-to-b from-custom-primary-2 to-custom-primary-3 rounded-2xl shadow-md flex flex-col gap-4"
                    >
                        <label htmlFor="name" className="font-bold text-lg text-black mb-1">Nombre Completo:</label>
                        <input
                            id="name"
                            type="text"
                            {...formik.getFieldProps('name')}
                            className="p-2 border border-gray-300 rounded-md text-black text-sm transition duration-300 focus:border-amber-300 focus:outline-none focus:shadow-md"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className="text-red-600 font-bold text-sm mt-1">{formik.errors.name}</div>
                        )}

                        <label htmlFor="email" className="font-bold text-lg text-black mb-1">Correo Electronico:</label>
                        <input
                            id="email"
                            type="email"
                            {...formik.getFieldProps('email')}
                            className="p-2 border border-gray-300 rounded-md text-black text-sm transition duration-300 focus:border-amber-300 focus:outline-none focus:shadow-md"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-600 font-bold text-sm mt-1">{formik.errors.email}</div>
                        )}

                        <label htmlFor="password" className="font-bold text-lg text-black mb-1">Contraseña:</label>
                        <div className='relative w-full'>
                            <input
                                id="password"
                                type={!showPassword ? "password" : "text"}
                                {...formik.getFieldProps('password')}
                                className="p-2 border border-gray-300 rounded-md text-black text-sm transition duration-300 focus:border-amber-300 focus:outline-none focus:shadow-md w-full"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                            </button>
                        </div>

                        {formik.touched.password && formik.errors.password && (
                            <div className="text-red-600 font-bold text-sm mt-1">{formik.errors.password}</div>
                        )}


                        <label htmlFor="address" className="font-bold text-lg text-black mb-1">Direccion:</label>
                        <input
                            id="address"
                            type="text"
                            {...formik.getFieldProps('address')}
                            className="p-2 border border-gray-300 rounded-md text-black text-sm transition duration-300 focus:border-amber-300 focus:outline-none focus:shadow-md"
                        />
                        {formik.touched.address && formik.errors.address && (
                            <div className="text-red-600 font-bold text-sm mt-1">{formik.errors.address}</div>
                        )}


                        <label htmlFor="phone" className="font-bold text-lg text-black mb-1">Numero Telefono:</label>
                        <input
                            id="phone"
                            type="text"
                            {...formik.getFieldProps('phone')}
                            className="p-2 border border-gray-300 rounded-md text-black text-sm transition duration-300 focus:border-amber-300 focus:outline-none focus:shadow-md"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <div className="text-red-600 font-bold text-sm mt-1">{formik.errors.phone}</div>
                        )}


                        <button
                            type="submit"
                            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 rounded-md cursor-pointer transition-all duration-300 mt-3"
                        >
                            Enviar
                        </button>
                    </form>
                    <div className='flex items-center flex-col gap-1 my-2'>
                        <span className='text-gray-900 text-lg'>¿Ya tenes cuenta?</span>
                        <Link href={routes.login} className='text-blue-600 text-base'>Inicia sesion Aqui</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register