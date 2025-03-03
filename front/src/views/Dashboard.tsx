'use client'
import usePrivate from '@/hooks/usePrivate';
import { getOrders } from '@/services/orders';
import Order from '@/components/Order';
import { useAuth } from '@/context/AuthContext'
import { IOrder } from '@/helpers/types';
import React, { useEffect, useState } from 'react'


const Dashboard = () => {
    usePrivate();
    const { user, token } = useAuth();
    const [orders, setOrders] = useState<IOrder[]>([]);

    const fetchOrders = async () => {
        if (!token) return;
        const orders = await getOrders(token)
        setOrders(orders)
    }

    useEffect(() => {
        fetchOrders();
    }, [])


    return (
        <div className='w-full flex gap-3 mb-4'>
            <div className="w-1/4 h-fit flex flex-col gap-3 p-6 bg-custom-primary-2 rounded-lg m-4">
                <h2 className="text-xl font-bold text-gray-800 border-b border-gray-900 pb-2">Datos Personales:</h2>
                <span className="text-gray-700 font-semibold">Nombre: <span className="font-normal">{user?.name}</span></span>
                <span className="text-gray-700 font-semibold">Email: <span className="font-normal">{user?.email}</span></span>
                <span className="text-gray-700 font-semibold">Direccion: <span className="font-normal">{user?.address}</span></span>
                <span className="text-gray-700 font-semibold">Telefono: <span className="font-normal">{user?.phone}</span></span>
            </div>
            <div className='w-3/4 flex flex-col gap-1 items-center'>
                <h2 className='text-xl font-bold text-white pb-2 mt-4'>Historial de ordenes de compra</h2>
                <div className='grid grid-cols-2 gap-2 justify-evenly'>
                    {orders.length ? orders.map((order) => (
                        <Order key={order.id} {...order} />
                    )) : <span className='text-center'>No se han realizado ordenes</span>}
                </div>
            </div>

        </div >
    )
}

export default Dashboard