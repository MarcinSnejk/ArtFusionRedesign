import React from 'react'

const Team = () => {
  return (

    <section className='flex w-full min-h-screen justify-center text-[#1C1C1E] font-poppins'>

        <div className='flex w-full max-w-5xl h-auto px-4 py-8 justify-center items-center'>

          <div className='flex flex-col w-full gap-y-16' >

              <h2 className='text-4xl sm:text-3xl font-semibold text-center'>Meet our team</h2>

              <div role='list' className='grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center'>

                  {[{
                    img: "blockchain dev.jpg",
                    alt: "Photo of Noah Tanaka, Lead Blockchain Developer",
                    name: "Noah Tanaka",
                    role: "Lead Blockchain Developer"
                  }, {
                    img: "ceo.jpg",
                    alt: "Photo of Elena Moravec, CEO",
                    name: "Elena Moravec",
                    role: "CEO"
                  }, {
                    img: "headofartist.jpg",
                    alt: "Photo of Lucia Moreau, Head of Artist Relations",
                    name: "Lucia Moreau",
                    role: "Head of Artist Relations"
                  }, {
                    img: "omar.jpg",
                    alt: "Photo of Omar Reyes, UI/UX Designer & Fullstack Web Developer",
                    name: "Omar Reyes",
                    role: "UI/UX Designer & Fullstack Web Developer"
                  }, {
                    img: "contractspecialist.jpg",
                    alt: "Photo of Sophie Bergman, Legal & Contract Specialist",
                    name: "Sophie Bergman",
                    role: "Legal & Contract Specialist"
                  }, {
                    img: "marketing.jpg",
                    alt: "Photo of Jin Park, Marketing & Community Lead",
                    name: "Jin Park",
                    role: "Marketing & Community Lead"
                  }].map(({img, alt, name, role}) => (
                    <div key={name} role="listitem" className='flex flex-col w-full max-w-[200px] gap-y-1 justify-center items-center'>

                      <img src={img} alt={alt} className='w-40 h-52 object-cover rounded-2xl' />
                      <h3 className='text-base font-semibold'>{name}</h3>
                      <p className='text-base text-center'>{role}</p>

                    </div>
                  ))}

              </div>

          </div>


        </div>

    </section>

  )
}

export default Team
