import React from 'react'
import ProfileBar from './ProfileBar'
import Button from './Button'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { FaRegSquare } from 'react-icons/fa6'
import profile from '../assets/IMG_7966-768x754.jpg'
import ChatHistory from './ChatHistory'
import { FaPlus } from 'react-icons/fa'
import img1 from '../assets/almas-salakhov-FUPjDC0BJfA-unsplash.jpg'
import ChatHistoryTwo from './ChatHistoryTwo'
import ChatProfile from './ChatProfile'
function Right() {
  return (
    <div className='bg-[#F7F7F7] w-[25%]  rounded-r-2xl'>
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
      <div className="overflow-y-scroll h-[70%] hidescrollbar ">
        <ChatHistory
        title='Brainwave AI UI Kit'
        desc='write code(HTML,CSS and JS) for a simpl...'
        profileimg={profile}
        />
        <ChatHistoryTwo
        title='Brainwave AI UI Kit'
        desc='write code(HTML,CSS and JS) for a simpl...'
        profileimg={profile}
        img={img1}
        />
        <ChatProfile
        title='Brainwave AI UI Kit'
        desc='write code(HTML,CSS and JS) for a simpl...'
        profileimg={profile}
        />
        <ChatHistory
        title='Brainwave AI UI Kit'
        desc='write code(HTML,CSS and JS) for a simpl...'
        profileimg={profile}
        />
      </div>
      <div className="flex justify-center pt-3">
      <Button className={`bg-[#0084FF] w-fit px-12 py-[6px] rounded-lg `}>
        <div className="flex items-center gap-2">
        <FaPlus />
          New Chat
        </div>
      </Button>
      </div>
    </div>
  )
}

export default Right