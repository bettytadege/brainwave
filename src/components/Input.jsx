import React from 'react'
import { BsSoundwave } from 'react-icons/bs'
import { MdOutlineAddCircle } from 'react-icons/md'

function Input() {
  return (
    <>
    <div className="">
    <div className="flex items-center relative top-28 ">
        <div className="relative left-8">
        <MdOutlineAddCircle color='#6D7275'  size={20}/>
        </div>
        <input type="text" className='border rounded-lg py-3 w-full outline-none pl-10' placeholder=" Type '/' for commands"/>
        <div className="relative right-8">
        <BsSoundwave color='#6D7275'  size={20}/>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default Input