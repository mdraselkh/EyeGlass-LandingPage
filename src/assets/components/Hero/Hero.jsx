import React from 'react'
import heroBg1 from "..//..//images/heroBG.png";
import Slider from 'react-slick';
import shop from "..//..//images/shop icon.svg";
import "./Hero.css";


const Herodata=[
   {
      id:1,
      img:heroBg1,
      title:"Personalize Eyeglass Shoppping",   
   },
   {
      id:2,
      img:heroBg1,
      title:"Personalize Eyeglass Shoppping",   
   },
   {
      id:3,
      img:heroBg1,
      title:"Personalize Eyeglass Shoppping",   
   },
]


const Hero = () => {
   const settings = {
      dots: true,
      arrows: false,  // Add this line to remove arrows
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: false,
      autoplaySpeed: 3000,
    };
  
  return (
    <div id='home'>
      <div className='w-full bg-background h-[420px] md:h-[520px]'>
      <Slider {...settings}>
               {
                    Herodata.map((data) =>(
                     <div key={data.id} className='pt-2'>
                       <div className='relative flex items-center justify-center w-full h-full max-w-lg ml-auto mr-auto'>
                         <img src={data.img} alt="Eyeglass Model 1" className="object-cover px-4 mt-9" />
                       </div>

                       <div className="absolute inset-0 flex items-center justify-center md:w-[650px] px-20 mt-28 md:text-left md:px-18 md:mt-2">
                        <div className="mt-8 text-center md:text-left">
                             <h1 className="mt-8 text-2xl font-bold text-center text-gray-800 md:text-4xl md:text-left md:px-10 md:ml-12">{data.title}</h1>
                             <div className='md:mr-24 md:mt-14'>
                             <button className="flex px-10 py-3 mx-auto my-5 font-semibold text-white rounded hover:bg-primary bg-secondary hover:text-black md:px-14 md:py-4 md:text-xl">
                                 <img src={shop} alt="" />
                                 Buy Now
                              </button>
                             </div>
                              
                        </div>
                       </div>
                        
                     </div>
                  ))
               }    
              
            </Slider>
      </div>
      <div className="absolute z-10 grid w-full grid-cols-2 px-10 -mt-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-20">
          <div className="flex flex-col items-center mb-5">
            <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-primary">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-black">Search your sunglass</h3>
            <p className="text-sm text-center text-gray-400">Shop Stylish Eyewear Now</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-primary">
              <span className="text-2xl">🕶️</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-black">Select Sunglass</h3>
            <p className="text-sm text-center text-gray-400">Shade Your Style</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-primary">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-black">Make Payment</h3>
            <p className="text-sm text-center text-gray-400">Securely Checkout Now</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-primary">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-black">Received Product</h3>
            <p className="text-sm text-center text-gray-400">See the World Clearly</p>
          </div>
        </div>
    </div>
  )
}

export default Hero

{/* <div className='w-full bg-background'>
<Slider {...settings} >
  {
    Herodata.map((data)=>(
       <div key={data.id}>
         <div>
           <h1></h1>
         </div>
         <div>
          
         </div>
       </div>
       
    ))
  }
</Slider>
</div> */}