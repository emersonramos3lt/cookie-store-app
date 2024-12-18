import { ShoppingBag } from "lucide-react"
import Image from "next/image"


const Navbar = () => {
  return (
    <header className="bg-bgHeader pt-2">

      <nav className="nav flexBetween bg-secondaryColor text-white mt-4 max-w-[1300px] m-auto p-[0.8rem] rounded-3xl pl-[2rem] pr-[2rem]">


        
          
          <a href="/" className="gap-0 lg:gap-[.5rem] flex" title="Order now">
          <ShoppingBag />
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

     <div className="flex justify-center items-center max-w-[1300px] m-auto mt-8">
      <div  className="absolute flex justify-center items-center w-full z-10">
        <h1 className="h1-header text-white font-bold text-7xl text-center w-[1000px]">Crafting cookies with love, quality, and a touch of magic to brighten your day</h1>
      </div>
      <Image 
          src="/img-header.jpg"
          alt="Delicious cookies image"
          width={2800}
          height={2000}
          className="img-header w-full h-[450px] rounded-3xl object-cover brightness-[0.9]"
        />
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
