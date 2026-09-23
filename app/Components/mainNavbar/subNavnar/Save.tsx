import Link from 'next/link';
import React from 'react';

  

const SaveNavbar = () => {
    return (
        <div className="navbar-end">
            <ul className="flex justify-baseline gap-4 px-1  text-[#9ca3af]">
                <Link key={"plan"} href={"/plan"} className=' '>Plan <span className='p-1.5 m-3 border rounded-full hover:bg-[#c2f800] hover:text-[#000000] w-5 h-5'>{0}</span></Link>
                <Link key={"save"} href={"/plan"} className=' text-[#9ca3af]'>saved<span className='p-1.5 m-3 border rounded-full hover:bg-[#c2f800] hover:text-[#000000] w-5 h-5'>{0}</span></Link>
            </ul>
        </div>
    );
};

export default SaveNavbar;