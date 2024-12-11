import Image from 'next/image'
import React from 'react'

const Social = () => {
  return (
    <section className='max-w-[90%] m-auto mt-[8rem]'>
        <div className='social-grid grid grid-cols-6 gap-4 items-center'>
            <div className='social-card max-w-[500px] h-[250px] bg-bgHeader text-secondaryColor flex justify-center items-center flex-col rounded-3xl p-[2rem]'>
                follow us
                <span className='text-xl font-bold hover:underline underline-offset-2 cursor-pointer'>@dough</span>
            </div>

            <div>
                <Image 
                    src='/social1.jpg'
                    alt='Cookie photo'
                    width={800}
                    height={800}
                    className='img-social rounded-3xl h-[250px] object-cover cursor-pointer transition-all hover:brightness-[0.5]'
                />
            </div>

            <div>
                <Image 
                    src='/social2.jpg'
                    alt='Cookie photo'
                    width={500}
                    height={500}
                    className='img-social rounded-3xl h-[250px] object-cover cursor-pointer transition-all hover:brightness-[0.5]'
                />
            </div>

            <div>
                <Image 
                    src='/social3.jpg'
                    alt='Cookie photo'
                    width={500}
                    height={500}
                    className='img-social rounded-3xl h-[250px] object-cover cursor-pointer transition-all hover:brightness-[0.5]'
                />
            </div>

            <div>
                <Image 
                    src='/social4.jpg'
                    alt='Cookie photo'
                    width={500}
                    height={500}
                    className='img-social rounded-3xl h-[250px] object-cover cursor-pointer transition-all hover:brightness-[0.5]'
                />
            </div>

            <div>
                <Image 
                    src='/social5.jpg'
                    alt='Cookie photo'
                    width={500}
                    height={500}
                    className='img-social rounded-3xl h-[250px] object-cover cursor-pointer transition-all hover:brightness-[0.5]'
                />
            </div>
        </div>
    </section>
  )
}

export default Social