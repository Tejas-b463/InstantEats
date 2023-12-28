

import React from 'react';
// import {LOGO_URL} from "../utils/constant"

const Footer = () => {
  return (
    <footer className="py-12 p-6 bg-slate-200">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Navigation Links */}
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
             <h1 className="text-2xl font-bold">
               <a className="flex item-center" to="/">
                 InstantEats
                 {/* <img className="w-10 h-8 mx-1" src={LOGO_URL} alt="" /> */}
               </a>
             </h1>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              Menu
            </a>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 md:mt-0">
          <p className="text-lg font-semibold mb-2">Contact Us</p>
          <p className="text-gray-600">123 Food Street, Pune</p>
          <p className="text-gray-600">Email: info@instanteast.com</p>
          <p className="text-gray-600">Phone: +91 (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 md:mt-0">
          <p className="text-lg font-semibold mb-2">Follow Us</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
