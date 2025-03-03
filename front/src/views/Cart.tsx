'use client'
import usePrivate from '@/hooks/usePrivate'
import { DtoOrder, postOrder } from '@/services/orders'
import CartItem from '@/components/CartItem'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'
import { routes } from '@/routes/routes'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

const Cart = () => {
  usePrivate();
  const { cart, removeFromCart, total, resetCart } = useCart();
  const { token, user } = useAuth();

  const router = useRouter()

  const onRemoveClick = (id: number) => () => {
    return removeFromCart(id)
  }

  const onBuyClick = async () => {
    try {

      if (!user || !cart) return;
      const data: DtoOrder = {
        userId: user.id,
        products: cart.map((product) => product.id)
      }
      await postOrder(data, token || "")
      toast.success("Orden creada exitosamente")
      resetCart()
      setTimeout(() => {
        router.push(routes.dashboard)
      }, 3000)
    } catch (error) {
      toast.error("No se pudo registrar la orden")
      console.warn(error)
    }
  }

  const totalPagar = cart?.reduce((sum, producto) => sum + producto.price, 0);

  return (
    <div className='w-screen h-screen flex'>
      <section className='w-1/2 text-center bg-custom-primary-2 flex flex-col gap-2 p-2'>
        {cart?.length ? cart.map((item, idx) => {
          return <CartItem key={idx} {...item} quantity={1} onRemoveClick={onRemoveClick(item.id)} />
        })
          : <div className='flex flex-col gap-5 items-center'>
              <h2>No hay productos en el carrito</h2>
              <img src="/sadImage.png" alt="imagen triste" 
              className='w-72 h-72'/>
            </div>}
      </section>
      <section className='w-1/2 flex flex-col items-center justify-start bg-green-100 flex flex-col gap-2 p-2'>
        <img src="https://imgs.search.brave.com/UPo8bJgxL4UddJZsjDXm4k6hKpEl8-arBlyQqJvo1Qo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8x/Mi8xNC8wOC8zNi9z/aG9wcGluZy00Njk0/NDcwXzY0MC5qcGc" alt="foto decorativa"
          className='w-96 h-96 rounded-full' />
        <div className='flex flex-col gap-1 text-gray-900'>
          <span>Total productos: {total}</span>
          <span>Total a pagar: ${totalPagar}</span>
        </div>
        <button disabled={total === 0} onClick={onBuyClick} className="bg-custom-primary-2 hover:bg-custom-primary-3 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50">Finalizar compra</button>
      </section>
    </div>
  )
}

export default Cart