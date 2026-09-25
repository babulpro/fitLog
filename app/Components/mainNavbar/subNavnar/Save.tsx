'use client';

import Link from 'next/link';
import React from 'react';
import { usePlan } from '@/app/contex/librayContext'; // Adjust path if needed!

const SaveNavbar = () => {
  const { plan, savePlan } = usePlan();

  return (
    <div className="flex items-center gap-4">
      {/* Plan Link */}
      <Link 
        href="/plan" 
        className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
      >
        <span className="hidden sm:inline">Plan</span>
        <span className="bg-[#d4ff00] text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {plan.length}
        </span>
      </Link>
      
      {/* Saved Link */}
      <Link 
        href="/plan" 
        className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
      >
        <span className="hidden sm:inline">Saved</span>
        <span className="bg-[#d4ff00] text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {savePlan.length}
        </span>
      </Link>
    </div>
  );
};

export default SaveNavbar;