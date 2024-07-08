import React from 'react'
import Logo from './Logo'
import Card from './Card'
import { BsChatLeftText } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi';
import { TbTextScan2 } from 'react-icons/tb';
import { GoCreditCard, GoSearch } from 'react-icons/go';
import { MdKeyboardCommandKey } from 'react-icons/md';
import ChatList from './ChatList';
import { IoIosArrowDown } from 'react-icons/io';

import LightDarkMode from './LightDarkMode';
import ProfileCard from './ProfileCard';


function Left() {
  return (
    <div className="bg-[#141718] w-[25%] pt-4 ">
      <div className="">
        <Logo />
        <div className="pt-10">
          <Card
            text="Chats"
            icon={<BsChatLeftText color="#3E90F0" size={20} />}
          />
          <Card
            text="Search"
            txt="F"
            icon={<GoSearch color="#33A55E" size={20} />}
            notification={<MdKeyboardCommandKey color="white" size={12} />}
          />
          <Card
            text="Manage subscription"
            icon={<GoCreditCard color="#A87496" size={20} />}
          />
          <Card
            text="Updates & FQA"
            icon={<TbTextScan2 color="#B94419" size={20} />}
          />
          <Card
            text="Setting"
            icon={<FiSettings color="#8E54EA" size={20} />}
          />
        </div>
        <div className="border-b-[0.3px] border-[#6D7275]  pt-4"></div>
        <div className="pt-8">
          <ChatList />
        </div>
      </div>
      <div className="">
      <ProfileCard/>
      </div>
      <div className="">
        <LightDarkMode/>
      </div>
    </div>
  );
}

export default Left