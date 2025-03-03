import { useAuth } from '@/context/AuthContext'
import { routes } from '@/routes/routes'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


const usePublic = () => {
    const {isAuth} = useAuth()
    const router = useRouter();

    useEffect(()=>{
        if (isAuth) {router.push(routes.home)};
    }, [isAuth])

}

export default usePublic