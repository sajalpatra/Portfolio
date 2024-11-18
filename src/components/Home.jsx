import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../public/hackerImage.jpg";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Home() {
  return (
    <>
     <div name="Home" className=' max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
           <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
              <span className=' text-sm md:text-lg'>Welcome to my feed</span>
              <div className='flex text-2xl md:text-4xl  '>
                 <h1>Hello, I'm  a </h1>
                 <ReactTyped className='text-red-700 font-semibold'
                   strings={[
                       "Devloper","Coder","Programer"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
              </div>
              <br/>
               <p className='text-sm md:text-md text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde, quis totam libero magnam molestias, consequatur nisi saepe aliquid ab dignissimos, illum amet optio impedit molestiae enim dolores similique? Dolores omnis quia harum, ex, facere odit quidem aut, natus libero quam doloribus et mollitia doloremque eum in magni suscipit repellendus.</p>
               <br/>
               {/* social media icon */}
               <div className='flex justify-between'>
               <div className='space-y-1'>
                <span className='font-semibold'>Available on</span>
                 <div className='flex space-x-4'>
                    <ul className='flex space-x-4'>
                    <li>
                        <a href='https://www.facebook.com/' target='_blank'>
                        <FaFacebook className='text-2xl cursor-pointer hover:scale-105 duration-200 '/>
                        </a>
                        
                    </li>
                    <li>
                         <a href='https://github.com/sajalpatra' target='_blank'>
                         <FaLinkedin className='text-2xl cursor-pointer hover:scale-105 duration-200 '/></a>
                    </li>
                    <li>
                    <a href='https://www.youtube.com/' target='_blank'>
                         <FaYoutube className='text-2xl cursor-pointer hover:scale-105 duration-200 '/></a>
                    </li>
                    <li>
                    <a href='https://www.instagram.com/' target='_blank'>
                         <FaInstagramSquare className='text-2xl cursor-pointer hover:scale-105 duration-200 '/>
                         </a>
                    </li>
                    </ul>
                    
                    
                 </div>
               </div>
               <div className='space-y-1'>
                <span className='font-semibold'>Currently working on</span>
                <div className='flex space-x-4'>
                        <SiMongodb className='text-2xl cursor-pointer hover:scale-105 duration-200 '/>
                        <SiExpress className='text-2xl cursor-pointer hover:scale-105 duration-200 '/>
                        <FaReact className='text-2xl cursor-pointer hover:scale-105 duration-200 '/>
                        <FaNodeJs className='text-2xl cursor-pointer hover:scale-105 duration-200 '/>
                </div>
               </div>
               </div>

           </div>
           <div className='md:w-1/2 md:ml-40 md:mr-10 md:mt-20 order-1 md:order-2'>
              <img src={pic} className='rounded-full md:w-[400px] md:h-[400px]' alt="" />
           </div>

        </div>
      
     </div>
    </>
   
  )
}

export default Home
