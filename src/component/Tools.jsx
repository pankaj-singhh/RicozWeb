import React from "react";

const Tools = () => {
  return (
    <div className="w-full h-[95vh]">
      <div className="w-full h-[10vh] mt-10 ">
        <h1 className="text-3xl font-lg">
          Enhance Your Workflow with Integrated Tools
        </h1>
      </div>
            {/* subbigdiv */}
            <div className="w-full h-[150vh] ">
             <div className="w-[70vw] h-[77vh]  ml-52 mt-4 ">{/* center wala div */}
              
              <div className=" flex relative ml-20"> {/*for flex */}
              <div className="w-[270px] h-[100px] "> {/*container for contain massesing*/}
              <div className="w-[50px] h-[40px] ml-28 mt-1">
                <img src="./photo/toolsUpdticon.png" alt="" />
              </div>
              <div className="text-md mt-4">
                <p className="font-bold">Messaging Platform</p>
              </div>
              <div>
                <p>Stay connected and collaborate seamlessly with clients and team members.</p>
              </div>
              </div> {/*container1 ending */}
              
              <div className=" h-[100px] ml-5">
                <img src="./photo/line.svg" alt="" />
              </div>
                
              <div className="w-[270px] h-[100px]  ml-5"> {/*container for contain massesing*/}
              <div className="w-[50px] h-[40px] ml-28 mt-1">
                <img src="./photo/toolsUpdticon1.png" alt="" />
              </div>
              <div className="text-md mt-2">
                <p className="font-bold">Collaborative Workspace</p>
              </div>
              <div className="w-[200px] ml-6">
                <p >Experience the power of collaboration in our shared workspace together.</p>
              </div>
              </div> {/*container2 ending */}
              
              </div>{/*for flex ending*/}
              
              <img className="ml-96  absolute " src="./photo/toolsmainimg.svg" alt="" />

              
                   
               <div className=" flex ml-20 mt-44  relative "> {/*for flex */}
              <div className="w-[270px] h-[170px]  "> {/*container for contain massesing*/}
              <div className="w-[50px] h-[40px] ml-28 mt-2">
                <img src="./photo/srm.jpg" alt="" />
              </div>
              <div className="text-md mt-7">
                <p className="font-bold">Messaging Platform</p>
              </div>
              <div>
                <p>Stay connected and collaborate seamlessly with clients and team members.</p>
              </div>
              </div> {/*container1 ending */}
              
              <div className="  h-20 pt-28 ml-5">
                <img src="./photo/line2.svg" alt="" />
              </div>
                
              <div className="w-[270px] h-[170px]  ml-5"> {/*container for contain massesing*/}
              <div className="w-[50px] h-[40px] ml-28 mt-2">
                <img src="./photo/calender.png" alt="" />
              </div>
              <div className="text-md mt-7">
                <p className="font-bold">Collaborative Workspace</p>
              </div>
              <div className="w-[200px] ml-6">
                <p >Experience the power of collaboration in our shared workspace together.</p>
              </div>
              </div> {/*container lower ending */}
              
              </div>{/*for flex ending*/}
                <div className="w-[150px] h-[40px] bg-blue-600 ml-[30vw] mt-10 rounded-3xl"> {/* for button */}
                  <button className="mt-2 text-white ">Explore Tools</button>
                </div>
             </div>{/* center wala div ending */}
             
          
            </div>
      
    </div>
  );
};

export default Tools;
