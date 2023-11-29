import React from 'react'
import PageTwoHero from '../components/PageTwoHero'
import Navigation from '../components/Navigation'

const PageTwo = () => {
  return (
    <div className='w-full h-full relative'>
        <Navigation/>
        <PageTwoHero />
    </div>
  )
}

export default PageTwo