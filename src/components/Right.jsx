import React from 'react'
import ProfileBar from './ProfileBar'
import Button from './Button'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegSquare } from 'react-icons/fa6'
import profile from '../assets/IMG_7966-768x754.jpg'
function Right() {
  return (
    <div className='bg-[#F7F7F7] w-[25%]'>
      <ProfileBar/>
      <div className="border-b-[1px]"></div>
      <div className="flex items-center justify-around py-2 gap-8">
      <div className="text-gray-400 flex gap-4 text-sm font-bold">
        <p>Chat history</p>
        <Button className={`text-gray-700 text-xs w-fit rounded-lg  p-1 bg-[#E8ECEF]`}>
          26/100
        </Button>
      </div>
      <div className="">
      <RiDeleteBin6Line color='grey' />
      </div>
      </div>
      
    </div>
  )
}

export default Right