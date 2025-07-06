import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className='w-full min-h-screen bg-[#0C0F1A] text-white font-poppins flex justify-center items-center'>
        
          <div className='w-full max-w-4xl flex flex-col px-4 py-8 justify-center items-center gap-y-16'>

              <h2 className='font-semibold text-4xl md:text-3xl'>Contact us</h2>

                <form className='flex flex-col justify-center items-center gap-y-1 w-full max-w-[300px] md:max-w-2xl'>

                    <label htmlFor="name" className='sr-only'>Name</label>
                    <input name="name" type="text" id="name" placeholder='Your Name..' className='w-full px-4 py-3 border-b border-white focus:outline-none focus:shadow-2-shadow bg-transparent focus:border-transparent transition duration-200' required />

                    <label htmlFor="email" className='sr-only'>Email</label>
                    <input name="email" type="emal" id="email" placeholder='Your E-Mail Adress..' className='w-full px-4 py-3 border-b border-white focus:outline-none focus:shadow-2-shadow bg-transparent focus:border-transparent transition duration-200' required />

                    <label htmlFor="message" className='sr-only'>Message</label>
                    <textarea name="message" id="message" rows="5" placeholder='So what you want ask? :)' className='w-full px-4 py-3 border-b border-white focus:outline-none focus:shadow-2-shadow bg-transparent resize-none focus:border-transparent transition duration-200' required />

                    <button type="submit" aria-label='send message' className='py-2 px-4 rounded-3xl text-sm md:text-base bg-[#A259FF] hover:bg-[#7A3DD6] transition  duration-300 ease-in-out mt-4'>Send</button>                   

                </form>

          </div>

    </section>
  )
}

export default Contact
