import React from 'react'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import Operate from '../components/Operate'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Partners from '../components/Partners'
import Footer from '../components/Footer'

const Home = () => {

  return (
    <div className='bg-blue-50 w-full h-full relative'>
        <Navigation  />
        <Hero />
        <Main />
        <Operate />
        <Team />
        <Testimonials />
        <Newsletter />
        <Partners />
        <Footer />
    </div>
  )
}

export default Home