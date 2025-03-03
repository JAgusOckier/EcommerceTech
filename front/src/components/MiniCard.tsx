'use client'

export interface CardProps {
  name: string,
  image: string,
  onClick: () => void;
} 

const MiniCard: React.FC<CardProps> = ({ name, image, onClick}) => {
  return (
    <div className="flex flex-col justify-center items-center m-3 gap-1">
      <div className="w-60 flex flex-col justify-center items-center p-8 m-2 gap-1 hover:bg-gray-100 hover:bg-opacity-5 hover:shadow-lg transition duration-200 ease-in-out rounded-2xl" onClick={onClick} role="button">
        <div className="w-40 h-40 items-center justify-center flex bg-white border-custom-secondary-3 border-2 rounded-2xl">
          <img className="max-w-36 max-h-36" src={image} alt="foto producto" />
        </div>
        <p className="text-base font-bold">{name}</p>
        <p className="text-sm hover:underline">ver detalle</p>
      </div>   
    </div>
  )
}

export default MiniCard