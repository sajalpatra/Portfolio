import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa6"

function Footer() {
  return (
    <div>
      <hr/>
      <footer className='py-8'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
          <div className='flex items-center justify-center flex-col'>
            <div className='flex space-x-2 '>
                <FaFacebook size={24}/>
                <FaTwitter size={24}/>
                <FaInstagram size={24}/>
                <FaLinkedin size={24}/>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col'>
               <p className='text-sm'>&copy; 2024 Your Company.All rights reserved.</p>
               <p className='text-sm'>Supportive Partner SKP</p>
            </div>
           </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
