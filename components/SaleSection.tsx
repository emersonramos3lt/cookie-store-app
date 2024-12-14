import Image from 'next/image'
import React from 'react'
import Button from './Button'

const SaleSection = () => {
  return (
    <section className='section mt-[7rem] max-w-[1300px] m-auto'>
        <div className='sale-grid grid grid-cols-2 gap-4'>
            <div>
                <Image 
                    src='/cookie.jpg'
                    alt='Chocolate cookie'
                    width={2000}
                    height={2000}
                    className='rounded-3xl lg:h-[580px] object-cover object-center'
                />
            </div>

            <div className='bg-white rounded-3xl p-[3rem] text-secondaryColor lg:h-[580px]'>
                <h1 className='text-4xl font-bold mb-[1.2rem]'>Chocolate Cookies – Ten Units</h1>
                <h2 className='text-3xl mb-[1.2rem]'>$30.00</h2>
                <p className='font-light mb-[1.2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, praesentium. Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                <Button 
                    type='button'
                    title='Order now'
                    variant='btnStyle'
                />
            </div>
        </div>
    </section>
  )
}

export default SaleSection
