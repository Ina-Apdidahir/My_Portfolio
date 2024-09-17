
import React, { useState, useEffect, useRef } from 'react';
import Image from '../assets/PORT_images/45-49.jpg';

const About = () => {
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust this threshold to control when the animation starts
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef} className={`lg:mt-16 mt-6 w-full max-container flex flex-col lg:flex-row justify-center ${inView ? 'transition-active' : ''}`}>
      <div className="hidden lg:block lg:w-[31%] relative group">
        <div className={`h-3/4 w-3/4 bg-red-500 absolute top-[-1rem] right-[8rem] transition-all duration-[2000ms] ${inView ? 'translate-x-[10px] translate-y-4' : ''}`}></div>
        <img
          className={`absolute top-[-7rem] right-[1rem] transition-all duration-[2000ms] ${inView ? 'translate-x-[-10px] translate-y-[-5px]' : ''}`}
          src={Image} width={300} alt=""
        />
        <div className={`h-48 w-96 border-8 border-white-400 absolute top-4 left-[-10rem] z-0 transition-all duration-[2000ms] ${inView ? 'translate-x-2' : ''}`}></div>
      </div>

      <div className="w-full lg:w-[31%] lg:mx-4">
        <p className="text-coral-red font-bold text-[18px]">About Me</p>
        <h3 className="font-bold text-[30px]">
          I'm <span className="text-coral-red">Bishar Abdidahir</span>
        </h3>
        <h3 className="font-bold text-[30px]">
          Software <span className="text-coral-red">Developer</span>
        </h3>
        <p className="font-bold text-[20px] mt-4 mb-8">
          Based in Galkaio, Somalia
        </p>
        <p className="text-[16px]">
          Hey! My name is Bishar Abdidahir. I am UI/UX designer, and I'm very passionate and dedicated to my work.
          With 2 years experience as a professional graphic designer and web developer, I have acquired the skills and knowledge necessary to make your project a success.
        </p>
        <button className="mt-8 border-2 border-coral-red bg-coral-red text-whit-color px-5 py-2 rounded-sm hover:text-black hover:bg-transparent group">
          Download cv
          <svg className='text-whit-color w-5 inline-block ml-4 group-hover:text-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg>
        </button>
      </div>

      <div className="hidden lg:block lg:w-[31%] relative group">
        <div className={`h-3/4 w-3/4 bg-red-500 absolute bottom-[-1rem] left-[8rem] transition-all duration-[2000ms] ${inView ? 'translate-x-[10px] translate-y-4' : ''}`}></div>
        <img
          className={`absolute bottom-[-7rem] right-[1rem] transition-all duration-[2000ms] ${inView ? 'translate-x-[-10px] translate-y-[-5px]' : ''}`}
          src={Image} width={300} alt=""
        />
      </div>
    </div>
  );
}

export default About;
