import React, { useEffect, useRef } from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import { useLocation } from 'react-router';
import Footer from './Footer';

const Home = () => {

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const educationRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        if (location.hash === '#hero' && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (location.hash === '#about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (location.hash === '#skills' && skillsRef.current) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (location.hash === '#education' && educationRef.current) {
            educationRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (location.hash === '#projects' && projectRef.current) {
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
        }

        if (location.hash === '#contacts' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div className='max-w-[1600px] mx-auto px-4'>
            <NavBar></NavBar>
            <Hero ref={homeRef}></Hero>
            <AboutMe ref={aboutRef} ></AboutMe>
            <Skills ref={skillsRef}></Skills>
            <Education ref={educationRef}></Education>
            <Projects ref={projectRef}></Projects>
            <Contact ref={contactRef}></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;