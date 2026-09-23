import Link from 'next/link';
import React from 'react';
import SaveNavbar from './subNavnar/Save';
 

const Navbar = () => {

    const links1=[
        {
        name:"Workout",
        url:"/workout"
         },
        {
        name:"Plan",
        url:"/plan"
         },
    ]


    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 mb-20">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                 {links1.map(link=><Link key={link.name} href={link.url} className='hover:text-[#c2f800] text-[#9ca3af] rounded-2xl px-5 py-0.5 hover:bg-[#1a2312]'>{link.name}</Link>)}
                
            </ul>
            </div>
            <Link href={"/"} key={"home"} className="btn btn-ghost text-xl text-[#ffffff]">FITLOG</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
             {links1.map(link=><Link key={link.name} href={link.url} className='mr-15 hover:text-[#c2f800] text-[#9ca3af] rounded-2xl px-5 py-0.5 hover:bg-[#1a2312]'>{link.name}</Link>)}
            </ul>
        </div>
        <SaveNavbar/>

        </div>
        );
    };

export default Navbar;