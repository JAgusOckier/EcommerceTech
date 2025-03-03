import ButtonAddCart from '@/components/ButtonAddCart';
import { IProduct } from '@/helpers/types';

const ProductDetail: React.FC<IProduct> = (product) => {
  return (
    <div className='border-none m-auto rounded-xl gap-2 w-1/2 mt-4 p-4 bg-gradient-to-b from-custom-primary-2 to-custom-primary-3
    flex text-left'>
      <div className="min-w-60 min-h-60 items-center justify-center flex bg-white border-custom-secondary-3 border-2 rounded-2xl">
          <img className="max-w-56 max-h-56" src={product.image} alt="foto producto" />
        </div>
      <div className='flex flex-col gap-1 text-gray-900 ml-2'>
        <h2 className="text-2xl font-bold ">{product.name}</h2>
        <span className="text-lg text-gray-700">{product.description}</span>
        <span className="text-lg font-semibold ">Precio: ${product.price}</span>
        <span className="text-md mb-2">Stock: {product.stock}</span>
        <ButtonAddCart product={product} />
      </div>
    </div>
  )
}

export default ProductDetail