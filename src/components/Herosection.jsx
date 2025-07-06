import React from 'react'
import Navbar from './Navbar'

const Herosection = () => {
  return (
    <section className='w-full h-screen flex flex-col bg-[#0C0F1A] text-white'>

        <Navbar/>

        <div className='flex-1 flex justify-center items-center px-6 py-12 font-poppins'>

            <div className='flex flex-col md:flex-row w-full max-w-7xl h-auto items-center justify-center gap-16'>

              <img src="logo.jpg" alt='logo_artfusion' className='md:w-[300px] md:h-[300px] w-[100px] h-[100px] rounded-lg object-cover'/>

              <div className='flex flex-col items-start gap-8'>

                  <h1 className='text-xl md:text-3xl font-semibold'>Shaping the Future of Digital Art</h1>

                  <div className='flex flex-row gap-4 justify-center md:justify-start w-full'>

                      <button type="button" aria-label='Join as a Artist'
                      className='py-2 px-4 rounded-3xl text-sm md:text-base bg-[#A259FF] hover:bg-[#7A3DD6] transition  duration-300 ease-in-out'>Join as a Artist</button>
                      <button type="button" aria-label='Join as a Artist' 
                      className='py-2 px-4 rounded-3xl text-sm md:text-base bg-[#A259FF] hover:bg-[#7A3DD6] transition  duration-300 ease-in-out'>Explore NFT's</button>

                  </div>

                
              </div>

            </div>
        </div>
      
    </section>
  )
}

export default Herosection
