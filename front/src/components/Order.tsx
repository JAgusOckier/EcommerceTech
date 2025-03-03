import { IOrder } from "@/helpers/types"

const Order: React.FC<Partial<IOrder>> = ({ id, status, date, products }) => {
     const totalOrder = products?.reduce((sum, producto) => sum + producto.price, 0);
    return (
        <div className="w-96 h-fit bg-custom-secondary rounded-lg p-4 border border-gray-300 m-4">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
                <h3 className="text-lg font-bold text-gray-800">Orden #{id}</h3>
                <span className={status ==='approved' ? `text-green-600`: `text-red-600`}>{status?.toUpperCase()}</span>
            </div>
            <span className="text-gray-600 text-sm">Fecha: {new Date(date!).toLocaleDateString()}</span>

            <div className="mt-3">
                <h4 className="text-md font-semibold text-gray-700 mb-2">Productos:</h4>
                <ul className="space-y-2">
                    {products?.map((product) => (
                       <div key={product.id} className="flex justify-between text-gray-900 text-sm border-b border-gray-900 pb-1">
                       <span>{product.name}</span>
                       <span className="font-semibold">${product.price}</span>
                       </div> 
                    ))}
                </ul>
            </div>

            <div className="mt-3 text-right font-bold text-lg text-gray-900">
                Total: ${totalOrder}
            </div>
        </div>
    )
}

export default Order;
