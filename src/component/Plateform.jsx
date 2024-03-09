import React from 'react'

const Plateform = () => {
  return (
    <div className='mt-10'>
        <div className=' h-xl text-5xl mr-44 '>
            <h1 className='pr-32'>Explore Our Platform's Unique Features</h1>
        </div>
        <div className='secondiv w-auto h-[60vh]  flex flex-col items-center text-white mt-12 lg:flex-row '>
            <div className='w-[350px] h-[50vh] bg-indigo-900  ml-24 rounded-3xl lg:ml-44'>
                <div  className='roundwd rounded-full'>
                    <img className='pl-8' src="./photo/l1.svg" alt="" />
                </div>

                <div className='text-xl mt-5 '>
                <p className='pr-12'>Wide Range of Services</p>
                </div>
                <div className='ml-12 w-[250px] h-[30vh]'>
                  <p className='pl-0'>Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services</p>
                </div>
            </div>
            <div className='w-[350px] h-[50vh] bg-indigo-900 rounded-3xl ml-20'>
                <div  className='roundwd rounded-full  '>
                    <img className='pl-8' src="./photo/l2.svg" alt="" />
                </div>

                <div className='text-xl mt-5'>
                   <p className='pr-36'>Instant Search</p>
                </div>
                <div className='ml-12 w-[250px] h-[30vh]'>
                <p className='pl-0'>Get connected to top tech professionals within moments. Our intuitive search function ensures quick access.</p>
                </div>
            </div>


            <div className='w-[350px] h-[50vh] bg-indigo-900 rounded-3xl ml-20'>
                <div className='roundwd rounded-full'>
                    <img className='pl-8' src="./photo/l3.svg" alt="" />
                </div>

                <div className='text-xl mt-5'>
                   <p className='pr-32'>Quality Scoring</p>
                </div>
                <div className='ml-12 w-[250px] h-[30vh] '>
                <p>We maintain high service standards. Our unique scoring system ensures you receive top-notch quality from professionals.</p>
                </div>
            </div>





        </div>
    </div>
  )
}

export default Plateform