import React from 'react'
import winter from '../../assets/winterimg.jpg'
import { FaLocationPinLock } from "react-icons/fa6";
export const Winter = () => {
  return (
    <div className='container mx-auto p-2 sm:p-12'>
    <div className='flex justify-evenly gap-[50px]  flex-wrap  p-5'>
      <div data-aos="zoom-out" data-aos-duration="500" data-aos-delay="600">
        <img className='w-[400px] h-[350px] object-cover  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] ' src={winter}/>
      </div>
      <div  className='w-full max-w-[670px]'>
        
        <div className='flex justify-center gap-4 flex-col  '>
        <h2 data-aos="fade-up" className=' font-bold text-3xl sm:text-4xl'>Winter Sale upto 50% Off</h2>
        <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="600" className=' text-gray-500 text-sm '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio</p>
        </div>
        
        {/* lower icons  */}
        <div className='flex gap-4 flex-col mt-8'>
        <div  data-aos="fade-up" data-aos-duration="700" data-aos-delay="600" className='flex items-center gap-4 '>
            <div className=' bg-violet-100 h-12 w-12 rounded-full flex items-center shadow-sm p-4'><FaLocationPinLock /></div>
            <p >Quality Products</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" className='flex items-center gap-4 '>
            <div className=' bg-orange-100 h-12 w-12 rounded-full flex items-center shadow-sm p-4'><FaLocationPinLock /></div>
            <p >Fast Delivery</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="600" className='flex items-center gap-4 '>
            <div className=' bg-green-100 h-12 w-12 rounded-full flex items-center shadow-sm p-4'><FaLocationPinLock /></div>
            <p >Easy Payment method</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"className='flex items-center gap-4 '>
            <div className='  bg-yellow-100 h-12 w-12 rounded-full flex items-center shadow-sm p-4'><FaLocationPinLock /></div>
            <p >Get Offers</p>
        </div>
        </div>
      </div>
    </div>

    </div>
  )
}
