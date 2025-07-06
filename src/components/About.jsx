import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (

    <section id="about" className='flex w-full min-h-screen font-poppins justify-center text-[#1C1C1E]'>

      <div className='flex w-full max-w-4xl h-auto px-4 py-8 justify-center mt-16'>

        <motion.div className='flex flex-col w-full' initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.8,  ease: 'easeOut'}} viewport={{once: false, amount: 0.4}}>

            <h2 className='text-left text-3xl sm:text-4xl font-semibold'>About us</h2>

            <p className='text-left mt-8 text-2xl sm:text-2xl'>
              ArtFusion is an innovative company bridging the world of digital art and blockchain technology. We specialize in creating smart contracts for NFT artists, ensuring secure and transparent transactions for their digital creations. 
              Our dedicated marketplace offers a global platform where artists can showcase and sell their unique works. 
              ArtFusion’s mission is to empower creators worldwide by supporting their growth and helping them succeed in the evolving digital art space.
            </p>

        </motion.div>
      </div>

    </section>

  )
}

export default About
