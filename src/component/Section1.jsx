import React from 'react'

const Section1 = () => {
  return (
    <div className='bg-black w-full h-[100vh] '>
        <div className='text-3xl pt-12'>
            <h1 className='text-white'>Why Choose Ricoz?</h1>
        </div>

        <div className='subdiv flex flex-col mt-20   lg:flex-row'>
          <div className=' w-[120vh] h-[70vh]'>
            <img className='w-[50vw] h-[60vh] pl-60' src="./photo/stdy.svg" alt="" />
          </div>

          <div className=' ml-9 '>
            {/* -----sidedive ka subdiv------- */}
            <div className='text-white  flex   '>
                <div>
                    <img src="./photo/img1.svg" alt="" />
                </div>
                <div className=''>
                <div className='text-lg pr-32'>
                    <p>Vast Professional Network</p>
                </div>
                <div className='w-[55vh] pl-6'>
                    <p>Access a wide range of skilled tech professionals, all in one platform.</p>
                </div>
                </div>
            </div>
            {/*------end of subdiv of subdiv--------- */}
            <div className='text-white mt-5 flex '>
                <div>
                    <img src="./photo/img2.svg" alt="" />
                </div>
                <div className=''>
                <div className='text-lg pr-40'>
                    <p>Quality You Can Trust</p>
                </div>
                <div className='w-[55vh] pl-4'>
                    <p>Our stringent quality scoring system ensures that you receive exceptional services.</p>
                </div>
                </div>
            </div>
            <div className='text-white mt-5 flex '>
                <div>
                    <img src="./photo/img3.svg" alt="" />
                </div>
                <div className=''>
                <div className='text-lg pr-36'>
                    <p>Effortless Collaboration</p>
                </div>
                <div className='w-[55vh] pr-12'>
                    <p>Our integrated tools facilitate seamless communication and collaboration</p>
                </div>
                </div>
            </div>
            <div className='text-white flex mt-5 '>
                <div>
                    <img src="./photo/img4.svg" alt="" />
                </div>
                <div className=''>
                <div className='text-lg pr-40'>
                    <p>Save Time and Effort</p>
                </div>
                <div className='w-[55vh]' pr-4>
                    <p>With our platform, finding professionals and managing projects becomes effortless.</p>
                </div>
                </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default Section1