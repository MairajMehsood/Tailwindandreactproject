import React from 'react'
import img1 from '../../assets/shirt1.png'
import img2 from '../../assets/shirt2.png'
import img3 from '../../assets/shirt3.png'
import { MdStar } from "react-icons/md";

export const Bestproduct = () => {

    const productcardlist = [
        {
            id: 1,
            img: img1,
            head: "Casual Wear",
            para: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
            btn: "Order Now"

        },
        {
            id: 2,
            img: img2,
            head: "Printed Shirt",
            para: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
            btn: "Order Now"

        },
        {
            id: 3,
            img: img3,
            head: "Women Shirt",
            para: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
            btn: "Order Now"

        }
    ]
    return (
        <>
            <div className="container mx-auto p-2 sm:p-12">
                {/* upper text */}
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className='text-left px-2'>
                    <p className='text-sm text-primary font-bold italic'>Top Rated Products for you</p>
                    <h2 className='text-3xl font-bold mt-2 inline-block border-b-4 border-primary/40'>Products</h2>
                    <p className='text-gray-400 text-sm mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* lower text */}
                <div className='flex flex-wrap gap-[8rem] lg:gap-[0px] justify-center lg:justify-around  md:justify-start mt-[140px] '>
                    {productcardlist.map((item,index) => {
                        return (
                            <div data-aos="zoom-in" data-aos-delay={index*200}  className='group shadow-2xl max-w-[300px] lg:max-w-[300px] md:max-w-[270px]  p-4 rounded-lg relative hover:bg-black/80 hover:text-white transform transition-all duration-300'>
                                <div className='h-[100px]'>
                                    <img className='w-[150px] mx-auto  absolute top-0 right-0 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 drop-shadow-md ' src={item.img} />
                                </div>
                                <div >
                                <span className='flex gap-2 text-primary justify-center'><MdStar /><MdStar /><MdStar /><MdStar /></span>
                                </div>
                                <h2 className='text-center font-bold text-xl'>{item.head}</h2>
                                        
                                <p className='text-sm line-clamp-2 text-gray-500 group-hover:text-white '>{item.para}</p>
                                <div className='text-center'>
                                    <button class=" bg-primary hover:scale-105  text-white py-1 px-4 rounded-full my-4 group-hover:bg-white group-hover:text-primary duration-300 ">{item.btn}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}
