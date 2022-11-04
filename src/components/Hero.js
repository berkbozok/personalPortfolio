import React from 'react';
import {navigation} from '../data';
import {Link} from 'react-scroll';
// import woman image
import WomanImg from '../assets/img/banner-woman2.webp';

const Hero = () => {
  return (
    <section
      id='home'
      className='bg-[#010100] lg:h-[85vh] flex items-center  lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, Berk Bozok! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Software Engineer
            </p>

            
            
            <div className='btn btn-md bg-accent  md:btn-lg '>
            <Link to={navigation[4].href} activeClass='active' spy={true} smooth={true}
                duration={800} offset={-70} className='transition-all duration-300'>
                 Let's work together
              </Link>
            </div>
          </div>

          
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src="https://i.imgur.com/pFU9hYj.jpg" alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;