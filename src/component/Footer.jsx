import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className='w-full h-[56vh] text-white  bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900'>
       <div className='w-[90vw] h-[45vh] ml-20 pt-16  flex flex-col lg:flex-row'> {/* for flex */}
         <div className='  ml-20'>
            <img className='w[100px] h-[100px]' src="./photo/logoR.png" alt="" />
            </div>
         <div className='ml-20'>
            <div className='text-md'><h1 className='font-bold'>Company</h1></div>
          <div className='text-sm mt-5'>
           <p className='mt-2'> About Us</p>
           <p className='mt-2'>Services</p>
           <p className='mt-2'>Courses</p>
           <p className='mt-2'>Contact us</p>
          </div>
         </div>
         <div className='ml-20'>
            <div className='text-md mt-3'><h1 className='font-bold'>Services</h1></div>
            <div>
            <p className='mt-2'> Web Development</p>
           <p className='mt-2'>Performance Marketing</p>
           <p className='mt-2'>Social Media Marketing</p>
            <p className='mt-2'>App Development</p>
            <p className='mt-2'>Graphic Design</p>
            <p className='mt-2'>UI/UX Design</p>

            </div>
          
         </div>
         <div className='ml-20'>
            <div className='text-md'><h1 className='font-bold'>Email Us</h1></div>
             <p className='text-md font-bold mt-3'>Ricoz1234@gmail.com</p>
             <div className='w-[180px] inset-x-0 bottom-0 h-0.5 bg-gray-600 '></div>
             
             <div className='mt-10'><h1 className='text-md font-bold'>Contact Us</h1>
             </div>
             <p className='font-bold mt-3'>+91 9098885099</p>
             <div className='mt-10'>
                <img className='' src="./photo/app.svg" alt="" /></div>
         </div>

         <div className='ml-20'>
            <div ><h1 className='text-md font-bold'>SUBSCRIBE TO NEWSLETTER</h1></div>
            <div className='flex mt-3'>
                <input className='rounded-3xl' type="text" name="" id="" placeholder='Enetr Email' />
            <div>
           <button className='bg-gray-300 text-blue-500 rounded-full'> <IoIosArrowRoundForward /></button>
            </div>
            </div>
         </div>

        </div> {/*flex ending */}

        <div className='w-[75vw] inset-x-0 bottom-0 h-0.5 bg-white mt-1 ml-36 hover:bg-blue-700'>
        </div>
        <div className="text-sm">© 2023 Ricoz. All Rights Reserved.</div>
    </div>
  )
}

export default Footer