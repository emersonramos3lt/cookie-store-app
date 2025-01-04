import Image from "next/image"

const Navbar = () => {
  return (
    <header className="bg-bgHeader pt-2">

      <nav className="nav flexBetween bg-secondaryColor text-white mt-4 max-w-[1300px] m-auto p-[0.8rem] rounded-3xl pl-[1rem] pr-[1rem]">


        
          
          <a href="/" className="gap-0 lg:gap-[.5rem] flex items-center" title="Order now">
          <Image src='/bag.svg' alt="Bag" width={30} height={30}/>
          <span className="hidden lg:block">Order now</span>
        </a>
        

        <span className="text-2xl font-bold cursor-pointer ml-[1.7rem] lg:ml-0 lg:mr-[2rem]" title="Homepage">Dough</span>

        <div className="flex gap-[.7rem]">
          <Image 
            src="/insta.svg"
            alt="Instagram icon"
            width={18}
            height={18}
            className="cursor-pointer"
          />

          <Image 
            src="/twitter.svg"
            alt="Instagram icon"
            width={18}
            height={18}
            className="cursor-pointer"
          />

          <Image 
            src="/face.svg"
            alt="Instagram icon"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </div>
      </nav>

        <div className="max-w-[90%] lg:p-3 lg:max-w-[1300px] m-auto mt-[1rem] rounded-3xl bg-header h-[400px]">
        <div  className="flex items-center justify-center h-full w-full">
          <h1 className="h1-header text-white font-bold text-[2rem] lg:text-7xl text-center w-[1000px]">Crafting cookies with love, quality, and a touch of magic to brighten your day</h1>
        </div>
      </div>

     <p className="p-header flex justify-center text-secondaryColor font-light mt-8 pb-8 gap-8 overflow-hidden">
     Crunch <Image src='/icon-cookie.svg' alt="Cookie icon" width={18} height={18}/>
     Glow <Image src='/icon-cookie.svg' alt="Cookie icon" width={18} height={18}/>
     Delight <Image src='/icon-cookie.svg' alt="Cookie icon" width={18} height={18}/>  Bliss <Image src='/icon-cookie.svg' alt="Cookie icon" width={18} height={18}/> Crunch <Image src='/icon-cookie.svg' alt="Cookie icon" width={18} height={18}/>  Charm <Image src='/icon-cookie.svg' alt="Cookie icon" width={18} height={18}/> Harmony <Image src='/icon-cookie.svg' alt="Cookie icon" width={18} height={18}/>  Joy <Image src='/icon-cookie.svg' alt="Cookie icon" width={18} height={18}/>  Glow <Image src='/icon-cookie.svg' alt="Cookie icon" width={18} height={18}/>  Magic
     </p>
    </header>
  )
}

export default Navbar
