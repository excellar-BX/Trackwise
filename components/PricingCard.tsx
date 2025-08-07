import React from 'react'
import { BiCheck } from 'react-icons/bi'
import Button from './Button'

type PricingCardProps = {
    className?: string,
    planName: string
    price: number,
    isPopular?: boolean,
    isAnnual?: boolean,
    subtitle: string,
    btnText: string,
    features: string[],
}

const PricingCard = ({className, planName, btnText, isPopular, isAnnual, price, subtitle, features}: PricingCardProps) => {
  return (
    <div className={`${isPopular? 'bg-green-600 border-white/70 text-white' : 'bg-white border-gray-300/50'} py-5 rounded-3xl border-[10px] px-5 max-w-[350px]  `} >
        <p className={`text-2xl font-semibold flex justify-between items-center my-5 `} >{planName}{isPopular&& (<span className='px-3 py-1 rounded-xl text-sm bg-white text-green-600' >Popular</span>)}</p>
        <p className='text-3xl my-4 font-semibold ' >${isAnnual? price*9 : price}<span className='text-sm'>/{isAnnual? "Year": 'Month'}</span></p>
        <p className='text-sm  ' >{subtitle}</p>
        {features.map((data, index) => (
            <span key={index} className='flex flex-row my-5 gap-2 items-center' ><BiCheck className={`${isPopular? "bg-white/30" : "bg-green-500/20 text-green-600"} rounded-md text-xl w-5 h-5 `} /> {data}</span>
        ))}
        <Button text={btnText} className={`${isPopular ? "bg-white text-green-600 hover:text-white hover:bg-green-700" :" bg-green-600/10 text-green-600 hover:text-white"} mx-auto w-full justify-center mt-3 py-4 rounded-xl font-semibold`} />
    </div>
  )
}

export default PricingCard