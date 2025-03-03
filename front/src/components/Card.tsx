'use client'

import ButtonAddCart from "./ButtonAddCart";
import { IProduct } from "@/helpers/types";

export interface CardProps {
  product: IProduct;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ product, onClick}) => {

  return (
    <div className="flex flex-col justify-center items-center m-3 gap-1">
      <div className="w-64 h-80 flex flex-col justify-between items-center p-3 m-2 gap-2 border-none rounded-lg  
    bg-gradient-to-b from-custom-primary-2 to-custom-primary-3 " onClick={onClick} role="button">
        <p className="text-lg font-bold">{product.name}</p>
        <div className="w-48 h-48 items-center justify-center flex bg-white border-custom-secondary-3 border-2 rounded-2xl">
          <img className="max-w-44 max-h-40" src={product.image} alt="foto producto" />
        </div>
        <p className="text-lg">{`$ ${product.price}`}</p>
        <p className="text-base hover:underline">ver detalle</p>
      </div>
      <ButtonAddCart product={product}/>
    </div>
  )
}

export default Card