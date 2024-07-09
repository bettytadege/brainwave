import React from 'react'
import { FaRegSquare } from 'react-icons/fa'

function ChatProfile({title,profileimg,desc}) {
  return (
    <div className="text-black  mx-2" >
    <div className="flex  gap-2">
      <div className="flex  pt-[5px]">
        <FaRegSquare color="grey" size={20} />
      </div>
      <div className="">
        <span className="font-bold">{title}</span>
        <p className="text-sm text-gray-500"> {desc}</p>
      </div>
    </div>
   
    <div className="text-xs  mx-4  text-gray-400">
      <div className="flex  items-center justify-between py-3">
        <div className="flex relative items-center">
        <img
          src={profileimg}
          alt="profile"
          className="w-10 h-10 rounded-full relative "
        />
        <div className="rounded-full bg-white w-11 h-11 flex items-center justify-center relative right-4 z-40">
        <img
          src={profileimg}
          alt="profile"
          className="w-10 h-10 rounded-full "
        />
        </div>
        <div className="rounded-full bg-white w-11 h-11 flex items-center justify-center relative right-8 z-40">
        <img
          src={profileimg}
          alt="profile"
          className="w-10 h-10 rounded-full "
        />
        </div>
        </div>
        <p>Just now</p>
      </div>
    </div>
  </div>
  )
}

export default ChatProfile