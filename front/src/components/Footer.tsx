import { routes } from "@/routes/routes";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-4 w-full">
            <div className="container mx-auto px-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-2 mt-0">
                <div>
                    <h3 className="text-lg font-bold mb-4">Contacto</h3>
                    <p className="text-sm">Dirección: Rio Negro, Argentina</p>
                    <p className="text-sm">Teléfono: +54 154 567 189</p>
                    <p className="text-sm">Email: agus@gmail.com</p>
                </div>

                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold">Enlaces Rapidos</h3>
                    <Link href={routes.home} className="text-sm hover:text-gray-400">Inicio</Link>
                    <Link href={routes.products} className="text-sm hover:text-gray-400">Productos</Link>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-sm text-gray-400">&copy; 2025 Mi Sitio. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}