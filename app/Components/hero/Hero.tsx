import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className='container mt-0 m-auto bg-[#15171d] rounded-xl '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6  '>
                <div className='  flex justify-center items-center'>
                    <div className='p-1 md:p-3'>
                        <p className='text-[#c2f800] font-bold'>WORKOUT LIBRARY</p>
                    <h1 className='text-[#ffffff] text-2xl md:text-5xl font-bold my-5'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className='text-[#9ca3af] text-md md:text-lg '>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/> into today's plan, and watch the week's work add up.</p>
                    <button className='text-[#000000] my-6 bg-[#c2f800] px-6 py-2 rounded-lg'>BROWSE WORKOUTS</button>
                    </div>
 
                </div>
                <div className='  p-5'>
                    <Image src={'/banner.png'} width={500} height={300} alt='hero image'/>

                </div>

            </div>
            
        </div>
    );
};

export default Hero;