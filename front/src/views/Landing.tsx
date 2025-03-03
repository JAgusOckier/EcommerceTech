import { routes } from '@/routes/routes'
import React from 'react'

const Landing: React.FC = () => {
      return (
        <div className=" text-white">
          <header className="bg-blue-800 text-white py-8">
            <div className="h-16 mx-auto text-center">
              <h1 className="text-4xl font-bold">Compra Tech</h1>
              <p className="text-lg mt-2">Tu mejor opcion en tecnologia</p>
            </div>
          </header>
          <section className="bg-cover bg-center h-80 flex items-center justify-center p-8">
            <div className="text-center text-white">
              <h2 className="text-5xl font-bold mb-4">Descubre lo ultimo en tecnologia</h2>
                <p className="text-xl mb-6">Compra online rapido y seguro</p>
              <a href={routes.home} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg">Explorar ahora</a>
            </div>
          </section>
    
          <section className="py-8 bg-custom-primary-2">
            <div className="flex items-center flex-col mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Nuestros productos destacados</h2>
              <div className="w-4/5 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-custom-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h4 className="text-xl font-semibold mb-2 text-gray-950">Smartphones</h4>
                  <img src="https://images.samsung.com/is/image/samsung/p6pim/ar/2501/gallery/ar-galaxy-s25-s931-534316-sm-s931blbvaro-thumb-544696142?$492_492_PNG$" alt="Smartphone" className="mx-auto mb-4" />
                  <a href={routes.home} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">Explorar ahora</a>
                </div>
                <div className="bg-custom-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h4 className="text-xl font-semibold mb-2 text-gray-950">Laptops</h4>
                  <img src="https://images.samsung.com/is/image/samsung/p6pim/ar/np960qfg-ka1ar/gallery/ar-galaxy-book3-pro-360-16-inch-np960-np960qfg-ka1ar-thumb-539476330?$492_492_PNG$" alt="Laptop" className="mx-auto mb-4" />
                  <a href={routes.home} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">Explorar ahora</a>
                </div>
                <div className="bg-custom-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h4 className="text-xl font-semibold mb-2 text-gray-950">Auriculares Inalambricos</h4>
                  <img src="https://images.samsung.com/is/image/samsung/p6pim/ar/sm-r630nzaaaro/gallery/ar-galaxy-buds3-pro-r630-sm-r630nzaaaro-thumb-544278515?$492_492_PNG$" alt="Auriculares" className="mx-auto mb-4" />
                  <a href={routes.home} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full">Explorar ahora</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )


}

export default Landing



