import React from 'react'
import { FaRegSquare } from 'react-icons/fa'

function ChatHistory({title,profileimg,desc,...props}) {
  return (
    <>
      <div className="text-black  mx-2 pt-5" {...props}>
        <div className="flex  gap-2">
          <div className='flex  pt-[5px]'>
          <FaRegSquare color="grey"  size={20}/>
          </div>
          <div className="">
            <span className="font-bold">{title}</span>
            <p className="text-sm text-gray-500" > {desc}</p>
          </div>
         
        </div>
        {/* <div className="">
          <img src={props.img} alt="" className='rounded-lg w-full h-32' />  
          </div> */}
        <div className="text-xs  mx-4  text-gray-400">
        
        <div className="flex  items-center justify-between py-3">
          <img
            src={profileimg}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <p>Just now</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default ChatHistory
