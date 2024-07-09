import React from 'react';
import Logo from '../components/Logo';
import Card from '../components/Card';
import { BsChatLeftText } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { TbTextScan2 } from 'react-icons/tb';
import { GoCreditCard, GoSearch } from 'react-icons/go';
import { MdKeyboardCommandKey } from 'react-icons/md';
import ChatList from '../components/ChatList';
;

import LightDarkMode from '../components/LightDarkMode';
import ProfileCard from '../components/ProfileCard';

function Left() {
  return (
    <div className="bg-[#141718] w-[25%] pt-4 flex flex-col h-screen">
      <Logo />
      <div className=" overflow-y-scroll h-[60%] hidescrollbar ">
        <div className="">
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
            text="Updates & FAQ"
            icon={<TbTextScan2 color="#B94419" size={20} />}
          />
          <Card
            text="Settings"
            icon={<FiSettings color="#8E54EA" size={20} />}
          />
        </div>
        <div className="border-b-[0.3px] border-[#6D7275] pt-4"></div>
        <div className="pt-8">
          <ChatList />
        </div>
      </div>
      <ProfileCard />
      <LightDarkMode />
    </div>
  );
}

export default Left;
