"use client";
import React, { useTransition, useState } from 'react';

const About = () => {
  
  return (
    <section id="about" className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <img src = "images/about-image.webp" alt= "about" />
       <div className='mt-4 md:mt-0 text-left flex flex-col h-full' > 
          <h2 className='sm:text-5xl text-5xl font-serif font-bold title-font text-white"'>About Me</h2>
          <br></br> 
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-white'>
          As a Full Stack Developer, I have honed my skills across both front-end and back-end development, ensuring comprehensive solutions for complex web applications.I am a dedicated web developer with a deep passion for crafting visually captivating and highly functional websites. Proficient in HTML, CSS, JavaScript, TypeScript, and frameworks such as Next.js and Tailwind CSS, I excel at creating seamless user interfaces that enhance the browsing experience. My mission is to design innovative digital landscapes that engage users and deliver outstanding results. Driven by the challenge of pushing boundaries, I continually hone my skills to produce work that resonates long after it has been experienced.
          <br></br>
          Currently, my focus is on expanding my skill set. I am actively mastering new programming languages, exploring diverse courses, and delving into emerging technologies within the industry. Specifically, I am deeply engaged in Artificial Intelligence, Web 3.0, and the Metaverse.
          </p>
        </div> 
      </div> 
    </section>
  );
};

export default About;

// export default function About() {
//     return ( 
//     <div> className=bg-Black-300
//         <h2> Hello! I’m Asadullah Shafique.</h2>
//          <h5>About Me:</h5> 
//          <p>  As a Full Stack Developer, I have honed my skills across both front-end and back-end development, ensuring comprehensive solutions for complex web applications.
                        
//                     </p>
//                     <h6>Expertise:</h6> 
//          <ul>
                
//                 <li>Full-Stack Developer | Python | Next.js | Typescript </li>
//                 <li>Freelancer | New Texchnology Enthusiastic</li>
//                 <li>Content Writing | Statistical Analysis </li>
//                 <li>Digital Marketer | Video Editor </li>
//                 <li>Microsoft 365 | Communication Expertise </li>
//                 <li>Authentication | Database Management  </li>
//                   </ul>
//                   <h6>My service are available as an expert Freelancer.</h6>
                    
            
        
//             </div>
    
//     );
//   }


