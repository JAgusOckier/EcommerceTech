'use client'
import React from 'react'
import { IProduct } from "@/helpers/types";
import Card from "@/components/Card";
import { routes } from "@/routes/routes";
import { useRouter } from "next/navigation"

const ProductsContainer: React.FC<{productos: IProduct[]}> = ({productos}) => {
    const router = useRouter();

    const onClickCard =  (id: number) => () => {
      return router.push(routes.product_detail + '/' + id)
    }

    return (
        <div className="m-auto flex justify-center gap-2 w-4/5 flex-wrap mt-4">
            {productos.length ? productos.map((product) => {
                return <Card key={product.id} product={product}
                onClick = {onClickCard(product.id)}/>
            }): <span className='text-center'>No se encontraron productos</span>}
        </div>
    )
}

export default ProductsContainer