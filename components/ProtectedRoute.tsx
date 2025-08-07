'use client'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type ProtectedRouteProps = {
    children: React.ReactNode,
}

const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const {user, isLoading} = useAuth()
    const router = useRouter()
    useEffect(()=> {
        if(!isLoading && !user){
            router.push('/login')
        }
    },[user, isLoading, router])
    
    if(isLoading){
        return(
            <div className='spinner animate-spin flex flex-row items-center my-32 justify-center  border-2 rounded-full border-r-white border-green-600 w-10 h-10 ' ></div>
        )
    }
    if(!user){
       null
    }
    return <>{children}</>
  
}

export default ProtectedRoute