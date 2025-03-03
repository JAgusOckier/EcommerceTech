'use client'
import React from 'react'
import { useEffect, useState } from "react";
import { getProducts } from "@/services/products";
import { IProduct } from "@/helpers/types";
import { routes } from "@/routes/routes";
import { useRouter } from "next/navigation"
import MiniCard from './MiniCard';

const LastProducts: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const router = useRouter();

    const onClickCard =  (id: number) => () => {
      return router.push(routes.product_detail + '/' + id)
    }

    const fetchData = async () => {
        try {
            const products = (await getProducts()).slice(-5);
            setProducts(products);
        } catch (error) {
            console.warn("error al traer la data", error)
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="m-auto flex justify-center w-5/6 flex-wrap my-4">
            {products.length ? products.map((product) => {
                const { name, image, id } = product;
                return <MiniCard key={product.id} name={name} image={image} 
                onClick = {onClickCard(id)}/>
            }): <span className='text-center'>No hay productos para mostrar</span>}
        </div>
    )
}

export default LastProducts