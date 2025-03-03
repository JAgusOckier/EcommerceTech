'use client'
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { IProduct } from "@/helpers/types";
import { routes } from "@/routes/routes";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


const ButtonAddCart: React.FC<{ product: IProduct }> = ({ product }) => {
    const { isAuth } = useAuth();
    const router = useRouter()
    const { addToCart } = useCart();

    const onCartClick = (product: IProduct) => () => {
        try {
            addToCart({...product}, 1)
            toast.success("Producto añadido a carrito")
        } catch (error) {
            console.warn(error)
            toast.info("Producto ya añadido, no se puede agregar de nuevo")
        }
    }
    const redirectLogin = () => {
        toast.info("Debes iniciar sesion para comprar");
        router.push(routes.login);
    }

    return (
        <div>
            {isAuth ? <button className="text-black bg-gray-300 hover:bg-gray-400 p-2 border-none rounded-3xl  active:scale-95
      transition-all duration-300" onClick={onCartClick(product)}>Agregar al carrito </button> :
                <button className="text-black bg-gray-300 hover:bg-gray-400 p-2 border-none rounded-3xl  active:scale-95
      transition-all duration-300" onClick={redirectLogin}>Comprar</button>
            }
        </div>
    )
}

export default ButtonAddCart