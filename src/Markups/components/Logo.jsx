import React from 'react'
import { VscLayoutSidebarRight } from 'react-icons/vsc'

function Logo() {
 return(<>
  <div className="flex items-center justify-between mx-6 pb-10 ">
       <div className="flex items-center gap-3 text-2xl font-semibold">
        <img src='https://ui8-brainwave.herokuapp.com/images/logo.svg' alt="brainwave" className='w-' />
        
       </div>
       <div className="">
       <VscLayoutSidebarRight size={20} color='grey' />
       </div>
       </div>
 </>
  )
}

export default Logo