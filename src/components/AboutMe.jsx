import React from 'react';

const AboutMe = ({ ref }) => {
    return (
        <div className='my-12 px-2 lg:px-16'>
            
            <h1 ref={ref} id="about" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>About Me</h1>

            <p className='text-xl text-justify'>I'm a passionate FrontEnd Developer with a strong focus on creating responsive, user-friendly, and visually appealing web applications. I specialize in React.js for building dynamic interfaces and have hands-on experience with the React.js, React Router.</p>
            <br />

            <p className='text-xl text-justify'>Along with strong coding skills in HTML, CSS (Tailwind CSS), and JavaScript (ES6+), I bring creative design thinking using tools like Figma and Pixo to translate ideas into clean and functional UI/UX.</p>
            <br />

            <p className='text-xl text-justify'>I can efficiently deploy web projects using Netlify and Vercel, and I manage code versions professionally using Git & GitHub. I'm always eager to learn new tools, collaborate in team environments, and take on new challenges that push me to grow as a developer.</p>

        </div>
    );
};

export default AboutMe;