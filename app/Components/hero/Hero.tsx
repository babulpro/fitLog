import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 '>
            
      
            <div className='bg-[#15171d] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center'>
                    
                
                    <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left p-6 sm:p-10 lg:p-14 order-2 md:order-1'>
                        
                        {/* Subheading */}
                        <p className='text-[#c2f800] text-xs sm:text-sm lg:text-base font-bold tracking-widest uppercase mb-3'>
                            Workout Library
                        </p>
                        
                        {/* Main Heading */}
                        <h1 className='text-[#ffffff] text-3xl sm:text-4xl lg:text-5xl font-black my-4 lg:my-6 leading-tight font-oswald'>
                            TRAIN WITH INTENT.<br className="hidden sm:block" /> LOG EVERY SET.
                        </h1>
                        
                         
                        <p className='text-[#9ca3af] text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto md:mx-0'>
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
                        </p>
                        
                      
                        <button className='text-[#000000] bg-[#c2f800] px-8 py-3.5 rounded-xl font-bold uppercase tracking-wide w-full sm:w-auto mt-8 lg:mt-10 hover:bg-[#b0e600] transition-colors duration-200'>
                            Browse Workouts
                        </button>
                    </div>

                    {/* RIGHT COLUMN: Image */}
                    <div className='flex justify-center items-center p-6 sm:p-10 lg:p-14 order-1 md:order-2'>
                        <Image 
                            src={'/banner.png'} 
                            width={500} 
                            height={300} 
                            alt='FitLog Hero Banner'
                             
                            className='w-full h-auto object-contain max-w-[280px] sm:max-w-[380px] lg:max-w-[500px] drop-shadow-2xl'
                            priority 
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;