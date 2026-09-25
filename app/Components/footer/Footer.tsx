import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#0A0A0A] border-t border-gray-900 w-full py-8 px-6 md:px-12 mt-10'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
                
                {/* Left Side: Logo */}
                <div className='flex items-center'>
                    {/* Since your logo is in the public folder, you just reference it as "/logo.png" */}
                    <div className='w-8 h-4 flex'>
                        <Image 
                        src="/logo.png" 
                        alt="FitLog Logo" 
                        width={120} 
                        height={35} 
                        className="object-contain"
                    />
                    <h1 className='ml-2 '>FITLOG</h1>
                    </div>
                </div>

                {/* Right Side: Copyright Text */}
                <div className='text-gray-500 text-sm text-center md:text-right'>
                    <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;