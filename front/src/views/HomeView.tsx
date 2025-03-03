import LastProducts from '@/components/LastProducts'
import { IProduct } from '@/helpers/types'
import { routes } from '@/routes/routes'
import { getProducts } from '@/services/products'
import Link from 'next/link'
import React from 'react'

const HomeView = async () => {
    let lastProducts: IProduct[] = [];
    try {
        const products = await getProducts();
        lastProducts = products.slice(-5);
    } catch (error) {
        console.warn("Error al obtener los productos:", error);
    }
    return (
        <div>
            <section className="h-[70vh] w-[100vw] flex flex-col items-center justify-center relative">
                <img src="/baner.png" alt="Banner" className="w-full h-full object-fill" />
                <Link href={routes.products} className='absolute mb-4 bottom-0'>
                    <button className=' bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 w-fit'>Explorar mas</button>
                </Link>
                <p className='absolute w-2/6 left-4 top-32 text-left text-[3.5rem] text-pink-500 drop-shadow-lg rounded-md italic'>Lo ultimo y mejor del mercado</p>
                <p className='absolute w-1/4 right-8 top-32 text-right text-[3.5rem] text-pink-500 drop-shadow-lg rounded-md italic'>Calidad Garantizada </p>
            </section>

            <section className='flex items-center justify-center gap-5 m-5'>
                <div className='flex justify-center items-center p-3 bg-custom-primary-2 w-80 h-44 gap-4 rounded-md'>
                    <img src="https://imgs.search.brave.com/JyNQf3RsPWUP6nK_WH4lcLwDHDxC0gbGIQ5NCSuAdI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvbGFwdG9wL2xh/cHRvcF9QTkc1OTA1/LnBuZw" alt="" className="h-40 w-40" />
                    <div className='text-right p-2 h-full w-full flex flex-col justify-between'>
                        <div>
                            <h2 className='text-lg font-bold text-gray-800 mb-1'>Notebooks</h2>
                            <p className='text-sm text-gray-600'>Lo mejor del mercado</p>
                        </div>
                        <Link href={routes.products}>
                            <button className='self-end bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 w-fit'>Ver mas</button>
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center p-3 bg-custom-primary-2 w-80 h-44 gap-4 rounded-md'>
                    <div className='text-left p-2 h-full w-full  flex flex-col justify-between'>
                        <div>
                            <h2 className='text-lg font-bold text-gray-800 mb-1'>Smartphones</h2>
                            <p className='text-sm text-gray-600'>Lo mas nuevo</p>
                        </div>
                        <Link href={routes.products}>
                            <button className='bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-400 w-fit'>Ver más</button>
                        </Link>
                    </div>
                    <img src="https://tiendaonline.movistar.com.ar/media/catalog/product/cache/1d01ed3f1ecf95fcf479279f9ae509ad/s/2/s25-yellow-front.png" alt="" className="h-40 w-40" />
                </div>
            </section>
            <section className='p-4'>
                <h2 className='text-center mb-4'>Categorias Destacadas</h2>
                <div className='flex items-center justify-center gap-8 mb-8'>
                    <Link href={routes.products + '?categoryId=1'}>
                        <img src="/smartphone.jpg" alt="Smartphone"
                            className='w-20 h-20 border-2 border-white rounded-md' />
                    </Link>
                    <Link href={routes.products + '?categoryId=2'}>
                        <img src="/laptop.jpg" alt="Laptop"
                            className='w-20 h-20 border-2 border-white rounded-md' />
                    </Link>
                    <Link href={routes.products + '?categoryId=4'}>
                        <img src="/headphone.jpg" alt="Headphone"
                            className='w-20 h-20 border-2 border-white rounded-md' />
                    </Link>
                </div>
            </section>
            <section className='flex flex-col items-center'>
                <h2>Ultimos productos</h2>
                <div className='border-none w-2/3 mt-2 bg-custom-primary bg-opacity-5 mb-8 rounded-2xl'>
                   {lastProducts ? <LastProducts products={lastProducts} /> :
                    <span className='text-center'>No se encontraron productos</span>}
                </div>
            </section>
        </div>
    )
}

export default HomeView