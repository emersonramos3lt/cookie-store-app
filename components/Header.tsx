import { ShoppingBag } from "lucide-react"
import Image from "next/image"


const Navbar = () => {
  return (
    <header className="bg-bgHeader pt-2">

      <nav className="nav flexBetween bg-secondaryColor text-white mt-4 max-w-[1300px] m-auto p-[0.8rem] rounded-3xl pl-[2rem] pr-[2rem]">


        
          
          <a href="/" className="gap-0 lg:gap-[.5rem] flex transition-colors hover:text-gray-300" title="Order now">
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
          src="/header-bg.jpg"
          alt="Delicious cookies image"
          width={1300}
          height={1300}
          className="img-header w-full h-[450px] rounded-3xl object-cover brightness-[0.9]"
        />
     </div>

     <p className="p-header flex justify-center text-secondaryColor font-light mt-8 pb-8">
     Delight  Bliss Crunch  Charm Harmony  Joy  Glow  Magic
     </p>
    </header>
  )
}

export default Navbar