import React from 'react'
import glsimg1 from "..//..//images/gls1.png"
import glsimg2 from "..//..//images/gls2.png"
import glsimg3 from "..//..//images/gls3.png"
import glsimg4 from "..//..//images/gls4.png"
import glsimg5 from "..//..//images/gls5.png"
import glsimg6 from "..//..//images/gls6.png"
import vector from "..//..//images/Vector.png"
import Slider from 'react-slick';

const Products = () => {
   const settings = {
      dots: true,
      arrows: false,  // Add this line to remove arrows
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
   }
  return (
    <div className='grid w-full grid-cols-1 gap-3 px-10 mt-20 md:mt-16 md:gap-8' id='products'>
       <div className='flex flex-row items-center justify-around mt-8'>
         <div className='px-6 text-left sm:p-0 md:pr-20'>
            <h2 className='text-3xl font-semibold text-black' >Our Products</h2>
            <p className='mt-3 text-[#545454]'>Experience crystal clear vision and elevated style 
            with our premium collection of eyeglasses.</p>
         </div>
         <div className='flex flex-col items-center justify-between md:flex-row md:gap-3'>
           <button className='text-[#404040] border-2 border-gray-800 pt-1 pb-1 pl-4 pr-4 cursor-pointer w-[100px] md:mt-2'>Latest</button>
           <button className='text-[#404040] border-2 border-gray-800 pt-1 pb-1 pl-4 pr-4 mt-2 cursor-pointer w-[100px]'>Special</button>
           <button className='text-[#404040] border-2 border-gray-800 pt-1 pb-1 pl-4 pr-4 mt-2 cursor-pointer w-[100px]'>Best Sell</button>
         </div>
        </div> 
         <div className='grid grid-cols-1 gap-10 px-5 py-8 md:grid-cols-2 md:gap-16 lg:grid-cols-3 md:p-16 lg:gap-16'>
            <div className='relative flex flex-col items-start justify-between sm:h-[500px]'>
               <div className='flex flex-col items-center justify-between w-full bg-background h-[390px] rounded-sm '>
                     <div className='absolute z-10 grid grid-cols-2 gap-48 mt-3 sm:gap-44 md:gap-56'>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full bg-primary'><p className='mt-1.5 text-center text-black'>10%</p></div>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full '><img src={vector} alt="" className='p-2 text-sm mt-0.5' /></div>
                        
                     </div>
                     <div className='p-2 ml-auto mr-auto mt-36'>
                       <img src={glsimg1} alt="" className='w-[250px] h-[120px]'/>
                     </div>
               </div>
               

               <div className='flex flex-col items-start justify-between mt-5 md:mt-2'>
                  <h3 className='text-xl font-semibold text-black'>Bravo Sunglasses</h3>
                  <p>$100</p>
                  <button className="mt-3 font-normal text-md">
                     Add to Cart
                  </button>
               </div>
            </div>

            <div className='relative flex flex-col items-start justify-between sm:h-[500px]'>
               <div className='flex flex-col items-center justify-between w-full bg-background h-[390px] rounded-sm '>
                     <div className='absolute z-10 grid grid-cols-2 gap-48 mt-3 sm:gap-44 md:gap-56'>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full bg-primary'><p className='mt-1.5 text-center text-black'>10%</p></div>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full '><img src={vector} alt="" className='p-2 text-sm mt-0.5' /></div>
                        
                     </div>
                     <div className='p-2 ml-auto mr-auto mt-36'>
                       <img src={glsimg2} alt="" className='w-[250px] h-[120px]'/>
                     </div>
               </div>
               

               <div className='flex flex-col items-start justify-between mt-5 md:mt-2'>
                  <h3 className='text-xl font-semibold text-black'>Ray Ban</h3>
                  <p>$100</p>
                  <button className="mt-3 text-base font-normal">
                     Add to Cart
                  </button>
               </div>
            </div>
            
            <div className='relative flex flex-col items-start justify-between sm:h-[500px]'>
               <div className='flex flex-col items-center justify-between w-full bg-background h-[390px] rounded-sm'>
                     <div className='absolute z-10 grid grid-cols-2 mt-3 gap-44 sm:gap-44 md:gap-56'>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full bg-primary'><p className='mt-1.5 text-center text-black'>10%</p></div>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full '><img src={vector} alt="" className='p-2 text-sm mt-0.5' /></div>
                        
                     </div>
                     <div className='p-2 ml-auto mr-auto mt-36'>
                       <img src={glsimg3} alt="" className='w-[250px] h-[120px]'/>
                     </div>
               </div>
               

               <div className='flex flex-col items-start justify-between mt-5'>
                  <h3 className='text-xl font-semibold text-black'>Tommy Hilfiger</h3>
                  <p>$130</p>
                  <button className="mt-3 text-base font-normal">
                     Add to Cart
                  </button>
               </div>
            </div>
            <div className='relative flex flex-col items-start justify-between sm:h-[500px] '>
               <div className='flex flex-col items-center justify-between w-full bg-background h-[390px] rounded-sm'>
                     <div className='absolute z-10 grid grid-cols-2 mt-3 gap-44 sm:gap-44 md:gap-56'>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full bg-primary'><p className='mt-1.5 text-center text-black'>10%</p></div>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full '><img src={vector} alt="" className='p-2 text-sm mt-0.5' /></div>
                        
                     </div>
                     <div className='p-2 ml-auto mr-auto mt-36'>
                       <img src={glsimg4} alt="" className='w-[250px] h-[120px]'/>
                     </div>
               </div>
               

               <div className='flex flex-col items-start justify-between mt-5'>
                  <h3 className='text-xl font-semibold text-black'>John Jacobs</h3>
                  <p>$100</p>
                  <button className="mt-3 text-base font-normal">
                     Add to Cart
                  </button>
               </div>
            </div>
            <div className='relative flex flex-col items-start justify-between sm:h-[500px] '>
               <div className='flex flex-col items-center justify-between w-full bg-background h-[390px] rounded-sm'>
                     <div className='absolute z-10 grid grid-cols-2 mt-3 gap-44 sm:gap-44 md:gap-56'>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full bg-primary'><p className='mt-1.5 text-center text-black'>10%</p></div>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full '><img src={vector} alt="" className='p-2 text-sm mt-0.5' /></div>
                        
                     </div>
                     <div className='p-2 ml-auto mr-auto mt-36'>
                       <img src={glsimg5} alt="" className='w-[250px] h-[120px]'/>
                     </div>
               </div>
               

               <div className='flex flex-col items-start justify-between mt-5'>
                  <h3 className='text-xl font-semibold text-black'>Vincent Chase</h3>
                  <p>$120</p>
                  <button className="mt-3 text-base font-normal">
                     Add to Cart
                  </button>
               </div>
            </div>
            <div className='relative flex flex-col items-start justify-between sm:h-[500px]'>
               <div className='flex flex-col items-center justify-between w-full bg-background h-[390px] rounded-sm'>
                     <div className='absolute z-10 grid grid-cols-2 mt-3 gap-44 sm:gap-44 md:gap-56'>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full bg-primary'><p className='mt-1.5 text-center text-black'>10%</p></div>
                        <div className='w-10 h-10 text-center border-2 border-black rounded-full '><img src={vector} alt="" className='p-2 text-sm mt-0.5' /></div>
                        
                     </div>
                     <div className='p-2 ml-auto mr-auto mt-36'>
                       <img src={glsimg6} alt="" className='w-[250px] h-[120px]'/>
                     </div>
               </div>
               

               <div className='flex flex-col items-start justify-between mt-5'>
                  <h3 className='text-xl font-semibold text-black'>Occhiali</h3>
                  <p className='mt-1'>$110</p>
                  <button className="mt-3 text-base font-normal">
                     Add to Cart
                  </button>
               </div>
            </div>
         </div>
    </div>
  )
}

export default Products