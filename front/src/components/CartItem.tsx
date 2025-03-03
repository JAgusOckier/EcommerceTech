interface CartItemProps {

  name: string;
  quantity: number;
  image: string;
  price: number;
  onRemoveClick: () => void
}

const CartItem: React.FC<CartItemProps> = (item) => {
  return (

    <div className="flex items-center justify-between gap-4 text-gray-900 m-1 items-center gap-4 p-4 bg-emerald-200 shadow-md rounded-lg">
      <div className="flex gap-3 items-center">
        <img src={item.image} alt="Imagen product" className="w-16 h-16" />
        <h3 className="text-lg font-semibold">{item.name}</h3>
      </div>
      <div className="flex gap-3 items-center">
        <p className="text-gray-600">Cantidad: {item.quantity}</p>
        <p className="text-gray-800 font-medium">${item.price}</p>
        <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition" onClick={item.onRemoveClick}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
