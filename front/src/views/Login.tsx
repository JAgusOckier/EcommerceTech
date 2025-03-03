'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '@/services/auth';
import { toast } from 'react-toastify';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { routes } from '@/routes/routes';
import usePublic from '@/hooks/usePublic';
import Link from 'next/link';
import { IoIosHome } from "react-icons/io";
import { FaEyeSlash, FaEye } from 'react-icons/fa';

const Login = () => {
    usePublic()
    const { saveUserData } = useAuth();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: async values => {
            try {
                const res = await loginUser(values)
                saveUserData(res);
                toast.success("Login exitoso");
                setTimeout(() => {
                    router.push(routes.home);
                }, 3000)
            } catch (error: any) {
                if (error.message === 'User does not exist') {
                    toast.error("El email no se encuentra registrado")
                    return;
                }
                if (error.message === 'Invalid password') {
                    toast.error("Contraseña incorrecta")
                    return;
                }
                toast.error("Credenciales erroneas")
                console.warn(error);
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
            <div className='flex h-screen w-full'>
                <div className='w-3/5 bg-custom-primary-2 flex items-center justify-center'>
                    <img src="https://cdn.qwenlm.ai/output/51c48882-a043-4c08-9354-bed3deeaa3d9/t2i/9faa6d3f-8e3b-4c9f-9fd8-65e06bac8097/0e298ad9-0519-41fe-8be5-57643070543e.png" alt="foto login"
                        className='w-[32rem] h-[32rem] rounded-full' />
                </div>
                <div className='w-2/5 bg-custom-primary flex items-center flex-col justify-center'>
                    <form onSubmit={formik.handleSubmit} className='w-2/4 mx-auto mt-12 p-7 bg-gradient-to-b from-custom-primary-2 to-custom-primary-3  rounded-2xl shadow-md flex flex-col gap-4'>
                        <label htmlFor="email" className='font-bold text-lg text-black mb-1'>Correo Electronico: </label>
                        <input className='p-2 border border-gray-300 rounded-md text-black text-sm transition duration-300 focus:border-amber-300 focus:outline-none focus:shadow-md' id="email" type="email" {...formik.getFieldProps('email')} />
                        {formik.touched.email && formik.errors.email ? (
                            <div className='text-red-600 font-bold text-sm mt-1'>{formik.errors.email}</div>
                        ) : null}

                        <label className='font-bold text-lg text-black mb-1' htmlFor="password">Contraseña</label>
                        <div className='relative w-full'>
                            <input className='p-2 border border-gray-300 rounded-md text-black text-sm transition duration-300 focus:border-amber-300 focus:outline-none focus:shadow-md w-full' id="password"
                                type={!showPassword ? "password" : "text"} {...formik.getFieldProps('password')} />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                            </button>
                        </div>

                        {formik.touched.password && formik.errors.password ? (
                            <div className='text-red-600 font-bold text-sm mt-1'>{formik.errors.password}</div>
                        ) : null}

                        <button type="submit" className='bg-slate-400 hover:bg-slat e-500  text-white font-bold py-3 rounded-md cursor-pointer transition-all duration-300 mt-3'>Enviar</button>
                    </form>
                    <div className='flex items-center flex-col gap-1 my-2'>
                        <span className='text-gray-900 text-lg'>¿No estas registrado?</span>
                        <Link href={routes.register} className='text-blue-600 text-base'>Registrate Aqui</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login