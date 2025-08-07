import React from 'react'
import { BiFolderPlus } from 'react-icons/bi'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b py-10 max-sm:px-3 from-white to-green-300 rounded-b-xl sm:rounded-b-3xl  bg-no-repeat bg-center bg-cover ' >
      <div className=' bg-green-300/30 text-green-600 px-5 py-2 flex gap-1 justify-center w-fit mx-auto rounded-full items-center ' ><BiFolderPlus/>Organise with ease</div>
      <p className=' text-4xl sm:text-6xl font-semibold text-center my-2 ' >Simplify your workflow,</p>
      <p className=' text-4xl sm:text-6xl font-semibold text-center' >Maximize your productivity</p>
      <p className='md:max-w-[60%] text-center mx-auto text-black/80 my-4 ' >Our task management dashboard is built to streamline your day. From tracking deadlines to collaborating with your team, everything you need is just a click away</p>
      <Button link='/login' className='mx-auto px-12 my-4 ' text='Get Started' />
<div className='border-[20px] mx-auto w-[80%] mt-10 border-white/50 rounded-t-3xl border-b-0' >
        <div className='  border-[20px] border-white/80 border-b-0 ' ><Image src={'/hero.png'} alt='hero-pic' height={1500} width={1500} /></div>
</div>
    </div>
  )
}

export default Hero