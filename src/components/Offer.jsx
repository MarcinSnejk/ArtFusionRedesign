import React from 'react'
import { BsVectorPen } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { PiChartLineUp } from "react-icons/pi";
import { RxCode } from "react-icons/rx";
import { LuSettings } from "react-icons/lu";

const Offer = () => {
  return (
    <section id="offer" className='w-full min-h-screen flex justify-center bg-[#0C0F1A] text-white font-poppins'>

        <div className='w-full max-w-4xl h-auto px-4 py-8 justify-center mt-16'> 

            <div className='flex flex-col w-full text-left'>

                <h2 className='text-2xl sm:text-3xl font-semibold'>What we offer</h2>

                <ul className='flex flex-col mt-10 gap-5 text-xl'>
                  <li className='flex items-center gap-8'> <BsVectorPen className='text-white' size={24} aria-hidden="true" /> <span>NFT Collection</span> </li>
                  <li className='flex items-center gap-8'> <GoHome className='text-white' size={24} aria-hidden="true" /> <span>Freelance Contracts</span> </li>
                  <li className='flex items-center gap-8'> <PiChartLineUp className='text-white' size={24} aria-hidden="true" /> <span>Marketing</span> </li>
                  <li className='flex items-center gap-8'> <RxCode className='text-white' size={24} aria-hidden="true" /> <span>Blockchain transparency</span> </li>
                  <li className='flex items-center gap-8'> <LuSettings className='text-white' size={24} aria-hidden="true" /> <span>Technical Support</span> </li>
                </ul>

            </div>

        </div>

    </section>
  )
}

export default Offer
