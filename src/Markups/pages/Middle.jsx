import React from 'react'
import CardTwo from '../components/CardTwo';
import { FaRegImage } from 'react-icons/fa';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import { BsTrophyFill } from 'react-icons/bs';
import { RiMusic2Fill } from 'react-icons/ri';
import { FaCube } from 'react-icons/fa6';
import Input from '../components/Input';

function Middle() {
  return (
    <>
  
      <div className="bg-white w-[50%] h-[100%] rounded-tl-lg rounded-bl-2xl text-black ">
        <div className="overflow-y-scroll hidescrollbar scroll-smooth h-[90%]">
        <div className=" text-center pt-20">
          <h1 className="font-bold text-3xl text-black">
            Unlock the power of AI
          </h1>
          <p className=" text-[#6D7275] tracking-wider py-2  font-semibold">
            Chat with the smartest AI -Experience the power of AI with us
          </p>
        </div>
        <div className="pt-10">
          <CardTwo
          bgcolor='#E8E0F6'
          text='Photo edition'
          icon={<FaRegImage color='#8E54EA'  size={20}/>}/>
          <CardTwo
          bgcolor='#F7DACE'
          text='Video generation'
          icon={<MdOutlinePlayCircleFilled color='#D84D14'  size={25}/>}/>
          <CardTwo
          bgcolor='#CBE5FE'
          text='Education feedback'
          icon={<BsTrophyFill color='#3E90F0'  size={20}/>}/>
          <CardTwo
          bgcolor='#DBF0E0'
          text='Code generation'
          icon={<FaCube color='#49BA68'  size={20}/>}/>
          <CardTwo
          bgcolor='#FEEDDA'
          text='Audio generation'
          icon={<RiMusic2Fill  color='#EB8C22'  size={23}/>}/>
        </div>
        </div>
        <Input/>
      </div>
     
    </>
  );
}

export default Middle