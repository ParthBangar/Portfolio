import React, { useEffect, useState } from "react";

import { Link, NavLink, useLocation } from 'react-router';
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const ProjectRoomies = () => {

    const { pathname } = useLocation();

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className='max-w-[1600px] mx-auto px-4'>
            {/* navbar  */}
            <div className="sticky top-0 z-1000 bg-[#fbf7f4] py-4 border-b border-gray-300">
                <div className='flex justify-between items-center gap-4 px lg:px-16'>
                    <div className='flex items-center justify-center gap-2'>
                        <Link to="/home#hero">
                            <img className='h-12' src="https://i.ibb.co/yn97fytF/logo-fahim-arman.png" alt="" />
                        </Link>

                        <Link to="/home#hero">
                            <h1 className='text-3xl font-semibold'>fahim_arman</h1>
                        </Link>
                    </div>

                    <div className='hidden lg:flex justify-between items-center gap-8'>
                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/allProjects">/allProjects</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectBridge">./Roomies</NavLink>
                    </div>

                    <div>

                    </div>

                    <div className='flex flex-col lg:hidden' onClick={() => setOpenMenu(!openMenu)}>
                        {
                            openMenu ? <RiCloseLargeFill className='text-3xl lg:hidden' /> : <HiMenu className='text-3xl lg:hidden' />
                        }

                        <div className={`lg:hidden absolute flex flex-col justify-end duration-500 gap-2 bg-[#fbf7f4] rounded-md p-2 border border-gray-300 ${openMenu ? 'top-14 right-0' : '-top-35 right-0'}`}>

                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/allProjects">/allProjects</NavLink>

                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectBridge">./Roomies</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* header  */}
            <div className='my-12'>
                <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                    <span className='border-b-2 border-[#00df72]'>
                        Roomies
                    </span>
                </h1>
                <p className='text-lg lg:text-2xl font-medium text-justify'>
                    Roomies is a web app for finding roommates or rooms to rent, offering secure authentication, detailed listings, like-to-contact features, and a personal dashboard with posts, likes, and rent analytics.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row  justify-between items-center gap-8'>

                <div className='flex-1 bg-white border-2 rounded-md'>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/Q3ymNpkh/Roomies-github.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/DDzPJ751/btobrodge-002.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/Rk7p7LPj/Roomies-post-03.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/bMyXQHzJ/Roomies-post-04.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/V06yJgMc/Roomies-post-05.png" />
                        </div>
                    </Carousel>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-8'>
                        <span className='border-b-2 border-[#00df72]'>
                            Key Features of Roomies
                        </span>
                    </h1>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Roomies helps you find and post rooms for rent with ease.</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>Like a listing to reveal the owner's contact details.</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>View your posts, likes, and stats in your personal dashboard.</div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Users can view, update, and delete only their own roommate posts.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Public listing page shows all roommate posts with search and 'See More' options.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Switch between light and dark modes for better accessibility and comfort.
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 py-4'>
                        <a className="col-span-1 lg:col-span-2" href="https://fascinating-sunflower-cfec7f.netlify.app/" target='_blank' rel="noopener noreferrer">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <PiLinkSimpleBold />
                                Live Link
                            </button>
                        </a>

                        <a href="https://github.com/Arman3747/roomies-client" target='_blank' rel="noopener noreferrer">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <FaGithub />
                                Github Client
                            </button>
                        </a>

                        <a href="https://github.com/Arman3747/roomies-server" target='_blank' rel="noopener noreferrer">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex items-center justify-center gap-2'>
                                <FaGithub />
                                Github Server
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* <div className='bg-white border-2 rounded-md'>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/Q3ymNpkh/Roomies-github.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/pjKWfvJq/Roomies-post-02.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/Rk7p7LPj/Roomies-post-03.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/bMyXQHzJ/Roomies-post-04.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/V06yJgMc/Roomies-post-05.png" />
                    </div>
                </Carousel>
            </div> */}

            {/* <div className='my-12'>
                <h3 className='text-2xl lg:text-3xl font-semibold mb-8'>Key Features of Roomies</h3>


                {features.map((feature) => (
                    <div key={feature.roomiesId} className='flex gap-2 mb-2'>
                        <div>
                            <span className="text-green-500 text-3xl font-medium">✓</span>
                        </div>

                        <div className='text-lg lg:text-xl font-medium'>
                            <span className='font-bold text-xl lg:text-2xl'>
                                {feature.roomiesFeature}
                            </span> -&nbsp; {feature.roomiesDescription}
                        </div>
                    </div>
                ))}
            </div> */}



            <div>
                <h3 className='text-2xl lg:text-3xl font-semibold my-12'>
                    <span className='border-b-2 border-[#00df72]'>
                        Main Technology Stack - Roomies
                    </span>
                </h3>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>

                    <div className='text-lg lg:text-2xl col-span-1 flex justify-end items-start lg:items-center'>
                        Frontend
                    </div>

                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>

                        {/* <div className="border-2 p-1 flex justify-center items-center gap-2 bg-[#333333] rounded-md">
                            <FaHtml5 className='text-xl text-[#E34F26]' />
                            <p className="text-white">HTML5</p>
                        </div>

                        <div className="border-2 p-1 flex justify-center items-center gap-2 bg-[#333333] rounded-md">
                            <FaCss3Alt className='text-xl text-[#663399]' />
                            <p className="text-white">CSS3</p>
                        </div> */}




                        <img src="https://img.shields.io/badge/HTML5-333333?logo=html5" alt="" />
                        <img src="https://img.shields.io/badge/CSS3-333333?logo=css" alt="" />
                        <img src="https://img.shields.io/badge/JavaScript-333333?logo=javascript" alt="" />
                        <img src="https://img.shields.io/badge/React-333333?logo=react" alt="" />
                        <img src="https://img.shields.io/badge/Tailwind_CSS-333333?logo=tailwindcss" alt="" />
                        <img src="https://img.shields.io/badge/Daisy_UI-333333?logo=daisyui" alt="" />
                        <img src="https://img.shields.io/badge/React_Router-333333?logo=reactrouter" alt="" />
                        <img src="https://img.shields.io/badge/Swiper-333333?logo=swiper" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Backend</div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/Node.js-333333?logo=nodedotjs" alt="" />
                        <img src="https://img.shields.io/badge/Express.js-333333?logo=express" alt="" />
                        <img src="https://img.shields.io/badge/MongoDB-333333?logo=mongodb" alt="" />
                        <img src="https://img.shields.io/badge/Nodemon-333333?logo=nodemon" alt="" />

                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Authentication
                        <span className='hidden lg:inline-block'>& Security</span>
                    </div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/Firebase-333333?logo=firebase" alt="" />
                        <img src="https://img.shields.io/badge/JSON_Web_Token-333333?logo=jsonwebtokens" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Supporting Tools</div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/.ENV-333333?logo=dotenv" alt="" />
                        <img src="https://img.shields.io/badge/NPM-333333?logo=npm" alt="" />
                        <img src="https://img.shields.io/badge/Vite-333333?logo=vite" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Version Control</div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/Git-333333?logo=git" alt="" />
                        <img src="https://img.shields.io/badge/GitHub-333333?logo=github" alt="" />
                    </div>

                    <div className='text-right text-lg lg:text-2xl col-span-1'>Web Hosting <span className='hidden lg:inline-block'>& Deployment</span></div>
                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>
                        <img src="https://img.shields.io/badge/Vercel-333333?logo=vercel" alt="" />
                        <img src="https://img.shields.io/badge/Netlify-333333?logo=netlify" alt="" />
                    </div>
                </div>
            </div>

            <div className="my-12 mx-4">
                <h1 className='text-3xl font-medium my-12'>
                    <span className='border-b-2 border-[#00df72]'>
                        Challenges & Solutions
                    </span>
                </h1>

                <p className="text-lg text-justify">
                    Faced challenges with secure authentication, protected routes, conditional data display, responsiveness, and user feedback. Solved using Firebase, server-side filtering, like-based reveals, Tailwind CSS, DaisyUI, toast notifications, SweetAlert, and loading spinners for seamless experience.
                </p>
            </div>

            <div className="my-12 mx-4">
                <h1 className='text-3xl font-medium my-12'>
                    <span className='border-b-2 border-[#00df72]'>
                        Future Plans
                    </span>
                </h1>

                <p className="text-lg text-justify">
                    Roomies plans to add real-time roommate chat, advanced lifestyle-based search filters, a user and listing review system, and launch mobile apps for Android and iOS to enhance convenience and engagement.
                </p>
            </div>

            <div className=" bg-[#333333] text-[#fbf7f4] py-4">
                <div className='flex justify-center items-center gap-4 px-16'>
                    <div className='flex justify-between items-center gap-8'>
                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/allProjects">/allProjects</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectBridge">./Roomies</NavLink>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectRoomies;