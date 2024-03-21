import React from 'react'
import footerlogo from '../../assets/footer-logo.png'
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import footerbg from '../../assets/footer.jpg'
const Footer = () => {
    return (
        <div className=' bg-no-repeat bg-cover lg:pb-[240px] pb-[140px]' style={{backgroundImage:`url(${footerbg})`, height:'100%', width:"100%",backgroundPosition:"center bottom"}}>
            <div className=' container p-10 mt-8  text-white'>
                <div className='flex lg:justify-around justify-between flex-wrap gap-9 sm:gap-0 '>
                    <div className=''>
                        <span className='flex flex-row gap-4 items-center text-3xl font-bold'> <img src={footerlogo} className=' max-w-[50px]' />Shopsy</span>
                        <p className=' pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum <br></br>in beatae ea recusandae blanditiis veritatis.</p>
                    </div>
                    <div>
                        <h2>Important Links</h2>
                        <ul>
                            <li className='py-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '><a>Home</a></li>
                            <li className='py-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '><a>About</a></li>
                            <li className='py-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '><a>Blog</a></li>
                            <li className='py-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '><a>Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>Links</h2>
                        <ul>
                            <li className='py-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '><a>Home</a></li>
                            <li className='py-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '><a>About</a></li>
                            <li className='py-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '><a>Blog</a></li>
                            <li className='py-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200 '><a>Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <div className='flex gap-3'>
                            <IoLogoInstagram className='text-3xl bg-white text-black rounded-sm p-1 cursor-pointer hover:text-primary duration-300 hover:translate-y-1' />
                            <FaFacebookF className='text-3xl bg-white text-black rounded-full p-1 cursor-pointer hover:text-primary duration-300 hover:translate-y-1' />
                            <FaLinkedinIn className='text-3xl bg-white text-black rounded-sm p-1 cursor-pointer hover:text-primary duration-300 hover:translate-y-1' />
                        </div>
                       <div className='mt-6'>
                       <p className='flex items-center gap-2 mt-4'> <IoIosPhonePortrait className='text-3xl' /> Noida, Uttar Pradesh</p>
                        <p className='flex items-center gap-2 mt-4'> <IoIosPhonePortrait className='text-3xl' /> +91 123456789</p>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer