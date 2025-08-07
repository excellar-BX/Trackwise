
import React from 'react'
import Button from './Button'

const Banner = () => {
  return (
    <div className='bg-orange-400 bg-opacity-30 max-[1302px]:w-[97%] w-[70%] rounded-xl mx-auto max-[1302px]:my-5 my-10 py-10 text-center ' >
        <p className='md:text-xl text-sm max-md:w-[90%] w-[50%] mx-auto ' >Be part of the movement. Gain experience, grow your career, and connect with real opportunites</p>
        
        <Button className="hover:bg-orange-600 mx-auto my-5 " link='/waitlist' paddingX='px-20'  text="Join waitlist" />
        </div>
  )
}

export default Banner
