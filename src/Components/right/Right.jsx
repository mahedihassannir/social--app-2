import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import './rigth.css'

const Right = () => {
    return (
        <div>
            <div className=''>
                <h2 className='text-lg font-bold pl-[90px]'>login with</h2>

                <div className='grid justify-center mt-3 gap-3'>
                    <button className='text-blue-400  py-3 border-2 px-7 flex items-center gap-2 '> <FaGoogle ></FaGoogle> login with google</button>
                    <button className='py-3 text-gray-600  border-2 px-7 flex items-center gap-2'> <FaGithub ></FaGithub> login with google</button>

                </div>
            </div>
            {/* here is kids section */}
            <div>
                <h1 className='text-lg font-bold pl-[90px] mt-10 mb-3'>Find us on</h1>
                <div className='grid justify-center '>
                    <button className='px-20 py-4 border-2 flex items-center gap-3'> <FaFacebook></FaFacebook> Facebook</button>

                    <button className='px-20 py-4 border-2 flex items-center gap-3'> <FaTwitter></FaTwitter> Facebook</button>
                    <button className='px-20 py-4 border-2 flex items-center gap-3'> <FaInstagram></FaInstagram> Facebook</button>

                </div>
            </div>
            {/* last side */}
            <div>

                <div className='grid justify-center pb-2 mr-4 mt-10 bg-[#F3F3F3]'>
                    <h1 className='text-lg   py-3 font-bold'>Q-Zone</h1>
                    <img src="https://i.ibb.co/1JDtH3S/qZone1.png" alt="" />
                    <img src="https://i.ibb.co/qgdQGjL/qZone2.png" alt="" />
                    <img src="https://i.ibb.co/fQYbGC7/qZone3.png" alt="" />
                </div>

            </div>
            <div id='banner' className='grid  justify-center mt-3'>
                <h1 className='text-4xl text-white   text-center pt-3    font-bold'>Create an Amazing Newspaper</h1>

                <p className='text-center text-white p-0 w-11/12 mx-auto'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='mt-4  m-20  text-white font-bold text-lg bg-[#D72050]'>Learn More </button>


            </div>
        </div>
    );
};

export default Right;