import React from 'react'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero/Hero'
import Gallery from './assets/components/Gallery/Gallery'
import About from './assets/components/About/About'
import Products from './assets/components/Products/Products'
import Footer from './assets/components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar/>
      <main className='pt-8'>
      <Hero/>
      </main>
      
      <Gallery/>
      <About/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default App