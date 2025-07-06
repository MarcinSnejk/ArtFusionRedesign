import React from 'react'
import { LuHandshake } from "react-icons/lu";
import { PiChartLineUp } from "react-icons/pi";
import { LuSettings } from "react-icons/lu";
import { useState } from "react";

const ForArtist = () => {

    const [selected, setSelected] = useState(null)

    const descriptions = [

        ["Flexible Contracts",
         "Fair pay, transparent terms",
         "One NFT or whole series — you decide",
         "Short or long-term collaboration options",
         "Rights always protected by contract",
        ],

        ["Powerful Marketing",
         "Custom launch campaigns",
         "Social media promotion",
         "Homepage spotlights",
         "Newsletter features",
        ],

        ["Creative & Tech Support",
         "Easy file preparation",
         "Royalties management",
         "NFT performance tracking",
         "Help with minting & metadata",
        ],

    ]

    const icons = [

       {icon: <LuHandshake size={40} />, id: 0 },
       {icon: <PiChartLineUp size={40} />, id: 1 },
       {icon: <LuSettings size={40} />, id: 2 },

    ]

  return (

    <section id='forartist' className='flex w-full min-h-screen justify-center text-[#1C1C1E] font-poppins'>

        <div className='flex flex-col w-full min-h-screen max-w-4xl justify-center items-center px-2 py-4 gap-y-8'>

            <h2 className='text-center text-4xl sm:text-3xl font-semibold'>For Artist</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>

                {icons.map(( { icon, id }) => (

                    <div key={id} onClick={() => setSelected(id)} 
                    className={`w-14 h-14 md:w-28 md:h-28 bg-white shadow-md rounded-lg flex justify-center items-center cursor-pointer transition duration-300
                        ${selected === id ? 'shadow-my-shadow' : 'shadow-md'}`}> {icon} </div>

                ))}

            </div>

            {selected !== null && (

                <div className='mt-8 p-6 bg-white max-w-xl w-full text-center shadow-under-shadow'>
                    <p className='font-bold text-lg mb-4'>{descriptions[selected][0]}</p>
                    <ul className='list-disc list-inside space-y-2'>
                        {descriptions[selected].slice(1).map((line , i) => (
                            <li key={i}>{line}</li>
                        ))}
                    </ul>
                </div>

            )}


        </div>

    </section>

  )
}

export default ForArtist
