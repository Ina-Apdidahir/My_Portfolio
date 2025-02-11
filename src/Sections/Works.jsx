
import React from 'react'
import Food from '../assets/PORT_images/Food.jpg'
import Blog from '../assets/PORT_images/Blog.jpg'
import Ecommerce from '../assets/PORT_images/Ecommerce.jpg'
import Landing from '../assets/PORT_images/Landing.jpg'


const Works = () => {
  return (
    <div className=" relative w-full max-container flex justify-center lg:flex-row flex-wrap space-x-4 space-y-4">
      <div className=" w-full py-5 absolute top-[-10rem] sm:top-[-12rem] flex flex-col items-center justify-center space-y-3">
        <p className="text-whit-color font-bold text-[18px] ">Selected Works</p>
        <h3 className="font-bold text-[30px] text-whit-color">Check my portfolio</h3>
        <div className="flex space-x-4 flex-wrap sm:space-x-6">
          <button className="border-0  text-[16px] sm:text-[18px] sm:font-bold ">All </button>
          <button className="border-0  text-[16px] sm:text-[18px] sm:font-bold ">Blog web</button>
          <button className="border-0  text-[16px] sm:text-[18px] sm:font-bold ">E-commerce web</button>
          <button className="border-0  text-[16px] sm:text-[18px] sm:font-bold ">Landing web</button>
        </div>
      </div>

      <div className="w-full lg:w-1/3 lg:h-140px overflow-hidden">
        <div className=" relative overflow-hidden group group rounded-[0.5rem] w-full h-full">
          <img src={Ecommerce} alt="" className="w-full h-full object-cover" />
          <a href='' className=" absolute w-full h-full flex justify-center items-center flex-col bottom-[-100%] left-0  bg-[#f345458f] group-hover:bottom-0 transition-all duration-300 ">
            <svg
              className="text-whit-color w-16  cursor-pointer mb-5"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>

            <p className=" text-whit-color font-bold text-[18px] mt-8 mb-2">GitHub</p>
            <h3 className="font-bold text-[25px] text-whit-color">Ecommerce website</h3>
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/3 lg:h-140px overflow-hidden">
        <div className=" relative overflow-hidden group rounded-[0.5rem] w-full h-full">
          <img src={Landing} alt="" className="w-full h-full object-cover" />
          <a href='' className=" absolute w-full h-full flex justify-center items-center flex-col bottom-[-100%] left-0  bg-[#f345458f] group-hover:bottom-0 transition-all duration-300 ">
            <svg
              className="text-whit-color w-16  cursor-pointer mb-5"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>

            <p className=" text-whit-color font-bold text-[18px] mt-8 mb-2">GitHub</p>
            <h3 className="font-bold text-[25px] text-whit-color">Ecommerce website</h3>
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/3 lg:h-140px overflow-hidden">
        <div className="relative overflow-hidden group group rounded-[0.5rem] w-full h-full ">
          <img src={Blog} alt="" className="w-full h-full object-cover" />
          <a href='' className="absolute w-full h-full flex justify-center items-center flex-col bottom-[-100%] left-0 bg-[#f345458f] group-hover:bottom-0 transition-all duration-300">
            <svg
              className="text-whit-color w-16 cursor-pointer mb-5"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>

            <p className="text-whit-color font-bold text-[18px] mt-8 mb-2">GitHub</p>
            <h3 className="font-bold text-[25px] text-whit-color">Ecommerce website</h3>
          </a>
        </div>
      </div>


      <div className="w-full lg:w-1/3 lg:h-140px overflow-hidden">
        <div className=" relative overflow-hidden group group rounded-[0.5rem] w-full h-full">
          <img src={Food} alt="" className="w-full h-full object-cover" />
          <a href='' className=" absolute w-full h-full flex justify-center items-center flex-col bottom-[-100%] left-0  bg-[#f345458f] group-hover:bottom-0 transition-all duration-300 ">
            <svg
              className="text-whit-color w-16  cursor-pointer mb-5"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>

            <p className=" text-whit-color font-bold text-[18px] mt-8 mb-2">GitHub</p>
            <h3 className="font-bold text-[25px] text-whit-color">Ecommerce website</h3>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Works