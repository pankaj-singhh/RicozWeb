import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Courses = () => {
  return (
    <div className='w-full h-[80vh]  mt-16'>
        <div className=' w-full h-[10vh]  flex flex-col lg:flex-row'>
            <div className='w-[110vh] h-[10vh] ' > 
                <div className='text-3xl '>
                    <p className='font-medium mr-10'>Unlock New Skills with Our Courses</p>
                </div>
                <div className='mr-64'>
                    <p >Learn and Grow at Your Own Pace.</p>
                </div>
            </div>
            <div className='w-[140px] h-[45px] bg-blue-700 rounded-full  ml-[500px]'>
                <button className='mt-2 text-lg text-white'>Explore More</button>
            </div>

        </div>
        <div className='w-full h-[90vh] pl-28 mt-10 flex flex-col lg:flex-row '>
            <div className='w-[370px] h-[57vh] bg-slate-100 rounded-lg '>
                <div className=''>
                    <img className='rounded-lg' src="./photo/skillimg1.svg" alt="" />
                </div>
                <div className='border w-[300px] '>
                    <h1 className='text-3xl'>Web Development Mastery</h1>
                </div>
                <div className=' text-xl   mr-52'>
                   <h1 className='font-bold'>₹ 60,000</h1>
                </div>
                <div className='w-[300px] h-[70px]  ml-5'>
                    <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
                </div>
                <div className=' flex ml-5'>
                <div className='text-blue-500'>
                    <button>Learn More</button>
                </div>
                <div className='text-blue-500 text-2xl'>
                <IoIosArrowRoundForward />
                </div>
                </div>
               
            </div>
            <div className='w-[370px] h-[57vh] bg-slate-100 ml-16 rounded-lg'>
                <div>
                    <img className='rounded-lg' src="./photo/skillimg2.svg" alt="" />
                </div>
                <div className='pr-24'>
                    <h1 className='text-3xl'>Digital Marketing Fundamentals</h1>
                </div>
                <div className=' text-xl   mr-52'>
                   <h1 className='font-bold'>₹ 80,000</h1>
                </div>
                <div className='w-[320px] h-[70px]  ml-5'>
                    <p>Navigate the Digital Landscape. Explore the world of digital marketing. Acquire skills in SEO, social media, and online advertising.</p>
                </div>
                <div className='flex ml-5'>
                <div className='text-blue-500'>
                    <button>Learn More</button>
                </div>
                <div className='text-blue-500 text-2xl'>
                <IoIosArrowRoundForward />
                </div>
                </div>
               
            </div>
            <div className='w-[370px] h-[57vh] bg-slate-100 ml-16'>
                <div>
                    <img className='rounded-lg' src="./photo/skillimg3.svg" alt="" />
                </div>
                <div className='pr-28'>
                    <h1 className='text-3xl'>Graphic Design Fundamentals</h1>
                </div>
                <div className=' text-xl   mr-52'>
                   <h1 className='font-bold'>₹ 60,000</h1>
                </div>
                <div className='w-[320px] h-[70px]  ml-5 ' >
                    <p>Unleash your creativity with graphic design. Learn layout, typography, and visual communication.</p>
                </div>
                <div className='flex ml-5 '>
                <div className='text-blue-500'>
                    <button>Learn More</button>
                </div>
                <div className='text-blue-500 text-2xl'>
                <IoIosArrowRoundForward />
                </div>
                </div>
               
            </div>
        </div>

    </div>
  )
}

export default Courses