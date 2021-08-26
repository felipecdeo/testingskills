import React from 'react'
import {Hero, HeroText} from './Hero.styles'

export default props => {
  return (
    <>
    <Hero>
      <HeroText primary> 
        <p>Finance and Consultancy Solution</p>
      </HeroText>
      <HeroText secondary>
        <p>We know how large objects will act, but things on a small scale.</p>
      </HeroText>
    </Hero>
    </>
  )
}
