
import { Contact, Footer, Header, Hero, Pricing, } from '@/components'
import Features from '@/components/Features'

import React from 'react'

const Home = () => {
  return (
    <>
      <main  >
        <Header/>
        <Hero/>
        <Features/>
        <Pricing/>
        <Contact/>
        <Footer/>
      </main>
      <footer>
        
      </footer>
    </>
  )
}

export default Home
