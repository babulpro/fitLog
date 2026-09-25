import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0b0d10] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 pt-10">
      <div className="  w-full mx-auto">
        <div className="bg-[#15171d] rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg">
          <div className="flex flex-col justify-center items-center text-center p-8 sm:p-12 lg:p-20">
 
            <p className="text-[#c2f800] text-xs sm:text-sm lg:text-base font-bold tracking-widest uppercase mb-3">
              Error 404
            </p>

           
            <h1 className="text-[#ffffff] text-6xl sm:text-7xl lg:text-9xl font-black my-4 lg:my-6 leading-none tracking-tight">
              4<span className="text-[#c2f800]">0</span>4
            </h1>

          
            <h2 className="text-[#ffffff] text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
              PAGE NOT FOUND.
            </h2>
 
            <p className="text-[#9ca3af] text-sm sm:text-base lg:text-lg leading-relaxed max-w-md mx-auto mt-4 lg:mt-5">
              Looks like this page skipped leg day. The route you're looking for doesn't exist or has been moved.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 lg:mt-10 w-full sm:w-auto">
              <Link
                href="/"
                className="text-[#000000] bg-[#c2f800] px-8 py-3.5 rounded-xl font-bold uppercase tracking-wide w-full sm:w-auto text-center hover:bg-[#b0e600] transition-colors duration-200"
              >
                Back to Home
              </Link>

              <Link
                href="/workouts"
                className="text-[#ffffff] bg-transparent border-2 border-[#2a2d35] px-8 py-3.5 rounded-xl font-bold uppercase tracking-wide w-full sm:w-auto text-center hover:border-[#c2f800] hover:text-[#c2f800] transition-colors duration-200"
              >
                Browse Workouts
              </Link>
            </div>

            {/* Footer hint */}
            <p className="text-[#9ca3af] text-xs sm:text-sm mt-10 lg:mt-12">
              Still lost?{" "}
              <Link
                href="/"
                className="text-[#c2f800] font-bold hover:text-[#b0e600] transition-colors"
              >
                Head back to the gym
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;