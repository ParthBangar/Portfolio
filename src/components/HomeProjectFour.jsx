import React from 'react';
import { Link } from 'react-router';

import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiReactrouter } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";


import { SiNextdotjs } from "react-icons/si";
import { SiVercel } from "react-icons/si";

import { FaCode } from "react-icons/fa6";

const HomeProjectFour = () => {
    return (
        <div className='my-2'>
            <div className='flex flex-col lg:flex-row  justify-between items-center gap-4 m-2 p-2 border-2 border-[#33333330] rounded-md h-full'>

                <div className='flex-1'>
                    <div className='flex justify-center items-center bg-white border-2 border-gray-100 rounded-md shadow-2xl p-4'>
                        <img src="https://i.ibb.co/9mqCpw8T/Screenshot-2025-10-08-144910.png" alt="" className='w-[320px] rounded-md' />
                    </div>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-8'>
                        <span className='border-b-2 border-[#00df72]'>
                            GameHaven
                        </span>
                    </h1>
                    <p className='text-xl text-justify p-2'>A responsive game selling and discovery website built with React, TypeScript, and Chakra UI, featuring real-time game data integration, seamless browsing, and optimized UX for higher user engagement.</p>

                    <div className='grid grid-cols-4 gap-4 place-items-center my-8'>

                        <AiOutlineJavaScript className='text-5xl text-[#FFED29] border-2 bg-[#333333] border-[#333333] p-2 rounded-md' />

                        {/* <SiNextdotjs className='text-5xl text-[#333333] border-2 border-[#333333] p-2 rounded-md' /> */}

                        <FaReact className='text-5xl text-[#61DAFB] border-2 border-[#333333] p-2 rounded-md' />
                        
                        {/* <SiMongodb className='text-5xl text-[#47A248] border-2 border-[#333333] p-2 rounded-md' /> */}
                        <RiTailwindCssFill className='text-5xl text-[#06B6D4] border-2 border-[#333333] p-2 rounded-md' />

                        <SiVercel className='text-5xl text-[#333333] border-2 border-[#333333] p-2 rounded-md' />

                    </div>

                    <div className='grid grid-cols-1 gap-2 mr-2'>
                        <Link to="/projectNextProduct">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <FaCode />
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default HomeProjectFour;