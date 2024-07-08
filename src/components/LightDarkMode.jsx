import React from 'react'
import Button from './Button'
import { MdLightMode } from 'react-icons/md'
import { CiDark } from 'react-icons/ci'

function LightDarkMode() {
  return (
    <>
      <div className="mx-2 pt-3">
        <Button className={`bg-[#232627] rounded-lg py-1`}>
          <div className="flex justify-around ">
            <div className="  bg-[#141718] px-5 py-2 rounded-lg flex items-center gap-2 justify-center">
              <div className="">
                <MdLightMode size={18}/>
              </div>
              <div className="font-semibold">Light</div>
            </div>
            <div className="flex items-center gap-2 text-[#6D7275]">
              <div className="">
                <CiDark size={20}/>
              </div>
              <div className="font-semibold">Dark</div>
            </div>
          </div>
        </Button>
      </div>
    
    </>
  );
}

export default LightDarkMode