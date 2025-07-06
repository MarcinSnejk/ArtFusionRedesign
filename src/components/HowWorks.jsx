import React from 'react'

const HowWorks = () => {
  return (
    <section className='w-full min-h-screen flex justify-center bg-[#0C0F1A] text-white font-poppins'>

        <div className='w-full max-w-4xl h-auto justify-center px-4 py-8'>

            <div className='flex flex-col items-end'>

                <h2 className='font-semibold text-3xl sm:text-4xl text-right'>How It Works?</h2>

                <ul className='flex flex-col mt-10 gap-5 text-xl list-disc text-left'>

                    <li><span>Sign Up</span></li>
                    <li><span>Submit Art</span></li>
                    <li><span>Sign Contract</span></li>
                    <li><span>NFT Publishing</span></li>
                    <li><span>Make Money!</span></li>

                </ul>

            </div>

        </div>

    </section>
  )
}

export default HowWorks
