import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="./photo/logoR.png" alt="Logo" className="h-16 mr-2" />
                       
                    </div>
                    <div className="flex space-x-8 mr-10 ">
                        <a href="#about" className="text-gray-300 font-bold   hover:text-white ">About Us</a>
                        <a href="#services" className="text-gray-300 font-bold hover:text-white">Services</a>
                        <a href="#courses" className="text-gray-300 font-bold hover:text-white">Courses</a>
                        <a href="#contact" className="text-gray-300 font-bold hover:text-white">Contact</a>
                        
                    </div>
                    <div className='flex space-x-6 '></div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-2xl">
                            Sign Up 
                        </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
