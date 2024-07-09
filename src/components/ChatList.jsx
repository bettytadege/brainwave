import React from 'react'
import Card from './Card'
import { MdOutlineAddCircle } from 'react-icons/md'
import { BiSolidSquareRounded } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

function ChatList() {
  return (
   <>
   <div className="">
    <div className="flex text-[#6D7275] items-center mx-8 gap-4 group">
    <IoIosArrowDown className='group-hover:text-white'/>
    <p className='text-sm group-hover:text-white'>Chat List</p>
    </div>
    <div className="pt-2">
    <Card 
    icon={<BiSolidSquareRounded color='grey' size={15}/>}
    text='Welcome'
     notification='48'/>
    <Card 
    // className={`text-[#6D7275]`}
    icon={<BiSolidSquareRounded  color="#8E54EA" size={15}/>}
    text='UIB Production'
     notification='16'/>
    <Card 
    icon={<BiSolidSquareRounded  color='#3E90F0' size={15}/>}
    text='Favorites'
     notification='8'/>
    <Card 
    icon={<BiSolidSquareRounded color="#B94419" size={15}/>}
    text='Archived'
     notification='128'/>
    <Card 
    icon={<MdOutlineAddCircle color='#6D7275'  size={20}/>}
    text='New List'
/></div>
   </div>
   
   </>
  )
}

export default ChatList