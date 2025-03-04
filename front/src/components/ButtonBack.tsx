'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri';

const ButtonBack:React.FC = () => {
    const router = useRouter();
    const onBack = () => {
        router.back();
    }
    return (
        <button onClick={onBack}>
            <RiArrowGoBackFill className='size-6'/>
        </button>
    )
}

export default ButtonBack