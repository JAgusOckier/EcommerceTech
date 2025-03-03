'use client'
import { IProduct } from "@/helpers/types";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CartContextType {
    total: number,
    cart: IProduct[] | null,
    addToCart: (product: IProduct, quantity: number) => void,
    removeFromCart: (id: number) => void,
    resetCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined) //ver si le puedo sacar el indefinido

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartContextType['cart']>()
    const [total, setTotal] = useState<CartContextType['total']>(0)

    const addToCart = (product: IProduct) => {
        const productRepeat = cart?.some((p) => product.id === p.id)
        if(!productRepeat) {
            setCart((statePrev) => {
                return [...statePrev || [], product]
            })
            setTotal((prevTotal) => prevTotal + 1)
           
        } else {
           throw new Error("No se pudo añadir el producto")
        }
    }

    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart?.filter((product) => product.id !== id));
        setTotal((prevTotal) => {
            if (prevTotal === 0) return 0;
            return prevTotal - 1;
        });
    };
    const resetCart = () => {
        setTimeout(() => {
            setCart([])
            setTotal(0)
        }, 3000)
    }

    useEffect(() => {
        if (!cart) {
            return;
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("total", total?.toString() || "0")

    }, [cart, total])

    useEffect(() => {
        const localCart = localStorage.getItem("cart")
        const localTotal = localStorage.getItem("total")
        if (!localCart) {
            return setCart([])
        }
        setCart(JSON.parse(localCart))
        setTotal(Number(localTotal))
    }, [])

    return <CartContext.Provider value={{ cart: cart || [], total: total || 0, addToCart, removeFromCart, resetCart }}>
        {children}
    </CartContext.Provider>
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider")
    }
    return context;
}