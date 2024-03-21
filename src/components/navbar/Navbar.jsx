import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { IoCaretDown } from "react-icons/io5";
import Darkmode from './Darkmode';
import DummyData from './Data';

export const Navbar = () => {
  const [data, setData] = useState(DummyData);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className='p-0 shadow-md bg-white dark:bg-gray-900 dark:text-white'>
        {/* upper navbar */}
        <div className='bg-primary/40 py-2 px-8'>
          <div className='flex justify-between items-center'>
            <a className='font-bold text-2xl sm:text-2xl  flex gap-2'><img className='w-10' src={logo} alt='logo' />Shopsy</a>

            <div className='flex justify-between gap-4 items-center '>
              <div className='relative hidden sm:block'>
                <input
                  className='w-[200px] sm:w-[200px] hover:w-[300px] rounded-full border focus:outline-none border-gray-300 px-2 py-1 focus:border-primary focus:border-1 transition-all duration-300'
                  type="text" placeholder='Search'
                />
                <IoSearchSharp className='absolute top-1/2 -translate-y-1/2 right-3 text-black hover:text-primary' />
              </div>

              <button className='bg-gradient-to-r from-primary to-secondary text-white group rounded-full px-4 py-1 flex items-center gap-3'>
                <span className='group-hover:block hidden transition-all duration-300 '>Order </span><FaShoppingCart /></button>
              {/* Dark mode */}
              <div>
                <Darkmode />
              </div>
            </div>
          </div>
        </div>

        {/* lower navbar */}
        <div className='hidden sm:flex justify-center gap-4 items-center py-3 '>
          {data.map((item) => {
            return (
              <ul key={item.id} className='px-4'>
                <li className='hover:text-primary cursor-pointer'><a href={item.link}>{item.name}</a></li>
              </ul>
            );
          })}
          <ul className='relative'>
            <li className=' cursor-pointer' onClick={toggleDropdown}>
              <a className='flex items-center gap-[2px] py-2' href='#'>Trending
                <span><IoCaretDown className={`transition-all duration-200 ${showDropdown ? 'rotate-180' : ''}`} /></span></a>
            </li>
            {/* dropdown list */}
            {showDropdown && (
              <div className='absolute  sm:left-[-100px] z-[9999] w-[200px] rounded-md bg-white text-black  shadow-lg py-8 px-4  '>
                <ul>
                  <li className='py-2' ><a href='#' className='py-2 px-2 hover:bg-primary/40 w-full rounded-md inline-blocks inline-block'>Trending products</a></li>
                  <li className='py-2' ><a href='#' className='py-2 px-2 hover:bg-primary/40 w-full rounded-md inline-blocks inline-block'>Best Selling</a></li>
                  <li className='py-2' ><a href='#' className='py-2 px-2 hover:bg-primary/40 w-full rounded-md inline-blocks inline-block'>Top Rated</a></li>
                </ul>
              </div>
            )}  
          </ul>
        </div>
      </div>
    </>
  );
};
