

import React from 'react';
import Counter from '../Details/counter';

const Clients = () => {
  return (
    <div className="flex justify-center lg:items-center flex-col space-y-4 lg:flex-row  relative text-white p-8">
      <div className=" hidden lg:block h-32 w-32 bg-slate-900  absolute bottom-[-12rem] left-5 "></div>
      <div
        className=" hidden lg:block w-44 h-[500px] justify-center items-center bg-transparent border-4 border-color-[#f0f0f0] z-0 top-[-11rem] right-[-10rem] absolute "
      ></div>
      <div className="mx-8 text-center flex space-x-2 items-baseline">
        <Counter end={5000} duration={3000} />
        <p className=' text-[24px]'>JavaScript Projects</p>
      </div>
      <div className="mx-8 text-center flex space-x-2 items-baseline">
        <Counter end={90} duration={3000} />
        <p className=' text-[24px]'>Digital Products</p>
      </div>
      <div className="mx-8 text-center flex space-x-2 items-baseline">
        <Counter end={300} duration={3000} />
        <p className=' text-[24px] '>Happy Clients</p>
      </div>
    </div>
  );
};

export default Clients;