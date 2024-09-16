import React from 'react'

const Resume = () => {
  return (
    <div className="w-full max-container flex flex-col items-center lg:items-start lg:space-y-0 lg:space-x-4">
      <div className="w-full lg:w-[80%] mb-4">
        <p className=" font-bold text-[20px] text-coral-red ">  Know More </p>
        <h3 className="font-bold text-[30px] mb-6 mt-3 ">
          My Resume
        </h3>
        <p className=" text-[16px] ">
          I enjoy every step of the design process, from discussion and collaboration to concept and execution
        </p>
      </div>

      <div className="w-full lg:w-full flex flex-col lg:flex-row lg:justify-between lg:space-x-4 mr-2 ">
        
        <div className=" w-full lg:w-[47%] mt-[5rem]  lg:mt-4 flex flex-col items-start space-y-4">
          <div className="flex space-x-3 items-center">
            <div className=" w-16 h-3 bg-coral-red"></div>
            <h3 className=' text-[30px] font-bold '>Education</h3>
          </div>
          <div className=" flex flex-col space-y-4">

            <div className="flex flex-col lg:flex-row lg:space-x-3 my-4 ">
              <div className=" w-10 h-10 p-2 mx-2 my-4 lg:my-0 rounded-full bg-coral-red flex justify-center items-center">
                <svg
                  className=" w-8 text-whit-color "
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path></svg>
              </div>
              <div className="">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-2 mb-3 ">
                  <h3 className=" text-[22px] font-bold ">Finished High School </h3>
                  <span className=" text-[14px] text-gray-500 ">May 2021</span>
                </div>
                <small className="text-[16px] text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium nihil eius, dolorem dignissimos veritatis inventore nam dolor corrupti maxime adipisci facilis commodi omnis ea? Incidunt magni aliquam mollitia. Unde.
                </small>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-3 my-4 ">
              <div className=" w-10 h-10 p-2 mx-2 my-4 lg:my-0 rounded-full bg-coral-red flex justify-center items-center">
                <svg
                  className=" w-8 text-whit-color "
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 0 9 12 16 22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001 15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913 12.0003 18.1579 3.99902 13.4905Z"></path></svg>
              </div>
              <div className="">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-2 mb-3 ">
                  <h3 className=" text-[22px] font-bold ">Started Puntiland State University </h3>
                  <span className=" text-[14px] text-gray-500 ">Oct 2022</span>
                </div>
                <small className="text-[16px] text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium nihil eius, dolorem dignissimos veritatis inventore nam dolor corrupti maxime adipisci facilis commodi omnis ea? Incidunt magni aliquam mollitia. Unde.
                </small>
              </div>
            </div>

          </div>
        </div>

        <div className=" w-full lg:w-[47%] mt-[5rem] lg:mt-4 flex flex-col items-start space-y-4">
          <div className="flex space-x-3 items-center">
            <div className=" w-16 h-3 bg-coral-red"></div>
            <h3 className=' text-[30px] font-bold '>Exprience</h3>
          </div>
          <div className=" flex flex-col space-y-4">

            <div className="flex flex-col lg:flex-row lg:space-x-3 my-4 ">
              <div className=" w-10 h-10 p-2 mx-2 my-4 lg:my-0 rounded-full bg-coral-red flex justify-center items-center">
                <svg
                  className=" w-8 text-whit-color "
                  xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 64 64" width="64px" height="64px" ><path d="M 26 6 C 23.81506 6 22 7.8150603 22 10 L 22 12 L 5 12 L 5 29 C 5 31.21 6.79 33 9 33 L 28 33 L 28 29 L 36 29 L 36 33 L 55 33 C 57.21 33 59 31.21 59 29 L 59 12 L 42 12 L 42 10 C 42 7.8150603 40.18494 6 38 6 L 26 6 z M 26 10 L 38 10 L 38 12 L 26 12 L 26 10 z M 30 31 L 30 37 L 34 37 L 34 31 L 30 31 z M 5 35 L 5 50 C 5 52.21 6.79 54 9 54 L 55 54 C 57.21 54 59 52.21 59 50 L 59 36 L 36 35.570312 L 36 39 L 28 39 L 28 35.429688 L 5 35 z"></path>
                </svg>
              </div>
              <div className="">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-2 mb-3 ">
                  <h3 className=" text-[22px] font-bold ">Graphic Designer at Goodir Technology </h3>
                  <span className=" text-[14px] text-gray-500 ">May 2023</span>
                </div>
                <small className="text-[16px] text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium nihil eius, dolorem dignissimos veritatis inventore nam dolor corrupti maxime adipisci facilis commodi omnis ea? Incidunt magni aliquam mollitia. Unde.
                </small>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-3 my-4 ">
              <div className=" w-10 h-10 p-2 mx-2 my-4 lg:my-0 rounded-full bg-coral-red flex justify-center items-center">
              <svg
                  className=" w-8 text-whit-color "
                  xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 64 64" width="64px" height="64px" ><path d="M 26 6 C 23.81506 6 22 7.8150603 22 10 L 22 12 L 5 12 L 5 29 C 5 31.21 6.79 33 9 33 L 28 33 L 28 29 L 36 29 L 36 33 L 55 33 C 57.21 33 59 31.21 59 29 L 59 12 L 42 12 L 42 10 C 42 7.8150603 40.18494 6 38 6 L 26 6 z M 26 10 L 38 10 L 38 12 L 26 12 L 26 10 z M 30 31 L 30 37 L 34 37 L 34 31 L 30 31 z M 5 35 L 5 50 C 5 52.21 6.79 54 9 54 L 55 54 C 57.21 54 59 52.21 59 50 L 59 36 L 36 35.570312 L 36 39 L 28 39 L 28 35.429688 L 5 35 z"></path>
                </svg>
              </div>
              <div className="">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-2 mb-3 ">
                  <h3 className=" text-[22px] font-bold ">Software Developer at Goodir Technology </h3>
                  <span className=" text-[14px] text-gray-500 ">May 2024</span>
                </div>
                <small className="text-[16px] text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium nihil eius, dolorem dignissimos veritatis inventore nam dolor corrupti maxime adipisci facilis commodi omnis ea? Incidunt magni aliquam mollitia. Unde.
                </small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume