import  React , {useState} from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

const [isOpen, setIsOpen] = useState(false)

const navLinks = [

        { name: 'About', href: '#about'},
        { name: 'Offer', href: '#offer'},
        { name: 'For Artist', href: '#forartist'},
        { name: 'Contact', href: '#contact'},

    ];

  return (
    <nav className='flex w-full min-h-[80px] justify-center'>

        <div className='flex flex-col md:flex-row max-w-7xl mx-auto justify-between items-center gap-16 font-poppins'>

            <h1 className='text-3xl font-semibold sm:text-3xl cursor-default'>ArtFusion</h1>

                <ul className='hidden md:flex justify-between items-center gap-4 md:gap-8 text-xl list-none'>
                    {navLinks.map(link => (<li key={link.name}>

                        <a href={link.href} className='hover:text-[#00F8C9] transition duration-400'>{link.name}</a>

                    </li>))}
                </ul>

                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-white' aria-label="Toggle Menu">
                    {isOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>

            {isOpen && (
                    <ul className='flex flex-col gap-4 text-base pt-2 pb-2 border-t border-white animate-slide-down w-full md:hidden'>
                        {navLinks.map(link => (<li key={link.name}>

                            <a href={link.href} className='hover:text-[#00F8C9] transition duration-400'>{link.name}</a>

                        </li>))}                                         
                    </ul>
            )}


        </div>
      
    </nav>
  )
}

export default Navbar
