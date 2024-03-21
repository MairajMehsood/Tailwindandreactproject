import React from 'react'
import Darkbtn from '../../assets/darkbtn.png'
import Lightbtn from '../../assets/lightbtn.png'
const Darkmode = () => {

    // mujy yahan dark mode wala kam karn ahai end my

  return (
    <div className=' relative '>
        <img src={Lightbtn} className=' absolute right-0 z-10 w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'/>
        <img src={Darkbtn} className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'/>
    </div>
  )
}

export default Darkmode