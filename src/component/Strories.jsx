import React from "react";

const Strories = () => {
  return (
    <div className="w-full h-[90vh] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900  mt-16">
      <div className="w-full h-[10vh]  ">
        <div className="text-3xl text-white pt-16">
          <p className="font-medium mr-10">
            Real Stories from Real Professionals
          </p>
        </div>
      </div>

      <div className="w-full h-[90vh] pl-28 mt-24 flex flex-col lg:flex-row ">
        <div className="w-[350px] h-[57vh] bg-slate-100 rounded-3xl ">
          <div className="flex mt-8 h-[80px]">
            <div className=" ">
              <img className="ml-8 " src="./photo/stryimg1.svg" alt="" />
            </div>
            <div className="mt-3">
              <div className=" w-[240px] h-[40px] ">
                <h1 className="text-2xl pr-24">John Doe</h1>
              </div>
              <div className=" text-sm w-[240px] h-[20px]  ">
                <h1 className="font-sm text-gray-600 pr-40">Graduated</h1>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[70px]  ml-5">
            <p className="text-3xl">"I recommend this to All"</p>
          </div>

          <div className="w-[250px] h-[100px] mt-5 ml-10 ">
            <p className="text-gray-500">
              Ricoz connected me with amazing clients. The quality scoring
              system ensures I work on exciting projects while maintaining my
              reputation.
            </p>
          </div>
          <div className="mt-5 ml-10">
            <img src="./photo/star1.svg" alt="" />
          </div>
        </div>

        {/* card1 completed */}

        <div className="w-[350px] h-[57vh] bg-slate-100 ml-20 rounded-3xl ">
          <div className="flex mt-10">
            <div className="ml-6  w-[150px]">
              <img className="" src="./photo/stryimg2.svg" alt="" />
            </div>
            <div>
              <div className=" w-[250px] h-[40px] mt-2 ">
                <h1 className="text-3xl pr-20">Alice Smith</h1>
              </div>
              <div className=" text-sm w-full h-[20px]   ">
                <h1 className=" text-gray-600 pr-36 ">Ui/UX designer</h1>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[70px]  ml-5 mt-3">
            <p className="text-3xl pr-16">“The Support is Awesome”</p>
          </div>

          <div className="w-[250px] h-[100px] mt-5 ml-10 ">
            <p className="text-gray-500">
            As a freelancer, Ricoz's instant search feature saves me time. It's a one-stop platform for all my degital marketing needs.
            </p>
          </div>
          <div  className="mt-5 ml-10">
            <img src="./photo/star1.svg" alt="" />
          </div>
        </div>

         {/*-------card2 completed-------  */}


         <div className="w-[350px] h-[57vh] bg-slate-100 ml-20 rounded-3xl ">
          <div className="flex mt-10 ">
            <div className="  w-[350px] ml-6">
              <img className="" src="./photo/stryimg3.svg" alt="" />
            </div>
            <div className=" w-[250px] h-[80px] ">
              <div className="w-[250px] h-[40px] mt-2  ">
                <h1 className="text-3xl pr-16">Sophia Miller</h1>
              </div>
              <div className=" text-sm   mr-52">
                <h1 className=" text-gray-600 pl-2">Student</h1>
              </div>
            </div>
          </div>

          <div className="w-[300px] h-[70px]  ml-5 ">
            <p className="text-3xl">“A Game Changer For Us”</p>
          </div>

          <div className="w-[250px] h-[100px] mt-5 ml-9 border">
            <p className="text-gray-500">
            I've learned and earned on Ricoz. The courses are well-designed, and the integrated tools streamline communication with clients.
            </p>
          </div>
          <div  className="mt-5 ml-10">
            <img src="./photo/star1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strories;
