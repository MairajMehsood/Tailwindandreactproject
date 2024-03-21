import React from 'react'

import shop1 from "../../assets/shop_1.png"
import shop2 from "../../assets/shop_2.png"
import shop3 from "../../assets/shop_3.png"
import Slider from 'react-slick'

const Imglist=[
    {
        heading:"30% off on all Women's Wear",
        subheading:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        btn:"Order Now",
        img:shop1
    },
    {
        heading:"Upto 50% off on all Men's Wear",
        subheading:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        btn:"Order Now",
        img:shop2
    },
    {
        heading:"70% off on all Products Sale",
        subheading:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
        btn:"Order Now",
        img:shop3
    }
]
const Herosec = () => {
    var settings = {
        dots: false,
        arrows:false,
        autoplay:true,
        infinite: true,
        speed: 500,
        pauseOnHover:false,
        pauseOnFocus:true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (

    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 '>
        {/* bgimg */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 '></div>
     {/* hero section  */}
     <div className="container p-8  sm:pb-0">
        <Slider {...settings}>
            {Imglist.map((item)=>{
                return(
                    <div key={item.id}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
                        {/* text section */}
                        <div className='flex flex-col gap-4  order-2 sm:order-1 relative z-10 mt-[80px]'>
                            <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-delay="400"  className='text-5xl sm:text-6xl lg:text-7xl font-bold '>{item.heading}</h1>
                            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" className='text-sm'>{item.subheading}</p>
                            <div>
                                <button  data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full '
                                >{item.btn}</button>
                            </div>
                        </div>
                        {/* img section */}
                        <div className='order-1 sm:order-2'>
                            <div>
                                <img data-aos="zoom-in" data-aos-duration="500" data-aos-delay="300"  className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto ' src={item.img}/>
                            </div>
                        </div>
                    </div>
                   </div>    
                )
            })}
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            {/* text section */}
            <div className='flex flex-col gap-4  order-2 sm:order-1 relative z-10 mt-[80px]'>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold '>30% off on all Women's Wear</h1>
                <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <div>
                    <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full '
                    >Order Now</button>
                </div>
            </div>
            {/* img section */}
            <div className='order-1 sm:order-2'>
                <div>
                    <img className='w-[300px] h-[300px sm:h-[450px]  scale-125 mx-auto object-contain ' src={shop1}/>
                </div>
            </div>
        </div>
       </div>
       
        </Slider>
       
     </div>
    </div>
  )
}

export default Herosec