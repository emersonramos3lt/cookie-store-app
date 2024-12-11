import { CircleHelp, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer text-secondaryColor bg-bgHeader mt-[5rem] p-[2rem] pt-[4rem] pb-[10rem]'>
      <div className='footer-container max-w-[90%] m-auto flexBetween'>
        <div className='logo-wrapper'>
          <h1 className='logo text-3xl font-bold cursor-pointer'>Dough</h1>
          <p className='font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, totam.</p>
        </div>

        <div className='link-wrapper flex flex-col'>
          <Link href='/' className='underline hover:no-underline mb-[0.5rem]'>
            About
          </Link>
          <Link href='/' className='underline hover:no-underline mb-[0.5rem]'>
            Contact
          </Link>
          <Link href='/' className='underline hover:no-underline mb-[0.5rem]'>
            FAQ
          </Link>
        </div>

        <div>
            dough@email.com<br />
            (123) 0000-0000
           <div className='flex gap-[1rem] mt-[1rem]'>
            <Phone className='cursor-pointer'/>
            <CircleHelp className='cursor-pointer'/>
            <MapPin className='cursor-pointer'/>
           </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer