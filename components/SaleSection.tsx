import Image from 'next/image'
import React from 'react'
import Button from './Button'

const SaleSection = () => {
  return (
    <section className='section mt-[8rem] max-w-[1300px] m-auto'>

    <p className="p-header flex justify-center text-secondaryColor font-light mt-8 pb-8 gap-8 overflow-hidden">
        Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>
        Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>
        Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/> Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>  Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/> Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>  Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>  Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>  Bestseller
    </p>
        <div className='sale-grid grid grid-cols-2 gap-4'>
            <div>
                <Image 
                    src='/cookie.jpg'
                    alt='Chocolate cookie'
                    width={2000}
                    height={2000}
                    className='rounded-3xl lg:h-[500px] object-cover object-center'
                />
            </div>

            <div className='bg-white rounded-3xl p-[3rem] text-secondaryColor'>
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
    <p className="p-header flex justify-center text-secondaryColor font-light mt-8 pb-8 gap-8 overflow-hidden">
        Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>
        Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>
        Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/> Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>  Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/> Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>  Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>  Bestseller <Image src='/heart.svg' alt="heart" width={15} height={15}/>  Bestseller
    </p>
    </section>
  )
}

export default SaleSection
