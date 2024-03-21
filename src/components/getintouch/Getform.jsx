import React from 'react';
import backgroundImage from '../../assets/bgorange.jpg';


const Getform = () => {
    return (
      <div  className=" bg-cover bg-center bg-no-repeat text-center py-10 px-6" style={{ backgroundImage: `url(${backgroundImage})`, height: '100%', width: '100%' }}>
        <div  data-aos="zoom-out" data-aos-duration="500" data-aos-delay="300" className='max-w-xl mx-auto space-y-6'>
            <h2 className=' text-2xl sm:text-4xl text-white font-bold'>Get Notified About New Products</h2>
        <input className='w-full outline-none p-3  text-lg ' placeholder='Enter Your Email'/>
        </div>
      </div>
    );
  }
  

export default Getform;
