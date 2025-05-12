import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItemProps {
  text: string;
  href: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, href, isActive }) => {
  return (
    <a
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-700 hover:text-white ${
        isActive ? 'bg-blue-700 text-white' : 'text-gray-300'
      }`}
    >
      {text}
    </a>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-800 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div className="flex items-center py-4">
              <span className="font-bold text-white text-xl">MyBrand</span>
            </div>

            {/* Primary Nav - Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <NavItem text="Home" href="#" isActive={true} />
              <NavItem text="About" href="#" />
              <NavItem text="Services" href="#" />
              <NavItem text="Contact" href="#" />
            </div>
          </div>

          {/* Secondary Nav - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded bg-white text-amber-800 font-medium hover:bg-gray-100 transition duration-200">
              Login
            </button>
            <button className="px-4 py-2 rounded bg-amber-600 text-white font-medium hover:bg-blue-700 transition duration-200">
              Sign Up
            </button>
          </div>

          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-blue-800">
          <NavItem text="Home" href="#" isActive={true} />
          <NavItem text="About" href="#" />
          <NavItem text="Services" href="#" />
          <NavItem text="Contact" href="#" />
          <div className="pt-4 flex flex-col space-y-2">
            <button className="px-4 py-2 rounded bg-white text-blue-800 font-medium hover:bg-gray-100 transition duration-200">
              Login
            </button>
            <button className="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;