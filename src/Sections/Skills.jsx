


import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  // Function to determine the color based on the percentage
  const getProgressBarColor = (percentage) => {
    if (percentage >= 80) return 'bg-white-400'; // High percentage
    if (percentage >= 50) return 'bg-yellow-300'; // Medium percentage
    return 'bg-red-500'; // Low percentage
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{label}</span>
        <span className="text-white font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${getProgressBarColor(percentage)}`}
          style={{ width: `${percentage}%` }} // Corrected style attribute
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="w-full max-container py-4 pb-20 lg:pb-10 flex flex-col space-y-12 lg:flex-row lg:space-x-5 lg:space-y-0 justify-center ">
      <div className="w-full lg:w-1/2">
        <p className=" font-bold text-[20px] text-whit-color ">My skills</p>
        <h3 className="font-bold text-[30px] mb-6 mt-3 text-whit-color">
          You Can Imagine I Can Do
        </h3>
        <p className=" text-[16px] text-whit-color">
          I am working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional creative personal resume portfolio template Aali
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <ProgressBar label="Website & System Design" percentage={86} />
        <ProgressBar label="Web & System Development" percentage={90} />
        <ProgressBar label="Front-end" percentage={98} />
        <ProgressBar label="Back-end" percentage={70} />
      </div>
    </div>
  );
};

export default Skills;


