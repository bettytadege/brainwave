import { useState } from 'react'

import './App.css'

import Left from './components/Left'
import Right from './components/Right'
import Middle from './components/Middle'

function App() {
  

  return (
    <>
       <div className="bg-[#141718] w-full h-screen text-white">

        <div className="flex max-w-[100%]  h-[100%] mx-8 ">
        <Left/>
         
        <Middle/>
        <Right/>
        </div>
        </div>
     
    </>
  )
}

export default App
