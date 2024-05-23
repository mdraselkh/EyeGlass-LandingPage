import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter,faLinkedin,faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
   <div className='mt-4 ' id='contact'>
      <div className='grid grid-cols-2 gap-5 p-10 lg:grid-cols-4 lg:px-28'>
       <div className='flex flex-col items-start justify-between lg:justify-start'>
            <div className="text-4xl font-bold text-gray-800">
              Eye<span className="text-primary">Glass</span>
            </div>
            <div className='mt-5 text-left lg:text-left'>
              <p className='font-normal text-md'>Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampde</p>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-5'>
               <div>
               <FontAwesomeIcon icon={faLinkedin}/>
               </div>
               <div>
               <FontAwesomeIcon icon={faInstagramSquare}/>
               </div>
               <div>
               <FontAwesomeIcon icon={faTwitter}/>
               </div> 
            </div>
       </div>
       <div className='flex flex-col items-start justify-between pb-5 pl-4 lg:justify-start lg:items-start lg:ml-28'>
         <p className='text-2xl font-semibold '>Support</p>
         <p className='md:mt-5'>Privacy Policy</p>
         <p className='md:mt-1'>Terms & Conditions</p>
         <p className='md:mt-1'>Product FAQs</p>
         <p className='md:mt-1'>Company Support</p>
         <p className='md:mt-1'>Manage Account</p>
       </div>
       <div className='flex flex-col items-start justify-between lg:justify-start lg:items-start lg:ml-16'>
         <p className='text-2xl font-semibold '>Quick Links</p>
         <p className='mt-5'><a href="#" className='cursor-pointer '>About Us</a></p>
         <p className='mt-1'><a href="#" className='cursor-pointer '>Blog Post</a></p>
         <p className='mt-1'><a href="#" className='cursor-pointer '>Product Features</a></p>
         <p className='mt-1'><a href="#" className='cursor-pointer '>Company Info</a></p>
         <p className='mt-1'><a href="#" className='cursor-pointer '>Contact Us</a></p>
       </div>
       <div className='flex flex-col items-start justify-between pl-4 lg:justify-start lg:items-start lg:ml-10'>
         <p className='text-2xl font-semibold '>Communnity</p>
         <p className='mt-5'>Become an affiliate</p>
         <p className='mt-1'>Help Center</p>
         <p className='mt-1'>Product FAQs</p>
         <p className='mt-1'>Our Forums</p>
         <p className='mt-1'>Product API</p>
       </div>
       
    </div>
    <div className='flex items-center justify-center px-8 py-3 border-t-2 lg:justify-between lg:px-28 lg:py-7'>
      <p className='text-center lg:text-left'>Copyright © 2023 All rights reserved by Eyeglass</p>
      <div className='flex items-center justify-between '>
      <p className='px-5'>Privacy Policy</p>
      <p className=''>Terms Of Services</p>
      </div>
      
    </div>
   </div>
    
  )
}

export default Footer