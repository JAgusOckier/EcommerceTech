'use client'
import { IProduct } from '@/helpers/types';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import ProductsContainer from './ProductsContainer';

const AllProducts: React.FC<{ products: IProduct[] }> = ({ products }) => {
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products)
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("categoryId")

    useEffect(() => {
        const currentCategoryId = Number(categoryId)
        if (!categoryId) {
            setFilteredProducts(products);
            return;
        };
        setFilteredProducts(products.filter((product) => product.categoryId === currentCategoryId))
    }, [categoryId])

    return (
        <div>
            <ProductsContainer productos={filteredProducts} />
        </div>
    )
}

export default AllProducts

