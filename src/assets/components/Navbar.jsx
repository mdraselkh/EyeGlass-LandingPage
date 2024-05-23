import React, { useState } from 'react';
import { Menu, X } from 'react-feather';
import { Link as ScrollLink } from 'react-scroll';
import shop from "..//images/shop.png"
import profile from "..//images/profile.png"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-20 w-full bg-white shadow">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-black md:text-3xl">
              Eye<span className="text-primary">Glass</span>
            </h1>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
                <ScrollLink to="home" smooth={true} duration={500} className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Home</ScrollLink>
                <ScrollLink to="about" smooth={true} duration={500} className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">About Us</ScrollLink>
                <ScrollLink to="products" smooth={true} duration={500} className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Products</ScrollLink>
                <ScrollLink to="features" smooth={true} duration={500} className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Features</ScrollLink>
                <ScrollLink to="reviews" smooth={true} duration={500} className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Reviews</ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} className="px-3 py-2 text-sm font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Contact Us</ScrollLink>
              </div>
            </div>
          </div>
          <div className='flex pl-36 md:px-10'>
            <a href="" className='px-4 md:px-4'><img src={shop} alt="" /></a>
            <a href=""><img src={profile} alt="" /></a>
          </div>
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-black focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <ScrollLink onClick={() => setIsOpen(false)} to="home" smooth={true} duration={500} className="block px-3 py-2 text-base font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Home</ScrollLink>
          <ScrollLink onClick={() => setIsOpen(false)} to="about" smooth={true} duration={500} className="block px-3 py-2 text-base font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">About Us</ScrollLink>
          <ScrollLink onClick={() => setIsOpen(false)} to="products" smooth={true} duration={500} className="block px-3 py-2 text-base font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Products</ScrollLink>
          <ScrollLink onClick={() => setIsOpen(false)} to="features" smooth={true} duration={500} className="block px-3 py-2 text-base font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Features</ScrollLink>
          <ScrollLink onClick={() => setIsOpen(false)} to="reviews" smooth={true} duration={500} className="block px-3 py-2 text-base font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Reviews</ScrollLink>
          <ScrollLink onClick={() => setIsOpen(false)} to="contact" smooth={true} duration={500} className="block px-3 py-2 text-base font-medium text-gray-800 rounded-md cursor-pointer hover:text-primary">Contact Us</ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
