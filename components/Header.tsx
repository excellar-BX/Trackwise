'use client'
import React, { useState } from "react";
import Link from 'next/link';
import {Link as ScrollLink} from 'react-scroll'
import { BiArrowFromLeft, BiArrowToRight, BiMenuAltRight, BiUpArrowAlt, BiX } from "react-icons/bi";
import Button from "./Button";

const nav = [
  { name: "Feature", route: "features" },
  { name: "Pricing", route: 'pricing'  },
  { name: "About us", route: "features" },
  { name: "Support", route: "contact" },
];


const Header = () => {

  const [open, setOpen] = useState(false)

  return (
   <div className="flex flex-row py-5 items-center justify-between px-3 sm:px-10 relative " >
    <div><span className="text-green-600  font-Satoshi-bold text-2xl  " >TrackWise</span></div>
    <div className={`  flex-col md:flex-row max-md:absolute max-md:top-16 max-md:right-8 max-md:bg-green-300 max-md:w-fit max-md:px-7 max-md:py-10 max-md:gap-5 max-md:text-green-800 max-md:rounded-xl  items-center justify-center w-[50%] md:flex transition-all ease-in-out duration-300 md:scale-100 ${open? ' scale-100' : 'scale-0'} `} >
      <div className="flex  flex-col md:flex-row gap-5 items-center font-Satoshi-bold text-lg  " >
        {nav.map(data => (
        <div key={data.route} className="hover:text-green-600 first:text-green-700 cursor-pointer" >
          <ScrollLink  smooth={true}
              spy={true} to={data.route} >{data.name}</ScrollLink>
        </div>
      ))}
      
      </div>
      <div className=" max-md:flex hidden flex-col max-md:gap-y-4 md:flex-row gap-2 items-center " >
      <Link href={'/login'} ><span className="text-lg text-green-600 font-semibold" >Login</span></Link>
      <Button text="Sign up" icon={<BiUpArrowAlt className="text-2xl text-green-600 rotate-90 bg-white rounded-full " />} />
    </div>
    {/* DISPLAY ONLY ON LARGE SCREEN */}
    </div>
     <div className="flex flex-col max-md:hidden  max-md:gap-y-4 md:flex-row gap-2 items-center " >
      <Link href={'/login'} ><span className="text-lg text-green-600 font-semibold" >Login</span></Link>
      <Button text="Sign up" icon={<BiUpArrowAlt className="text-2xl text-green-600 rotate-90 bg-white rounded-full " />} />
    </div>
    <div>
      {open? <BiX className="text-3xl text-green-600 md:hidden " onClick={()=> setOpen(!open)} /> : <BiMenuAltRight className="text-3xl text-green-600 md:hidden " onClick={()=> setOpen(!open)} />}
    </div>
    

   </div>
  );
};

export default Header;
