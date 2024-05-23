import React from 'react'
import images1 from "..//..//images/img1.png"
import images2 from "..//..//images/img2.png"
import images3 from "..//..//images/img3.png"
import images4 from "..//..//images/img4.png"
const products = [
   {
     name: 'Bravo Sunglasses',
     discount: 'Up to 80% off on selected item',
     image: images1, // Replace with actual image URL
     size: "large",
   },
   {
     name: 'Tommy Hilfiger',
     discount: 'Up to 30% off on selected item',
     image: images2, // Replace with actual image URL
     size: "small",
   },
   {
     name: 'John Jacobs',
     discount: 'Up to 40% off on selected item',
     image: images2, // Replace with actual image URL
     size: "large",
   },
   {
     name: 'Vincent Chase',
     discount: 'Up to 10% off on selected item',
     image: images1, // Replace with actual image URL
     size: "small",
   },
 ];

const Gallery = () => {
  return (
   <div className="w-full px-10 py-24 mt-72 sm:mb-4 md:px-28 md:mt-32" id='features'>
   <div className="grid grid-cols-1 gap-6 px-8 sm:grid-cols-2 md:grid-cols-2 md:mt-8 lg:mt-8 ">
       <div className="relative overflow-hidden rounded-md ">
         <img
           src={images1}
           alt=""
           className='w-full h-full'
         />
         <div className="absolute inset-0 flex items-center justify-between bg-white w-[250px] h-28 ml-auto mr-auto  rounded-md  sm:mt-[200px] sm:w-[250px] sm:h-32 md:mt-[290px] md:w-[350px] md:h-40  mt-[130px] px-7 md:px-16">
           <div className="text-center">
             <h2 className="text-base font-bold text-black md:text-xl md:px-6">Bravo Sunglasses</h2>
             <p className="mt-2 text-sm text-black ">Up to 80% off on selected item</p>
             <button className="px-4 py-2 mt-2 font-semibold text-white rounded bg-secondary hover:bg-primary sm:mt-4 md:px-5 hover:text-black">
               Buy Now
             </button>
           </div>
         </div>
       </div>
       <div className="relative overflow-hidden rounded-md ">
         <img
           src={images2}
           alt=""
           
         />
         <div className="absolute inset-0 flex items-center justify-between bg-white w-[250px] h-28 ml-auto mr-auto  rounded-md  sm:mt-[200px] sm:w-[250px] sm:h-32 md:mt-[190px] md:w-[350px] md:h-40  mt-[90px] px-7 md:px-16">
           <div className="text-center">
             <h2 className="text-base font-bold text-black md:text-xl md:px-6">Tommy Hilfiger</h2>
             <p className="mt-2 text-sm text-black ">Up to 30% off on selected item</p>
             <button className="px-4 py-2 mt-2 font-semibold text-white rounded bg-secondary hover:bg-primary sm:mt-4 md:px-5 hover:text-black">
               Buy Now
             </button>
           </div>
         </div>
       </div>
       <div className="relative overflow-hidden rounded-md ">
         <img
           src={images3}
           alt=""
           
         />
         <div className="absolute inset-0 flex items-center justify-between bg-white w-[250px] h-28 ml-auto mr-auto  rounded-md  sm:mt-[200px] sm:w-[250px] sm:h-32 md:mt-[190px] md:w-[350px] md:h-40  mt-[90px] px-7 md:px-16">
           <div className="text-center">
             <h2 className="text-base font-bold text-black md:text-xl md:px-6">John Jacobs</h2>
             <p className="mt-2 text-sm text-black ">Up to 40% off on selected item</p>
             <button className="px-4 py-2 mt-2 font-semibold text-white rounded bg-secondary hover:bg-primary sm:mt-4 md:px-5 hover:text-black">
               Buy Now
             </button>
           </div>
         </div>
       </div>
       <div className="relative overflow-hidden rounded-md md:-mt-[105px]">
         <img
           src={images4}
           alt=""
         />
         <div className="absolute inset-0 flex items-center justify-between bg-white w-[250px] h-28 ml-auto mr-auto  rounded-md  sm:mt-[200px] sm:w-[250px] sm:h-32 md:mt-[290px] md:w-[350px] md:h-40  mt-[130px] px-7 md:px-16">
           <div className="text-center">
             <h2 className="text-base font-bold text-black md:text-xl md:px-6">Vincent Chase</h2>
             <p className="mt-2 text-sm text-black ">Up to 10% off on selected item</p>
             <button className="px-4 py-2 mt-2 font-semibold text-white rounded bg-secondary hover:bg-primary sm:mt-4 md:px-5 hover:text-black">
               Buy Now
             </button>
           </div>
         </div>
       </div>
   </div>
 </div>
  )
}

export default Gallery