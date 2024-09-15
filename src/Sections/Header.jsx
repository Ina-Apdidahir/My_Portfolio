
import React from 'react'
import Logo from '../assets/PORT_images/AB.png'
import Menue from '../assets/PORT_images/menubtn.png'

const Header = () => {
  return (
    <header className=" px-3 py-4 bg-black absolute z-10 w-full ">
      <nav className=" flex justify-between items-center max-container  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <a href="" className='flex items-center space-x-2'>
         
            <img className=" w-16 " src={Logo} alt="" />
          
          <h1 className="text-whit-color text-2xl font-bold">Bishar </h1>
        </a>

        <ul className=' flex flex-1 items-center justify-center gap-8 max-lg:hidden '>
          <li className='px-2 py-2 '>
            <a className='text-white hover:text-coral-red' href="">Home</a>
          </li>
          <li className='px-2 py-2 '>
            <a className='text-white hover:text-coral-red' href="">About</a>
          </li>
          <li className='px-2 py-2 '>
            <a className='text-white hover:text-coral-red' href="">Work</a>
          </li>
          <li className='px-2 py-2 '>
            <a className='text-white hover:text-coral-red' href="">Services</a>
          </li>
          <li className='px-2 py-2 '>
            <a className='text-white hover:text-coral-red' href="">Tetimonials</a>
          </li>
          <li className='px-2 py-2 '>
            <a className='text-white hover:text-coral-red' href="">Blog</a>
          </li>
          <li className='px-2 py-2 '>
            <a className='text-white hover:text-coral-red' href="">Contact</a>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={Menue} width={30} alt="" />
        </div>
      </nav>
    </header>
  )
}

export default Header