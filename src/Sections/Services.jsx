
import React from 'react'
import service from '../assets/PORT_images/service.png'

const Services = () => {
  return (
    <div className=" w-full max-container flex flex-col lg:space-x-6 space-y-4 lg:flex-row flex-wrap relative ">
      
      <div className=" hidden lg:block w-1/5 h-1/6 bg-coral-red absolute  lg:top-[-5rem] lg:right-[-12rem] z-0"></div>
      <div className=" hidden lg:block w-1/4 h-1/6 bg-slate-900 absolute lg:bottom-[-5rem] lg:left-[-12rem] z-0"></div>

      <div className=" w-full lg:w-[46%] ">
        <p className=" font-bold text-[20px] text-coral-red ">  What I Do </p>
        <h3 className="font-bold text-[30px] mb-6 mt-3 ">
          My Services
        </h3>
        <p className=" text-[16px] ">
          We offer high quality products for competitive prices. Our main goal is customer satisfaction, which we obtain through market orientation of ongoing service and support.
        </p>
      </div>

      <div className=" transition-container w-full lg:w-[46%] px-5 py-7 rounded-lg bg-white-200flex justify-center flex-col lg:flex-row lg:space-x-4 ">
        <div className=" w-[50px] pb-5 pt-2 ">
          <img src={service} alt="" className=" w-full" />
        </div>
        <div className="lg:w-[70%]">
          <h3 className="font-bold text-[25px]">UI Design</h3>
          <p className="font-semibold text-[18px] text-gray-400">
            Starts from <span className='text-red-700'>$44.99</span>
          </p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus aspernatur blanditiis nam ex consequuntur voluptas exercitationem vel quas reprehenderit officiis in ea, minima amet. Ratione distinctio vitae blanditiis magni!
          </small>
        </div>
      </div>

      <div className=" transition-container w-full lg:w-[46%] px-5 py-7 rounded-lg bg-white-200flex justify-center flex-col lg:flex-row  lg:space-x-4">
        <div className=" w-[50px] pb-5 pt-2 ">
          <img src={service} alt="" className=" w-full" />
        </div>
        <div className="lg:w-[70%]">
          <h3 className="font-bold text-[25px]">Graphic Design</h3>
          <p className="font-semibold text-[18px] text-gray-400">
            Starts from <span className='text-red-700'>$24.99</span>
          </p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus aspernatur blanditiis nam ex consequuntur voluptas exercitationem vel quas reprehenderit officiis in ea, minima amet. Ratione distinctio vitae blanditiis magni!
          </small>
        </div>
      </div>

      <div className=" transition-container w-full lg:w-[46%] px-5 py-7 rounded-lg bg-white-200flex justify-center flex-col lg:flex-row lg:space-x-4 ">
        <div className=" w-[50px] pb-5 pt-2 ">
          <img src={service} alt="" className=" w-full" />
        </div>
        <div className="lg:w-[70%]">
          <h3 className="font-bold text-[25px]">Web Development</h3>
          <p className="font-semibold text-[18px] text-gray-400">
            Starts from <span className='text-red-700'>$299.99</span>
          </p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus aspernatur blanditiis nam ex consequuntur voluptas exercitationem vel quas reprehenderit officiis in ea, minima amet. Ratione distinctio vitae blanditiis magni!
          </small>
        </div>
      </div>

      <div className=" transition-container w-full lg:w-[46%] px-5 py-7 rounded-lg bg-white-200flex justify-center flex-col lg:flex-row lg:space-x-4 ">
        <div className=" w-[50px] pb-5 pt-2 ">
          <img src={service} alt="" className=" w-full" />
        </div>
        <div className="lg:w-[70%]">
          <h3 className="font-bold text-[25px]">System Development</h3>
          <p className="font-semibold text-[18px] text-gray-400">
            Starts from <span className='text-red-700'>$500.99</span>
          </p>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus aspernatur blanditiis nam ex consequuntur voluptas exercitationem vel quas reprehenderit officiis in ea, minima amet. Ratione distinctio vitae blanditiis magni!
          </small>
        </div>
      </div>

      <div className=" w-full lg:w-[46%] flex flex-col justify-center items-center">
        <h3 className="font-bold text-[30px] mb-6 mt-3 ">
          Do You Want Something Different?
        </h3>
        <a href='' className=' border-2 border-coral-red px-6 py-2 bg-coral-red text-whit-color group hover:bg-transparent hover:text-black transition-all duration-300 rounded-sm'>
          Knock Me
          <svg
            className=" text-whit-color w-12 h-4 inline-block group-hover:text-black transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
        </a>
      </div>


    </div>
  )
}

export default Services