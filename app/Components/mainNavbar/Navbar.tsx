"use client"; // Required for usePathname
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SaveNavbar from './subNavnar/Save';
 

const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { name: "Workouts", url: "/workout" },
    { name: "My Plan", url: "/plan" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wider">FITLOG</Link>

        {/* Center Links (Desktop) */}
        <div className="hidden md:flex items-center gap-1 ">
          {links.map((link) => {
            const isActive = pathname === link.url;
            return (
              <Link
                key={link.name}
                href={link.url}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#d4ff00] text-black'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side / Mobile Menu */}
        <div className=" ">
           {/* Mobile Menu Button - skipping full impl for brevity, but structure it */}
           <SaveNavbar />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;