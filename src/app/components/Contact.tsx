'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Contact = () => {

  const socials = [
    { icon: 'github-icon.svg', path: 'https://github.com/asadullah48' },
    { icon: 'linkedin-icon.svg', path: 'https://www.linkedin.com/in/asadullah-shafique-a00679325/' },
    <div>
       <h2>Contact Us</h2>
         <p><b>Contact Person:</b> Asadullah Shafique</p>
          <p><b>Whatsapp:</b> +92 321 377 1445</p>
          <p><b>Email:</b> <a href="mailto:asadullahshafique@hotmail.com">asadullahshafique@hotmail.com</a></p>
          </div>        
  ];

  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-10'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
        <h1 className='text-xl font-bold text-white my-2'>Lets Connect</h1>
        <br></br>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
        I am looking to strive for an executive position in a company that promises career growth & development.  I'm a mature team worker & adaptable to all challenging situations. I can work well both in a team environment and using my initiative. I am an enthusiastic, self-motivated & hard-working.
        </p>
        <br></br>
       
      </div>
      <div>
        <form className='flex flex-col' >
          <div className='mb-6'>
            <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>
              Your Email
            </label>
            <input
              name='email'
              type='email'
              id='email'
              required
              placeholder='Your email'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='subject' className='text-white block mb-2 text-sm font-medium'>
              Subject
            </label>
            <input
              name='subject'
              type='text'
              id='subject'
              required
              placeholder='Just saying hi'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            />
          </div>
          <div className='mb-6'>
            <label htmlFor='message' className='text-white block mb-2 text-sm font-medium'>
              Message
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
            />
          </div>
          <button type='submit' className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );

};

export default Contact;



        