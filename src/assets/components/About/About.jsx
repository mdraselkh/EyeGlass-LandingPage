import React from 'react'
import sunglsimg from "..//.//..//images/sunglass.png"

const About = () => {
  return (
    <div className='w-full mt-4 mb-10 h-min md:mt-0' id='about'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
         <div className='w-full h-full bg-primary'>
         <div className="flex items-center justify-center py-12 ml-auto mr-auto px-14 md:p-28">
           <div className="text-left">
             <h2 className="text-2xl font-bold text-black">Experience clear vision with OptiChroma Vision Frames</h2>
             <p className="mt-3 text-[#545454]">At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. That's why we've designed a collection of frames that prioritize both form and function.</p>
             <p className="mt-2 text-[#545454]">Our team of experts is dedicated to helping you find the perfect pair of glasses.</p>
             <button className="px-6 py-2 mt-4 font-semibold text-white rounded hover:bg-black sm:mt-4 bg-secondary md:mt-6">
               About Us
             </button>
           </div>
         </div>
         </div>
         <div className='w-full'>
               <img src={sunglsimg} alt="" className='object-cover ' />
         </div>
      </div>
      
    </div>
  )
}

export default About