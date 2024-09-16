
import React, { useState } from 'react';
import Logo from '../assets/PORT_images/AB.png';
import Menu from '../assets/PORT_images/menubtn.png';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleMenuClick = () => setShowNav(true);
  const handleCloseClick = () => setShowNav(false);

  return (
    <header className="px-3 py-4 bg-black absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <a href="" className="flex items-center space-x-2">
          <img className="w-16" src={Logo} alt="Logo" />
          <h1 className="text-whit-color text-2xl font-bold">Bishar</h1>
        </a>

        <ul className="flex flex-1 items-center justify-center gap-8 max-lg:hidden">
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="">Home</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="">About</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="">Work</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="">Services</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="">Testimonials</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="">Blog</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="">Contact</a>
          </li>
        </ul>

        <div className="hidden max-lg:block">
          <img onClick={handleMenuClick} src={Menu} width={30} alt="Menu" />
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.47)] backdrop-blur-sm z-20 transition-all duration-500 transform ${
            showNav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className="max-container pt-12 flex flex-col bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            <svg
              onClick={handleCloseClick}
              className="w-8 text-whit-color absolute top-6 right-4 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
            </svg>

            <ul className="p-12 flex flex-col items-center justify-center gap-8 lg:hidden">
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="">Home</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="">About</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="">Work</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="">Services</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="">Testimonials</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="">Blog</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
