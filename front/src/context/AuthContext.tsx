'use client'
import { IUser } from "@/helpers/types";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface AuthContextType {
    user: IUser | null,
    isAuth: boolean | null,
    token: string | null,

    saveUserData: (data: {user: IUser, token: string}) => void,
    resetUserData: () => void,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)


export const AuthProvider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<AuthContextType["user"]>(null);
    const [token, setToken] = useState<string | null>(null);
    const [isAuth, setIsAuth] = useState<AuthContextType["isAuth"]>(null);

    const saveUserData = (data: {user: IUser, token: string}) => {
        localStorage.setItem("user", JSON.stringify(data))
        setUser(data.user)
        setToken(data.token)
        setIsAuth(true)
    };
    const resetUserData = () => {
        localStorage.removeItem("user")
        setUser(null)
        setToken(null)
        setIsAuth(false)
    };

    useEffect(()=>{
        const storage = JSON.parse(localStorage?.getItem("user") || "{}")
        if (Object.keys(storage).length === 0) {
            setIsAuth(false)
            return};
        setUser(storage.user)
        setIsAuth(true)
        setToken(storage.token)
    },[])

    return <AuthContext.Provider value={{user, isAuth, saveUserData, resetUserData, token}}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = () =>{
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error ("useAuth debe usarse dentro de un AuthProvider")
    }
    return context;
}