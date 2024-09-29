"use client";
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion } from "framer-motion";
import images from '../../../public/images/pic 2.png';

const Hero = () => {
  return (
    <section className='lg:py-23'>
      <section className="flex flex-col sm:flex-row items-center justify-between">
        <motion.div
         initial = {{opacity: 0, scale: 0.5}} 
         animate={{opacity: 1, scale: 1}} 
         transition={{duration: 0.5}} 
        className="sm:w-7/12 text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-1xl sm:text-2xl lg:text-3xl lg:leading-normal font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-600">
              Hello, I am { }
         </span>
            <br />
            <TypeAnimation sequence ={[
                'Asadullah Shafique',
                1000,
                'Textile Engineer Cum Full-Stack Dedveloper',
                1000,
                'Web Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block text-4xl sm:text-5xl lg:text-6xl"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Welcome to my portfolio! Scroll down to discover about my skills, projects, and how I can help by bringing your ideas to life.


          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
            <a 
              href="www.linkedin.com/in/asadullah-shafique-a00679325/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 w-full sm:w-auto rounded-full mr-4 mb-3 sm:mb-0 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white text-center"
            >
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/drive/u/0/home" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 text-white text-center"
            >
              <span className="block bg-black border-2 border-transparent rounded-full px-5 py-2 hover:border-gradient-to-br from-blue-500 via-primary-500 to-secondary-500">
                Download Resume
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
         initial = {{opacity: 0, scale: 0.5}} 
         animate={{opacity: 1, scale: 1}} 
         transition={{duration: 0.5}} 
         className="sm:w-5/12 flex justify-center mt-6 sm:mt-0">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[380px] lg:h-[380px] relative flex items-center justify-center mt-4 sm:mt-8 lg:mt-12">
            <Image 
              src= {images}
              alt="profile"
              className="absolute w-[80%] h-[80%] lg:w-[90%] lg:h-[90%]"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default Hero;