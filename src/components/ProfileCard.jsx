import React from 'react'
import Button from './Button'
import profile from '../assets/IMG_7966-768x754.jpg'
function ProfileCard() {
  return (
    <>
      <div className="mx-2 pt-2">
        <div className="bg-[#232627] rounded-lg  w-full h-full ">
          <div className=" flex items-center gap-2 mx-4 py-2">
            <div className="flex relative">
            <div className="w-14 h-14  object-cover ">
              <img
                src={profile}
                alt=""
                className="rounded-full "
              />
             
              </div>
              <div className="h-6 w-6 rounded-full bg-[#232627]
              flex items-center justify-center absolute bottom-0 left-9">
              <div className="bg-green-400 rounded-full h-3 w-3  z-50 "></div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div className="">
                <p>Tran Mau Tri Tam</p>
                <span className="text-sm text-[#6D7275] ">tam@ui8.net</span>
              </div>
              <div className="">
                <Button className={`bg-[#3FDD78] text-black font-semibold rounded-lg px-1`}>Free</Button>
              </div>
            </div>
          </div>
          <div className="py-4 mx-2 ">
          <Button className={`text-center border-[0.3px] py-3 border-[#6D7275] rounded-lg`}>Upgraded to Pro</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileCard