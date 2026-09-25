'use client'; // 1. Must add this to use React hooks/Context

import { usePlan } from '@/app/contex/librayContext';
import Link from 'next/link';
import React from 'react'; 

const SaveNavbar = () => {
  // 3. Extract the plan and savePlan arrays from the context
  const { plan, savePlan } = usePlan();

  return (
    <div className="navbar-end flex items-center">
      <Link 
        href="/plan" 
        className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors mr-5"
      >
        Plan
        <span className="bg-[#d4ff00] text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {/* 4. Replace hardcoded 0 with the length of the plan array */}
          {plan.length}
        </span>
      </Link>
      
      <Link 
        href="/saved" 
        className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
      >
        Saved
        <span className="bg-[#d4ff00] text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {/* 5. Replace hardcoded 0 with the length of the savePlan array */}
          {savePlan.length}
        </span>
      </Link>
    </div>
  );
};

export default SaveNavbar;