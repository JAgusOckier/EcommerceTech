'use client'

import { ICategory } from '@/helpers/types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const CategoryFilter: React.FC<{categories: ICategory[]}> = ({categories}) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const categoryId = searchParams.get("categoryId")
    const [currentCategory, setCurrentCategory] = useState<number | null>(Number(categoryId ? Number(categoryId): null))
    
    const generateUrl = (pathname: string, query: Record<string, string | boolean | number>) =>{
        const url = new URL(pathname, window.location.origin);
        Object.keys(query).forEach((key)=>{
            url.searchParams.set(key, String(query[key]))
        })
        return url.toString();
    }

    const setCategory = (id: number) => {
        setCurrentCategory(id)
    }

    const resetFilter = () => {
        return  router.replace(generateUrl(pathname, {}))
    }

    useEffect(()=>{
        if (currentCategory) {
            router.replace(generateUrl(pathname, {categoryId: currentCategory}))
        }
    },[currentCategory])
   
    return (
        <div className='flex gap-3 items-center my-2 justify-center'>
            {categories.map((category) => {
                return (<button className="p-2 text-gray-900 bg-blue-400 rounded-full hover:bg-blue-600 transition-all" 
                    key={category.id} onClick={()=>setCategory(category.id)}>{category.name}</button>)
            })}
            <button className="p-2 bg-red-400 rounded-full text-gray-900 hover:bg-red-500 transition-all" 
            onClick={resetFilter}>Limpiar Filtros</button>
        </div>
    )
}

export default CategoryFilter