'use client'
import React, { useState } from 'react'
import Button from './Button'
import Input from './Input';
import Image from 'next/image';
import Link from 'next/link';

const Contact = () => {
   const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {}
 return (
      <div id='contact' >
        <div className=" flex flex-col md:flex-row bg-gradient-to-l max-sm:px-2 from-white to-green-200/30 py-10 ">
      <div className="left-side md:w-[50%] space-y-5  ">
        <div className='sm:px-20 px-5 pt-5' >
 <p className="text-4xl sm:text-5xl font-semibold sm:max-w-[80%]  my-2">Take your scheduling to the next level</p>
       <p className="max-w-[80%]   text-black/80 my-4 ">From effortless task organisation to seamless team management, TrackWise makes staying on top of your schedule easier and more effective than ever before.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            className="sm:max-w-[70%]  max-w-[90%] mx-auto"
            type="email"
            placeholder="Email address"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className='text-gray-700 sm:max-w-[70%] max-w-[90%]  mx-auto flex py-3 px-4' htmlFor="message">Message</label>
          <textarea id='message'
            className="sm:max-w-[70%] shadow-md max-w-[90%]  mx-auto flex rounded-2xl w-full " rows={5} cols={30}>

          </textarea>
          
          {error && (
            <div className="text-red-700 max-w-[70%] mx-auto  text-xl font-Satoshi-bold">
              {error}
            </div>
          )}
          <Button
            text={isSubmitting ? "Sending......" : "Send"}
            className={`sm:max-w-[70%] max-w-[90%]  my-10 mx-auto justify-center text-xl py-3 w-full ${
              isSubmitting && "bg-slate-300"
            } `}
            type="submit"
            disabled={isSubmitting}
          />
        </form>
      </div>
      <div className="right-side md:w-[50%] ">
        <Image
          src={"/login3.png"}
          alt="illustration pic"
          width={800}
          height={800}
          className='max-md:hidden'
        />
      </div>
    </div>
      </div>
  )
}
export default Contact
