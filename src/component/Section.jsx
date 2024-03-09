import React from "react";

const Section = () => {
  return (
    <div className="  h-[100vh] flex bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900">
      <div className=" w-[40vw] h-[60vh] text-white mt-20 ml-20   ">
        <div className="">
            <h1 className="text-[8vh] pr-40">Discover Top Tech</h1>
          <h1 className="text-[8vh]"> Professionals in Minutes.</h1>
        </div>
        <div className="mt-4 text-lg text-bold  ">
         <p className="absolute m-0"> Streamline Your Business Needs with Ricoz's All-in-</p>  
         <p className=" absolute mt-5 m-0">One Tech Service Hub.</p>
        </div>
        <div className="mt-20 mr-20  absolute">
          <button className="  w-[20vh] h-10 bg-blue-600 text-bold rounded-xl">Get Started</button>
        </div>
      </div>
      <div className="">
        <div className=" absolute right-20 mt-10   ">
          <img className='' src="./photo/group.svg" alt="" />
        </div>
        <div className="mt-96 ml-52">
          <img src="./photo/second.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section;
