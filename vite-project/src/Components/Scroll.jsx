import React, { useState, useEffect } from 'react';

// import link
import { Link, animateScroll as scroll } from 'react-scroll';
// import icon
import { AiOutlineArrowUp} from 'react-icons/ai';
import {FaHeadset} from 'react-icons/fa'

const Scroll = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 500 ? setShow(true) : setShow(false);
    });
  });
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  {
    return (
      show && (
        <div>
            <button
          onClick={() => scrollToTop()}
          className='z-10 bg-slate-400 hover:bg-cyan-600 text-white w-12 h-12 rounded-full fixed right-16 bottom-14 cursor-pointer flex justify-center items-center transition-all invisible md:visible'
        >
          <AiOutlineArrowUp className='w-6 h-6' />
        </button>
        <div className='z-10 bg-white text-pink-500 w-[290px] h-12  fixed right-16 bottom-0 cursor-pointer flex justify-center items-center invisible md:visible mt-10 shadow-md rounded-t-lg px-1'>
            <h1 className='flex gap-2 items-center justify-center text-lg'> <span className='text-xl'><FaHeadset/></span> <span className='text-gray-500'>How may we may help you</span> </h1>
        </div>
        </div>
      )
    );
  }
};

export default Scroll;

