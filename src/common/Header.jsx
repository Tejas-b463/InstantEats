import React, { useState } from 'react';
import { LOGO_URL } from "../utils/constant";
// import { Link } from 'react-router-dom';
import Cart from "../assets/cart.png"


const Header = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <a className="flex item-center" to="/">
            InstantEats
            <img className="w-10 h-8 mx-1" src={LOGO_URL} alt="" />
          </a>
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-lg font-semibold">
            Home
          </a>
          <a href="#" className="text-lg font-semibold">
            Offer
          </a>
          <a href="#" className="text-lg font-semibold">
            About
          </a>
        </div>

        {/* Add to Cart Button */}
        <div className="md:ml-4">
          <button className="px-4 py-2">
          <img className="w-8 h-8" src={Cart} data-testid="logo" alt="Logo" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-black"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-slate-200 p-4 ${isMobileMenuOpen ? '' : 'hidden'}`}
      >
        <a href="#" className="block text-black py-2">
          Home
        </a>
        <a href="#" className="block text-black py-2">
          Offer
        </a>
        <a href="#" className="block text-black py-2">
          About
        </a>
        <div className="mt-2">
          <button className="py-2">
          <img className="w-8 h-8" src={Cart} data-testid="logo" alt="Logo" />
          </button>
        </div>
      </div>
    </nav>
  )
}
export default Header