import { useAuth } from '@/context/AuthContext'
import { routes } from '@/routes/routes'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


const usePrivate = () => {
    const {isAuth} = useAuth()
    const router = useRouter();

    useEffect(()=>{
        if(!isAuth) {router.push(routes.login)};
    }, [isAuth])

}

export default usePrivate