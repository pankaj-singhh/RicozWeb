import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[90vh] bg-black pt-5'>


      <div className=' ml-20 mt-5 flex flex-col lg:flex-row'> {/*for flex div1 div2*/}
        <div className='w-[45vw] h[71vh] '> {/*div1 */}
          <img className='pl-20 mt-2' src="./photo/contactimg.svg" alt="" />
        </div>
        <div className=' w-[45vw] '>  {/*div2 */}
         <div className='text-2xl mt-5'>
          <h1 className='font-bold text-white'>Get in Touch</h1>
         </div>
         <div className="name mt-5 mr-96 text-white">
          <label>Name</label>
          </div>
          <input className='opacity-0 absolute ' type="text" />
          <div class="absolute  w-96 h-0.5 bg-gray-400 ml-32 mt-3"></div>
          
           <div className='ml-32 flex mt-16'>  { /*flex for mail and number*/}
           
          <div className='mail'>
          <div className="mail text-white">
          <label>Mail</label>
          </div> 
          <input className='opacity-0 absolute ' type="text" />
          <div class="absolute  w-44 h-0.5 bg-gray-400 mt-3"></div>
          </div>
          <div className='number ml-44'>
          <div className="number text-white">
          <label>Number</label>
          </div> 
          <input className='opacity-0 absolute ' type="text" />
          <div class="absolute  w-44 h-0.5 bg-gray-400 mt-3"></div>
          </div>
           </div>
           <div className='massage mt-16 mr-96'> {/*for massage */}
          <div className="message text-white">
          <label>Message</label>
          </div> 
          <input className='opacity-0 absolute ' type="text" />
          <div class="absolute  w-96 h-0.5 bg-gray-400 ml-32 mt-3"></div>
          </div> {/* ending of message div */}
          <div className='w-[150px] h-[40px] bg-blue-500 text-lg rounded-3xl mt-20 ml-60'>
            <button className='mt-1 font-lg text-white'>Submit Now</button>
          </div>
        </div> {/* ending of  div2 */} 

        
      </div>  {/*flex ending div1 div2*/}
      <div className=" w-[68vw] inset-x-0 bottom-0 h-0.5 bg-gray-400 mt-10 ml-52">
      </div>
      <div className='mt-3 flex  flex-col lg:flex-row ml-52'>
      <div className='flex'> {/*call num */}
      <div>
      <img src="./photo/call.svg" alt="" />
     </div>
     <div className='mt-5 text-white ml-2'><p>+91-7011112666</p></div>
      </div>
      <div className='flex ml-64'> {/*mail link */}
      <div>
      <img src="./photo/mail.svg" alt="" />
     </div>
     <div className='mt-5 text-white ml-2'> <p>info@Ricoz.in</p> </div>
      </div>
      <div className='flex ml-64'> {/*insta link */}
      <div>
      <img src="./photo/insta.svg" alt="" />
     </div>
     <div className='mt-5 text-white ml-2'><p>Ricoz.in</p></div>
      </div>
      </div>
    </div>
  )
}

export default Contact