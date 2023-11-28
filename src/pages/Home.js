import React from 'react'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import Main from '../components/Main'
import MobileNav from '../components/MobileNav'
import Operate from '../components/Operate'
import Team from '../components/Team'

const Home = () => {
  return (
    <div className='bg-blue-50 w-full h-full'>
        <Navigation />
        <MobileNav />
        <Hero />
        <Main />
        <Operate />
        <Team />
    </div>
  )
}

export default Home