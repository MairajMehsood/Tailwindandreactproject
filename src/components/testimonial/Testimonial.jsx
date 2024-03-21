import React from 'react'
import Slider from 'react-slick'
import img1 from '../../assets/test1.jpg'
import img2 from '../../assets/test2.jpg'
import img3 from '../../assets/test3.jpg'
import img4 from '../../assets/test4.jpg'
import { RiDoubleQuotesR } from "react-icons/ri";

const tesslider = [
    {
        id: 1,
        img: img1,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        heading: "Mairaj khan"
    },
    {
        id: 2,
        img: img2,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        heading: "Ashar Hussian"
    },
    {
        id: 3,
        img: img3,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        heading: "Tauseef Ahmed"
    },
    {
        id: 4,
        img: img4,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        heading: "Noman Khan"
    }
    ,
    {
        id: 5,
        img: img4,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        heading: "Ahmed "
    }
    ,
    {
        id: 6,
        img: img4,
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        heading: "Joncena"
    }

]
const Testimonial = () => {


    var slidersetting = {
        dots: true,
        arrows: false,
        infinite: true,
        // autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='container mx-auto p-4 mt-6'>
            {/* slider upper text */}

            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className='text-center'>
                <p className='text-sm text-primary font-bold italic'>What our customers are saying</p>
                <h2 className='text-3xl font-bold mt-2 inline-block border-b-4 border-primary/40'>Testimonials</h2>
                <p className='text-gray-400 text-sm mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
            </div>

            {/* lower  text */}
         <div className='flex flex-col gap-4 '>
            
         <Slider {...slidersetting}>
                    {tesslider.map((item) => {
                        return (
                            <div key={item.id} className=' py-4' >
                            <div className='flex  flex-col relative gap-4 bg-primary/10 shadow-lg rounded-xl w-full sm:max-w-[300px] lg:max-w-[450px] mx-auto py-8 px-2 sm:px-6 mt-8' >
                              
                                    <img className=' rounded-full w-20 h-20 ' src={item.img} alt="slider1" />
                                    <p className='text-sm text-gray-500'>{item.para}</p>
                                    <h2 className=' text-lg font-bold text-black/80 ' >{item.heading}</h2>
                                    <div className=' absolute top-[70px] right-0 text-6xl  font-serif '><RiDoubleQuotesR  className='text-black/20'/></div>
                               
                            </div>
                        </div>
                        )
                    })}


                </Slider>
         </div>
           

        </div>
    )
}

export default Testimonial