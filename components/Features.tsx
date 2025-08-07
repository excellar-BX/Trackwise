import React from 'react'
import { BiChart, BiCheckCircle, BiEdit, BiFolderPlus, BiUserCircle } from 'react-icons/bi'

const Features = () => {
  const features = [
    {key:1, icon:<BiCheckCircle/>, heading:'Visual Task Status Tracker', subheading:"Stay on top of your work with an intuitive layout that shows task progress ta a glance"},
    { key:2, icon:<BiUserCircle/>, heading:'Team Collaboration Made Simple', subheading:'Bring your team together, assign tasks, and move as one, '},
    { key:3, icon:<BiEdit/>, heading:'One Click Task Actions', subheading:'Create, edit, or delete tasks instantly. Designed for speed and simplicity'},
  ]
  return (
    <div id='features' className="bg-gradient-to-r from-white to-green-200/30 max-sm:px-2 py-10 sm:py-20 ">
       <div className=' bg-green-300/30 text-green-600 px-5 py-2 flex gap-1 justify-center w-fit mx-auto rounded-full items-center ' ><BiFolderPlus/>Our Features</div>
           <div className='flex flex-row flex-wrap w-[95%] justify-center mx-auto max-sm:gap-y-5 gap-5 py-10 ' >
            {features.map((data, index) => (
               <div
            key={index}
            className="w-full min-w-[300px] min-[500px]:max-w-[32%]  p-5 flex flex-col items-center rounded-xl backdrop-blur-xl bg-white/10 shadow-md sm:shadow-md border"
          >
               <div
              className={`w-[100px] h-[70px] ${
                data.key === 2
                  ? "bg-amber-100"
                  : data.key === 3
                  ? "bg-blue-100"
                  : "bg-green-100"
              } h-14 mx-2 rounded-xl flex items-center justify-center text-3xl ${
                data.key === 2
                  ? "text-amber-500"
                  : data.key === 3
                  ? "text-blue-500"
                  : "text-green-500"
              }`}
            >
              {data.icon}
            </div>
              <p className='text-2xl font-semibold mt-5 text-center' >{data.heading}</p>
              <p className='text-gray-600 text-center' >{data.subheading}</p>
            </div>
           ))}
           </div>
    </div>
  )
}

export default Features