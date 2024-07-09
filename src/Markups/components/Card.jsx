import React from 'react'

function Card({icon,notification,text,...props}) {
  return (
    <>
    <div className="mx-6" {...props}>
  <div className="gap-5 flex w-full items-center hover:bg-[#323337] rounded-lg p-3 hover:border-transparent">
    <div className="flex items-center justify-center ">
    <span>{icon}</span>
    </div>
    <div className="text-sm flex items-center justify-between w-full">
      <div>
        <p>{text}</p>
      </div>
      <div className='flex items-center gap-1 bg-[#323337] rounded-md px-1  text-xs'>
        <span className='text-[#a5a8aa] flex items-center'>{notification}</span>
        <p >{props.txt}</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Card