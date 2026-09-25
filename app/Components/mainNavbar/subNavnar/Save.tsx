import Link from 'next/link';
import React from 'react';

const SaveNavbar = () => {
  return (
    <div className=" navbar-end">
      <Link href="/plan" className="text-sm text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors mr-5">
        Plan
        <span className="bg-[#d4ff00] text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </Link>
      <Link href="/saved" className="text-sm text-gray-400   hover:text-white flex items-center gap-1.5 transition-colors">
        Saved
        <span className="bg-[#d4ff00] text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
          0
        </span>
      </Link>
    </div>
  );
};
export default SaveNavbar;