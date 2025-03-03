'use client'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { routes } from '@/routes/routes'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'
import { IoCart } from 'react-icons/io5'
import { CgSpinner } from "react-icons/cg"

const UserAuth = () => {
    const { isAuth, resetUserData } = useAuth()
    const { total, resetCart } = useCart();
    const router = useRouter()

    const resetData = () => {
        resetUserData();
        resetCart();
        setTimeout(()=> {
            router.push(routes.home)
        },1000)
    }

    if (isAuth === null) {
        return (<div className="animate-spin absolute right-10">
            <CgSpinner className="size-6"/>
        </div>)
    }

    if (isAuth) {
        return (
            <div className='gap-8 flex'>
                <div className='text-white flex items-center '>
                    <Link href={routes.cart} className="text-white hover:text-blue-200 flex items-center ">
                        <IoCart className="size-6" />
                        <span>: {total}</span>
                    </Link>
                </div>
                <Link href={routes.dashboard} className="text-white hover:text-blue-200 flex items-center gap-1" >
                    <FaUser className="size-6" />
                </Link>
                    <button onClick={resetData} className="text-red-200 hover:text-red-400 flex items-center gap-1  ">
                        <IoIosLogOut className="size-6" />
                    </button>
            </div>
        )
    }
    return (
        <div className='gap-6 flex absolute right-10'>
            <Link href={routes.login} className="text-white hover:text-blue-200 flex items-center" >Login</Link>
            <Link href={routes.register} className="text-white hover:text-blue-200 flex items-center" >Register</Link>
        </div>
    )

}

export default UserAuth