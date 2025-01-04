import React from 'react'
import Button from './Button'
import Image from 'next/image'

const ServingSection = () => {
  return (
    <section className='section max-w-[85%] lg:max-w-[1300px] m-auto lg:mt-[7rem] mt-[3rem]'>
      <h1 className='h1-section text-5xl font-bold text-secondaryColor flex justify-center text-center'>
         Currently serving 
      </h1>

      <div className='container-flex grid grid-cols-3 justify-center mt-[2rem] gap-8'>
        <div className='flex items-center flex-col mt-8'>
          <Image 
          src='/offer-img1.jpg'
          alt='Cookies'
          width={1000}
          height={1000}
          aria-labelledby='offerImg1'
          className='img-section rounded-3xl h-[400px] object-cover lg:w-auto w-4/5'
        />
        <h2 id='offerImg1'  className='text-secondaryColor font-bold text-center text-2xl mt-[1.5rem] mb-[1.5rem]'>Sweet Cookies</h2>
        <Button 
          type='button'
          title='Order now'
          variant='btnStyle'
        />
        </div>

        <div className='flex items-center flex-col mt-8'>
          <Image 
          src='/offer-img2.jpg'
          alt='Cookies'
          width={1000}
          height={1000}
          aria-labelledby='offerImg2'
          className='img-section rounded-3xl h-[400px] object-cover lg:w-auto w-4/5'
        />
        <h2 id='offerImg2'  className='text-secondaryColor font-bold text-center text-2xl mt-[1.5rem] mb-[1.5rem]'>Chocolate Cookies</h2>
        <Button 
          type='button'
          title='Order now'
          variant='btnStyle'
        />
        </div>

        <div className='flex items-center flex-col mt-8'>
          <Image 
          src='/offer-img3.jpg'
          alt='Cookies'
          width={1000}
          height={1000}
          aria-labelledby='offerImg3'
          className='img-section rounded-3xl h-[400px] object-cover lg:w-auto w-4/5'
        />
        <h2 id='offerImg3'  className='text-secondaryColor font-bold text-center text-2xl mt-[1.5rem] mb-[1.5rem]'>Cookies</h2>
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

export default ServingSection
