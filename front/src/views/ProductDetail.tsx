import ButtonAddCart from '@/components/ButtonAddCart';
import ButtonBack from '@/components/ButtonBack';
import { IProduct } from '@/helpers/types';

const ProductDetail: React.FC<IProduct> = (product) => {

  return (
    <div className='border-2 border-white m-auto rounded-xl gap-4 w-5/6 md:w-1/2 mt-10 p-8 bg-gradient-to-b from-custom-primary-2 to-custom-primary-3
    flex flex-col md:flex-row text-left'>
      <div className="md:min-w-60 md:min-h-60 items-center justify-center flex bg-white border-custom-secondary-3 border-2 rounded-2xl
                      ">
        <img className="md:max-w-56 md:max-h-56 w-3/4 h-3/4" src={product.image} alt="foto producto" />
      </div>
      
      <div className='flex flex-col gap-1 text-gray-900 ml-2'>
        <h2 className="text-2xl font-bold ">{product.name}</h2>
        <span className="text-lg text-gray-200">{product.description}</span>
        <span className="text-lg font-semibold ">Precio: ${product.price}</span>
        <span className="text-md mb-2">Stock: {product.stock}</span>
        <div className='m-auto scale-110'>
          <ButtonAddCart product={product} />
        </div>
      </div>

      <div className='self-end md:self-start'>
        <ButtonBack />
      </div>
    </div>
  )
}

export default ProductDetail