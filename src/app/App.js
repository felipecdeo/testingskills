import React from 'react'
import GlobalStyle from '../theme/globalStyles'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HeroBackground from '../components/Background'

export default props => {
  return ( 
  <>
    <GlobalStyle/>
    <Header/>
    <Hero/>
    <HeroBackground/>
  </>
  )
}
