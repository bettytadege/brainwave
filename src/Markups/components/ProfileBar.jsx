import React from 'react'
import { CgNotifications } from 'react-icons/cg'
import profile from '../../assets/IMG_7966-768x754.jpg'
import Button from './Button'

function ProfileBar() {
  return (
   <>
   <div className="flex items-center  gap-4 justify-center w-full py-3">
   <CgNotifications color='grey' size={25}/>
   <div className="flex relative">
            <div className="w-12 h-12  object-cover ">
              <img
                src={profile}
                alt=""
                className="rounded-full "
              />
             
              </div>
              <div className="h-4 w-4 rounded-full bg-[#F7F7F7]
              flex items-center justify-center absolute bottom-0 left-9">
              <div className="bg-green-400 rounded-full h-3 w-3  z-50 "></div>
              </div>
            </div>
            <div className="">
                <Button className={`bg-black rounded-lg text-white w-fit px-3 py-1`}>
                    share
                </Button>
            </div>
   </div>
   
   </>
  )
}

export default ProfileBar