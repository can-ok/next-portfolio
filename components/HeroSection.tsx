"use client" 
import React from 'react';
import Image from 'next/image';
import { FaRegPaperPlane,FaGoodreads,FaGithub,FaLinkedin,FaTwitterSquare,FaYoutube } from 'react-icons/fa';

import herophoto from '../public/herophoto.jpeg'


const HeroSection=()=>{
    return(
       <section id="home">

        <div className='flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row'>
            <div className='md:w-1/2 md:mt-2'>
                <Image className='rounded-t-full -2xl overflow-hidden' src={herophoto} width={250} height={300} alt="picture of hero" />
            </div>
            <div>
                <h1 className='text-4xl mt-6'>Hi, I&#39;m <span className=' text-teal-600'>Can Okan Taşkıran</span></h1>
                <p className='text-lg mt-4 mb-8'>
                    I&#39;m
                    <span className='font-semibold text-teal-600'> Software Engineer </span>
                    based in Istanbul, Turkey. I&#39;m passionate and dedicated to my work.
                </p>
            <div className='flex  justify-center my-3'>
                
            <a type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mb-5"
            href="mailto:can.task@gmail.com"
            >
               <span className='flex text-1xl gap-2'> Say Hello  <FaRegPaperPlane /> </span>
            </a>

            </div>

            <div className='text-4xl flex justify-center gap-5 py-4 text-gray-600'>
            <a href='https://www.goodreads.com/user/show/162718494-can-okan-ta-k-ran' rel="noreferrer"  target="_blank"><FaGoodreads /></a>
            <a href='https://www.linkedin.com/in/can-okan-ta%C5%9Fk%C4%B1ran-a9519017b/' rel="noreferrer"  target="_blank"><FaLinkedin /></a>
            <a href='https://github.com/CantOkan' rel="noreferrer"  target="_blank"><FaGithub /></a>
            <a href='https://twitter.com/Can_Okan_' rel="noreferrer"  target="_blank"><FaTwitterSquare /></a>
            <a href='' target="_blank"><FaYoutube/> </a> 
            </div>

            </div>
            
        </div>
       
       </section>
    )
}

export default HeroSection;