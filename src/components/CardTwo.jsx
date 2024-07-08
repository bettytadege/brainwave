import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function CardTwo({icon,bgcolor,text, ...props}) {
  return (
    <>
    <div className="pt-4">
    <div className="flex items-center justify-between hover:shadow-lg hover:scale-105 group 
    max-w-[68%] border rounded-lg py-3 mx-auto">
        <div className="flex items-center gap-3 mx-4 ">
            <div className='h-12 w-12 flex items-center justify-center rounded-lg' style={{backgroundColor:bgcolor}}>
            <span>{icon}</span>
            </div>
            <div className="font-semibold">
            <p>{text}</p>
            </div>
        </div>
        <div className="mx-4">
        <FaArrowRightLong className='text-gray-500  group-hover:text-black'/>
        </div>
    </div>
    </div>
    </>
  )
}

export default CardTwo