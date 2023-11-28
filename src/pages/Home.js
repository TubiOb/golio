import React from 'react'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <div className='bg-white w-full h-full'>
        <Navigation />
        <Hero />
    </div>
  )
}

export default Home