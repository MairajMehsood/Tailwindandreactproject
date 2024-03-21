import React from 'react'
import women1 from '../../assets/shop_2.png'
import women2 from '../../assets/women2.jpg'
import women3 from '../../assets/women3.jpg'
import women4 from '../../assets/women4.jpg'
import women5 from '../../assets/women5.jpg'
import { MdStar } from "react-icons/md";


const Productslist = () => {
    const productlist = [
        {
            id: 1,
            img: women1,
            head: "Women Ethnic",
            sub_head: "white",
            rate: 5
        },
        {
            id: 2,
            img: women2,
            head: "Women western",
            sub_head: "Red",
            rate: 4.5
        },
        {
            id: 3,
            img: women3,
            head: "Goggles",
            sub_head: "brown",
            rate: 7.5
        },
        {
            id: 4,
            img: women4,
            head: "Printed T-Shirt",
            sub_head: "Yellow",
            rate: 4.4
        },
        {
            id: 5,
            img: women5,
            head: "Fashin T-Shirt",
            sub_head: "Pink",
            rate: 4.5
        }

    ]
    return (
        <>
            <div className="container mx-auto p-4">
                {/* upper text */}
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className='text-center'>
                    <p className='text-sm text-primary font-bold italic'>Top Selling Products for you</p>
                    <h2 className='text-3xl font-bold mt-2 inline-block border-b-4 border-primary/40'>Products</h2>
                    <p className='text-gray-400 text-sm mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>


                {/* lower text*/}
                <div className='flex justify-evenly mt-8 flex-wrap gap-8'>
                    {productlist.map((item, index) => {
                        // Calculate the delay for each card
                        const delay = index * 100; 
                        return (
                            <div data-aos="fade-up" data-aos-delay={delay} key={item.id}>
                                <img className='w-[150px] h-[220px] object-cover rounded-md' src={item.img} />
                                <h4 className='font-semibold mt-2'>{item.head}</h4>
                                <p className='text-gray-600 text-[16px]'>{item.sub_head}</p>
                                <span className='flex flex-row gap-2 items-center'>
                                <MdStar className='text-primary' /> {item.rate}
                                </span>
                            </div>
                        );
                    })}
                </div>

                <div className='text-center mt-8'>
                    <button className=' bg-primary rounded-md text-white py-1 px-5 cursor-pointer hover:bg-primary/40 transition-all duration-200'>View All Buttons</button>
                </div>

            </div>
        </>
    )
}

export default Productslist