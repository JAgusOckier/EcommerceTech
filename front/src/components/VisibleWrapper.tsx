'use client'
import { routes } from '@/routes/routes';
import { usePathname } from 'next/navigation';
import React from 'react'

const hidePages = [routes.landing, routes.login, routes.register];

const VisibleWrapper:React.FC<{children: React.ReactNode}> = ({ children }) => {
    const pathname = usePathname();
    if(hidePages.includes(pathname)){
        return null;
    }
    return (
        <div>{children}</div>
    )
}

export default VisibleWrapper