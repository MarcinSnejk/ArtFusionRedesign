import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

const Social = () => {
  return (
    
    <section className='flex w-full h-auto justify-center text-[#1C1C1E] font-poppins'>

        <div className='flex flex-col w-full max-w-4xl justify-center items-center px-4 py-8 gap-y-16'>

            <h2 className="text-center font-semibold text-4xl md:text-3xl">Follow us on social media</h2>

            <div className='flex flex-row justify-center items-center cursor-pointer gap-12'>

                <a href='https://www.instagram.com/' target='_blank' rel="noopener noreferrer"><FaInstagram size={40} className='transiton duration-300 hover:shadow-under-shadow' aria-label='Instagram' title='Go to Instagram' /></a>
                <a href='https://www.facebook.com/' target='_blank' rel="noopener noreferrer"><FaFacebookF size={40} className='transiton duration-300 hover:shadow-under-shadow' aria-label='Facebook' title='Go to Facebook' /></a>
                <a href='https://www.x.com/' target='_blank' rel="noopener noreferrer"><FaXTwitter size={40} className='transiton duration-300 hover:shadow-under-shadow' aria-label='X' title='Go to X' /></a>
                <a href='https://www.tiktok.com/' target='_blank' rel="noopener noreferrer"><FaTiktok size={40} className='transiton duration-300 hover:shadow-under-shadow' aria-label='TikTok' title='Go to TikTok' /></a>

            </div>

        </div>

    </section>

  )
}

export default Social
