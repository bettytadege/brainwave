import React from 'react'
import { VscLayoutSidebarRight } from 'react-icons/vsc'
import logo from '../assets/Screenshot 2024-07-05 132941.png'
function Logo() {
 return(<>
  <div className="flex items-center justify-between mx-6 ">
       <div className="flex items-center gap-3 text-2xl font-semibold">
        <img src={logo} alt="brainwave" className='w-8' />
        <h1>Brainwave</h1>
       </div>
       <div className="">
       <VscLayoutSidebarRight size={20} color='grey' />
       </div>
       </div>
 </>
  )
}

export default Logo