'use client'
import { useRouter } from 'next/navigation';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type UserProps = {
    id: string;
    name: string;
    email: string;
}
type AuthContextProps = {
    user: UserProps | null,
    login: (email: string, password: string) => Promise<boolean>,
    logout: () => void,
    isLoading: boolean,
}
type AuthProviderProps = {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined >(undefined)

const MockUser:UserProps = {
    id: '1',
    name: "Excellence",
    email: "excellenceay33@gmail.com",
}
const MockCredential = {
    email: "admin@gmail.com",
    password: "admin123",
}

const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<UserProps | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(()=> {
         if(typeof window !== 'undefined'){
        const savedUser = localStorage.getItem('user');
        if(savedUser) {
            setUser(JSON.parse(savedUser))
        }
        setIsLoading(false)
    }
    },[]);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        // await new Promise(resolve => setTimeout(resolve, 3000)) //this is just to simulate an api delay
        if (email === MockCredential.email && password === MockCredential.password){
            setUser(MockUser);
             if(typeof window !== 'undefined'){
            localStorage.setItem('user', JSON.stringify(MockUser))
             }
            setIsLoading(false);
            router.push('/dashboard')
            return true;
        }
        setIsLoading(false);
        return false;
    };

    const logout = ()=> {
        setUser(null);
        if(typeof window !== 'undefined'){
            localStorage.removeItem('user')
        }
        router.push('/login')
    }

    const value:AuthContextProps = {
        user, login, logout, isLoading,
    }

  return (
    <AuthContext.Provider value={value} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}