import React, { useEffect, useState } from "react";

import { Link, NavLink, useLocation } from 'react-router';
import { HiMenu } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const ProjectBloodConnect = () => {

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
                            <h1 className='text-3xl font-semibold'>parth_bangar</h1>
                        </Link>
                    </div>

                    <div className='hidden lg:flex justify-between items-center gap-8'>
                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/allProjects">/allProjects</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectBridge">./AIResumeAnalyzer</NavLink>
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
                            
                            <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectBloodConnect">./AIResumeAnalyzer</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            {/* header  */}
            <div className='my-12'>
                <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
                    <span className='border-b-2 border-[#00df72]'>
                        AIResumeAnalyzer
                    </span>
                </h1>
                <p className='text-lg lg:text-2xl font-medium'>
                    An AI-powered Applicant Tracking System that automates resume screening by analyzing and ranking candidates against job descriptions using NLP and OpenAI. Built a scalable full-stack architecture enabling real-time feedback, resume parsing, and job-candidate matching with enterprise-grade performance.
                </p>
            </div>

            <div className='flex flex-col lg:flex-row  justify-between items-center gap-8'>
                <div className='flex-1 bg-white border-2 rounded-md'>
                    <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/5Xfzst3H/Ai-Resume-Analyzer.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/7JP5wLyM/Screenshot-2025-10-08-154252.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/MkSRMKrj/Screenshot-2025-10-08-154354.png" />
                        </div>
                        <div>
                            <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/TB1yXCKG/Screenshot-2025-10-08-154424.png" />
                        </div>
                        <div>
                            {/* <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/hJGV8rnp/Blood-Connect-post-05.png" /> */}
                        </div>
                        <div>
                            {/* <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/VWTyBTBw/Blood-Connect-post-06.png" /> */}
                        </div>
                        <div>
                            {/* <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/6Rs9xYNb/Blood-Connect-post-07.png" /> */}
                        </div>
                        <div>
                            {/* <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/JRfd2Z0S/Blood-Connect-post-08.png" /> */}
                        </div>
                        <div>
                            {/* <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/WWB9WysS/Blood-Connect-post-09.png" /> */}
                        </div>
                        <div>
                            {/* <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/bgP1rKLC/Blood-Connect-post-10.png" /> */}
                        </div>
                        <div>
                            {/* <img className='h-60 lg:h-120 w-auto object-contain' src="https://i.ibb.co/wZynrKFz/Blood-Connect-post-11.png" /> */}
                        </div>
                    </Carousel>
                </div>

                <div className='flex-1'>
                    <h1 className='text-3xl font-semibold mb-8'>
                        <span className='border-b-2 border-[#00df72]'>
                            Key Features of AI Resume Analyzer
                        </span>
                    </h1>

                    {/* <p className='text-xl text-justify'>Blood Connect is a web platform that instantly connects blood donors and seekers through location-based search, verified profiles, and role-based dashboards, making blood donation faster, organized, and reliable for urgent needs.</p> */}

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Built an AI-driven resume analysis platform achieving 92% accuracy in job match prediction.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Integrated OpenAI APIs for NLP-based extraction of skills, experience, and education from PDF/Doc resumes.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Designed a React + Puter.js architecture capable of handling 5,000+ concurrent uploads with optimized performance.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Created a modern dashboard UI using Tailwind CSS & Framer Motion, enhancing recruiter usability by 40%.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Deployed via Vercel with CI/CD, maintaining 99.9% uptime and responsive experience across devices.
                        </div>
                    </div>

                    <div className='flex gap-2 mb-2'>
                        <div><span className="text-green-500 text-3xl font-medium">✓</span></div>
                        <div className='text-xl font-medium'>
                            Reduced overall resume screening time by ~80%, automating a core part of the recruitment pipeline.
                        </div>
                    </div>

                    {/* <div className='flex gap-2 mb-2'> */}
                        {/* <div><span className="text-green-500 text-3xl font-medium">✓</span></div> */}
                        {/* <div className='text-xl font-medium'> */}
                            {/* Volunteers/Admins can create, update, and delete formatted blog posts with Jodit Editor. */}
                        {/* </div> */}
                    {/* </div> */}

                    {/* <div className='flex gap-2 mb-2'> */}
                        {/* <div><span className="text-green-500 text-3xl font-medium">✓</span></div> */}
                        {/* <div className='text-xl font-medium'> */}
                            {/* Separate interfaces for Admins, Volunteers, and Donors to manage requests. */}
                        {/* </div> */}
                    {/* </div> */}

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 py-4'>

                        <a className="col-span-1 lg:col-span-2" href="https://resumind-ai-resume-analyzer-tau.vercel.app/" target='_blank' rel="noopener noreferrer">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <PiLinkSimpleBold />
                                Live Link
                            </button>
                        </a>

                        <a href="https://github.com/ParthBangar/Resumind-AI-Resume-Analyzer" target='_blank' rel="noopener noreferrer">
                            <button className='bg-[#00df72] px-2 py-2 text-xl rounded-md h-full w-full cursor-pointer flex justify-center items-center gap-2'>
                                <FaGithub />
                                Github Client
                            </button>
                        </a>

                        <a href="https://github.com/ParthBangar/Resumind-AI-Resume-Analyzer" target='_blank' rel="noopener noreferrer">
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
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/7dhbSrZt/Blood-Connect-github.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/BHpsjCTq/Blood-Connect-post-02.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/bMGmNjCK/Blood-Connect-post-03.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/JRLMzpWK/Blood-Connect-post-04.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/hJGV8rnp/Blood-Connect-post-05.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/VWTyBTBw/Blood-Connect-post-06.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/6Rs9xYNb/Blood-Connect-post-07.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/JRfd2Z0S/Blood-Connect-post-08.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/WWB9WysS/Blood-Connect-post-09.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/bgP1rKLC/Blood-Connect-post-10.png" />
                    </div>
                    <div>
                        <img className='h-60 lg:h-150 w-auto object-contain' src="https://i.ibb.co/wZynrKFz/Blood-Connect-post-11.png" />
                    </div>
                </Carousel>
            </div> */}

            <div>
                <h3 className='text-2xl lg:text-3xl font-semibold my-12'>
                    <span className='border-b-2 border-[#00df72]'>
                        Main Technology Stack - AIResumeAnalyzer
                    </span>
                </h3>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>

                    <div className='text-lg lg:text-2xl col-span-1 flex justify-end items-start lg:items-center'>
                        Frontend
                    </div>

                    <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'>

                        <img src="https://img.shields.io/badge/HTML5-333333?logo=html5" alt="" />
                        <img src="https://img.shields.io/badge/CSS3-333333?logo=css" alt="" />
                        <img src="https://img.shields.io/badge/JavaScript-333333?logo=javascript" alt="" />
                        <img src="https://img.shields.io/badge/React-333333?logo=react" alt="" />
                        <img src="https://img.shields.io/badge/Tailwind_CSS-333333?logo=tailwindcss" alt="" />
                        {/* <img src="https://img.shields.io/badge/Daisy_UI-333333?logo=daisyui" alt="" /> */}
                        <img src="https://img.shields.io/badge/React_Router-333333?logo=reactrouter" alt="" />
                        {/* <img src="https://img.shields.io/badge/Axios-333333?logo=axios" alt="" /> */}
                        <img src="https://img.shields.io/github/discussions/:user/:repo" alt="" />
                        {/* <img src="https://img.shields.io/badge/TanStack_Query-333333?logo=reactquery" alt="" /> */}
                        

                    </div>

                    {/* <div className='text-right text-lg lg:text-2xl col-span-1'>Backend</div> */}
                    {/* <div className='col-span-1 lg:col-span-3 flex flex-wrap justify-start items-center gap-4'> */}
                        {/* <img src="https://img.shields.io/badge/Node.js-333333?logo=nodedotjs" alt="" /> */}
                        {/* <img src="https://img.shields.io/badge/Express.js-333333?logo=express" alt="" /> */}
                        {/* <img src="https://img.shields.io/badge/MongoDB-333333?logo=mongodb" alt="" /> */}
                        {/* <img src="https://img.shields.io/badge/Nodemon-333333?logo=nodemon" alt="" /> */}
                        {/* <img src="https://img.shields.io/badge/Stripe-333333?logo=stripe" alt="" /> */}

                    {/* </div> */}

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
                        {/* <img src="https://img.shields.io/badge/Firebase-333333?logo=firebase" alt="" /> */}
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
                    Parsing resumes in multiple formats with inconsistent structures.Implemented robust PDF/Word parsing with NLP preprocessing and fallback error handling.
                </p>
            </div>

            <div className="my-12 mx-4">
                <h1 className='text-3xl font-medium my-12'>
                    <span className='border-b-2 border-[#00df72]'>
                        Future Plans
                    </span>
                </h1>

                <p className="text-lg text-justify">
                    Integrate real-time AI feedback and predictive hiring analytics to further enhance recruitment decisions.
                </p>
            </div>

            <div className=" bg-[#333333] text-[#fbf7f4] py-4">
                <div className='flex justify-center items-center gap-4 px-16'>
                    <div className='flex justify-between items-center gap-8'>
                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/home">/home</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72]" to="/allProjects">/allProjects</NavLink>

                        <NavLink className="text-xl cursor-pointer hover:border-b-2 hover:border-[#00df72] border-b-2 border-[#00df72]" to="/projectBridge">./AIResumeAnalyzer</NavLink>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProjectBloodConnect;