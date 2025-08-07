'use client'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type InputProps = {
    label?: string,
    type?: string | "text",
    value?: string,
    placeholder?: string,
    className?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input = ({label, type, value, placeholder, className, onChange}: InputProps) => {

    const [passwordType, setPassWordType] = useState("password")
  return (
    <div className={` ${className} my-3 `} >
        <label className='text-gray-700 px-4 '  htmlFor={label}>{label}</label>
        <div className='flex flex-row my-2 gap-4 shadow-md bg-white mx-auto px-5 rounded-full items-center' >
            <input className='bg-transparent w-full outline-none border-none py-4 px-2   ' required type={type === 'password'? passwordType : type} id={label} placeholder={placeholder} onChange={onChange}  />
        {type === 'password' && (
            passwordType === 'password'? 
            <span><FaEyeSlash className='text-gray-700 text-2xl ' onClick={()=> setPassWordType("text")} /></span> :
            
            <span><FaEye className='text-gray-700 text-2xl ' onClick={()=> setPassWordType("password")} /></span>
        )}
        </div>
    </div>
  )
}

export default Input