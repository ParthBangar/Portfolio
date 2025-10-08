import React from 'react';

const Education = ({ ref }) => {
    return (
        <div>
            <div className='my-12 px-2 lg:px-16'>
                <h1 ref={ref} id="education" className='scroll-mt-32 text-5xl text-center mb-12 font-bold'>Education</h1>

                <div className='mb-12'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-2xl font-bold'>Bachelor of Engineering (Computer Engineering)</h3>
                        <h3 className='hidden lg:block text-2xl font-bold'>August 2020 - June 2024</h3>
                    </div>
                    <h4 className='text-lg lg:text-xl'>Pune Vidhyarthi Griha’s College of Engineering (SPPU),Pune,Maharashtra,India</h4>
                </div>

                <div className='mb-12'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-xl lg:text-2xl font-bold'>(12th) H.S.C.</h3>
                        <h3 className='hidden lg:block text-2xl font-bold'>August 2018 - May 2020</h3>
                    </div>
                    <h4 className='text-lg lg:text-xl'>R.M.D. English Medium School & Junior College,Pune,Maharashtra,India</h4>
                </div>
                <div className='mb-12'>
                    <div className='flex justify-between items-center mb-2'>
                        <h3 className='text-xl lg:text-2xl font-bold'>(10th) C.B.S.E.<span className='lg:hidden'><br /></span></h3>
                        <h3 className='hidden lg:block text-2xl font-bold'>~May 2018</h3>
                    </div>
                    <h4 className='text-lg lg:text-xl'>Nalanda English Medium School,Manchar,Maharashtra,India</h4>
                </div>
            </div>
        </div>
    );
};

export default Education;