import React from 'react'
import {Hero, HeroText, HeroInteractive, HeroButton, HeroFeatures, HeroBox, HeroBoxContent, HeroBoxIcon} from './Hero.styles'

export default props => {
  return (
    <>
    <Hero>
      <HeroText primary> 
        <p> Finance and Consultancy Solution </p>
      </HeroText>
      <HeroText secondary>
        <p> We know how large objects will act, but things on a small scale. </p>
      </HeroText>
      <HeroInteractive>
        <HeroButton primary> Get Quote Now </HeroButton>
        <HeroButton secondary> Learn More </HeroButton>
      </HeroInteractive>
    </Hero>
    <HeroFeatures>
      <HeroBox>
        <HeroBoxIcon>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" stroke="#0D5C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.8 30C38.5338 30.6032 38.4543 31.2724 38.572 31.9212C38.6896 32.57 38.9989 33.1686 39.46 33.64L39.58 33.76C39.9519 34.1315 40.2469 34.5726 40.4482 35.0582C40.6495 35.5438 40.7531 36.0643 40.7531 36.59C40.7531 37.1157 40.6495 37.6362 40.4482 38.1218C40.2469 38.6073 39.9519 39.0485 39.58 39.42C39.2085 39.7919 38.7673 40.0869 38.2817 40.2882C37.7962 40.4895 37.2756 40.5931 36.75 40.5931C36.2243 40.5931 35.7038 40.4895 35.2182 40.2882C34.7326 40.0869 34.2915 39.7919 33.92 39.42L33.8 39.3C33.3286 38.8389 32.73 38.5296 32.0812 38.412C31.4324 38.2943 30.7632 38.3738 30.16 38.64C29.5685 38.8935 29.064 39.3145 28.7086 39.8511C28.3533 40.3876 28.1626 41.0164 28.16 41.66V42C28.16 43.0609 27.7386 44.0783 26.9884 44.8284C26.2383 45.5786 25.2209 46 24.16 46C23.0991 46 22.0817 45.5786 21.3316 44.8284C20.5814 44.0783 20.16 43.0609 20.16 42V41.82C20.1445 41.158 19.9302 40.516 19.545 39.9774C19.1598 39.4388 18.6215 39.0286 18 38.8C17.3968 38.5338 16.7276 38.4543 16.0788 38.572C15.43 38.6896 14.8314 38.9989 14.36 39.46L14.24 39.58C13.8685 39.9519 13.4273 40.2469 12.9418 40.4482C12.4562 40.6495 11.9357 40.7531 11.41 40.7531C10.8843 40.7531 10.3638 40.6495 9.87824 40.4482C9.39264 40.2469 8.95149 39.9519 8.58 39.58C8.20809 39.2085 7.91306 38.7673 7.71176 38.2818C7.51046 37.7962 7.40685 37.2757 7.40685 36.75C7.40685 36.2243 7.51046 35.7038 7.71176 35.2182C7.91306 34.7326 8.20809 34.2915 8.58 33.92L8.7 33.8C9.16107 33.3286 9.47037 32.73 9.58801 32.0812C9.70564 31.4324 9.62623 30.7632 9.36 30.16C9.10647 29.5685 8.68551 29.064 8.14893 28.7086C7.61235 28.3533 6.98357 28.1626 6.34 28.16H6C4.93913 28.16 3.92172 27.7386 3.17157 26.9884C2.42143 26.2383 2 25.2209 2 24.16C2 23.0991 2.42143 22.0817 3.17157 21.3316C3.92172 20.5814 4.93913 20.16 6 20.16H6.18C6.84199 20.1445 7.48401 19.9302 8.0226 19.545C8.56118 19.1598 8.97143 18.6215 9.2 18C9.46623 17.3968 9.54564 16.7276 9.42801 16.0788C9.31037 15.43 9.00107 14.8314 8.54 14.36L8.42 14.24C8.04809 13.8685 7.75306 13.4274 7.55176 12.9418C7.35046 12.4562 7.24685 11.9357 7.24685 11.41C7.24685 10.8843 7.35046 10.3638 7.55176 9.87824C7.75306 9.39264 8.04809 8.95149 8.42 8.58C8.79149 8.20809 9.23264 7.91306 9.71824 7.71176C10.2038 7.51046 10.7243 7.40685 11.25 7.40685C11.7757 7.40685 12.2962 7.51046 12.7818 7.71176C13.2673 7.91306 13.7085 8.20809 14.08 8.58L14.2 8.7C14.6714 9.16107 15.27 9.47037 15.9188 9.58801C16.5676 9.70564 17.2368 9.62623 17.84 9.36H18C18.5915 9.10647 19.096 8.68551 19.4514 8.14893C19.8067 7.61235 19.9974 6.98357 20 6.34V6C20 4.93913 20.4214 3.92172 21.1716 3.17157C21.9217 2.42143 22.9391 2 24 2C25.0609 2 26.0783 2.42143 26.8284 3.17157C27.5786 3.92172 28 4.93913 28 6V6.18C28.0026 6.82357 28.1933 7.45235 28.5486 7.98893C28.904 8.52551 29.4085 8.94647 30 9.2C30.6032 9.46623 31.2724 9.54565 31.9212 9.42801C32.57 9.31037 33.1686 9.00107 33.64 8.54L33.76 8.42C34.1315 8.04809 34.5726 7.75306 35.0582 7.55176C35.5438 7.35046 36.0643 7.24685 36.59 7.24685C37.1156 7.24685 37.6362 7.35046 38.1217 7.55176C38.6073 7.75306 39.0485 8.04809 39.42 8.42C39.7919 8.79149 40.0869 9.23264 40.2882 9.71824C40.4895 10.2038 40.5931 10.7243 40.5931 11.25C40.5931 11.7757 40.4895 12.2962 40.2882 12.7818C40.0869 13.2674 39.7919 13.7085 39.42 14.08L39.3 14.2C38.8389 14.6714 38.5296 15.27 38.412 15.9188C38.2943 16.5676 38.3738 17.2368 38.64 17.84V18C38.8935 18.5915 39.3145 19.096 39.8511 19.4514C40.3876 19.8067 41.0164 19.9974 41.66 20H42C43.0609 20 44.0783 20.4214 44.8284 21.1716C45.5786 21.9217 46 22.9391 46 24C46 25.0609 45.5786 26.0783 44.8284 26.8284C44.0783 27.5786 43.0609 28 42 28H41.82C41.1764 28.0026 40.5476 28.1933 40.0111 28.5486C39.4745 28.904 39.0535 29.4085 38.8 30V30Z" stroke="#0D5C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </HeroBoxIcon>
        <HeroBoxContent primary> Surface Transport & Logistics </HeroBoxContent>
        <HeroBoxContent secondary> We focus on ergonomics and meeting you where you work. </HeroBoxContent>
      </HeroBox>
      <HeroBox>
        <HeroBoxIcon>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" stroke="#0D5C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.8 30C38.5338 30.6032 38.4543 31.2724 38.572 31.9212C38.6896 32.57 38.9989 33.1686 39.46 33.64L39.58 33.76C39.9519 34.1315 40.2469 34.5726 40.4482 35.0582C40.6495 35.5438 40.7531 36.0643 40.7531 36.59C40.7531 37.1157 40.6495 37.6362 40.4482 38.1218C40.2469 38.6073 39.9519 39.0485 39.58 39.42C39.2085 39.7919 38.7673 40.0869 38.2817 40.2882C37.7962 40.4895 37.2756 40.5931 36.75 40.5931C36.2243 40.5931 35.7038 40.4895 35.2182 40.2882C34.7326 40.0869 34.2915 39.7919 33.92 39.42L33.8 39.3C33.3286 38.8389 32.73 38.5296 32.0812 38.412C31.4324 38.2943 30.7632 38.3738 30.16 38.64C29.5685 38.8935 29.064 39.3145 28.7086 39.8511C28.3533 40.3876 28.1626 41.0164 28.16 41.66V42C28.16 43.0609 27.7386 44.0783 26.9884 44.8284C26.2383 45.5786 25.2209 46 24.16 46C23.0991 46 22.0817 45.5786 21.3316 44.8284C20.5814 44.0783 20.16 43.0609 20.16 42V41.82C20.1445 41.158 19.9302 40.516 19.545 39.9774C19.1598 39.4388 18.6215 39.0286 18 38.8C17.3968 38.5338 16.7276 38.4543 16.0788 38.572C15.43 38.6896 14.8314 38.9989 14.36 39.46L14.24 39.58C13.8685 39.9519 13.4273 40.2469 12.9418 40.4482C12.4562 40.6495 11.9357 40.7531 11.41 40.7531C10.8843 40.7531 10.3638 40.6495 9.87824 40.4482C9.39264 40.2469 8.95149 39.9519 8.58 39.58C8.20809 39.2085 7.91306 38.7673 7.71176 38.2818C7.51046 37.7962 7.40685 37.2757 7.40685 36.75C7.40685 36.2243 7.51046 35.7038 7.71176 35.2182C7.91306 34.7326 8.20809 34.2915 8.58 33.92L8.7 33.8C9.16107 33.3286 9.47037 32.73 9.58801 32.0812C9.70564 31.4324 9.62623 30.7632 9.36 30.16C9.10647 29.5685 8.68551 29.064 8.14893 28.7086C7.61235 28.3533 6.98357 28.1626 6.34 28.16H6C4.93913 28.16 3.92172 27.7386 3.17157 26.9884C2.42143 26.2383 2 25.2209 2 24.16C2 23.0991 2.42143 22.0817 3.17157 21.3316C3.92172 20.5814 4.93913 20.16 6 20.16H6.18C6.84199 20.1445 7.48401 19.9302 8.0226 19.545C8.56118 19.1598 8.97143 18.6215 9.2 18C9.46623 17.3968 9.54564 16.7276 9.42801 16.0788C9.31037 15.43 9.00107 14.8314 8.54 14.36L8.42 14.24C8.04809 13.8685 7.75306 13.4274 7.55176 12.9418C7.35046 12.4562 7.24685 11.9357 7.24685 11.41C7.24685 10.8843 7.35046 10.3638 7.55176 9.87824C7.75306 9.39264 8.04809 8.95149 8.42 8.58C8.79149 8.20809 9.23264 7.91306 9.71824 7.71176C10.2038 7.51046 10.7243 7.40685 11.25 7.40685C11.7757 7.40685 12.2962 7.51046 12.7818 7.71176C13.2673 7.91306 13.7085 8.20809 14.08 8.58L14.2 8.7C14.6714 9.16107 15.27 9.47037 15.9188 9.58801C16.5676 9.70564 17.2368 9.62623 17.84 9.36H18C18.5915 9.10647 19.096 8.68551 19.4514 8.14893C19.8067 7.61235 19.9974 6.98357 20 6.34V6C20 4.93913 20.4214 3.92172 21.1716 3.17157C21.9217 2.42143 22.9391 2 24 2C25.0609 2 26.0783 2.42143 26.8284 3.17157C27.5786 3.92172 28 4.93913 28 6V6.18C28.0026 6.82357 28.1933 7.45235 28.5486 7.98893C28.904 8.52551 29.4085 8.94647 30 9.2C30.6032 9.46623 31.2724 9.54565 31.9212 9.42801C32.57 9.31037 33.1686 9.00107 33.64 8.54L33.76 8.42C34.1315 8.04809 34.5726 7.75306 35.0582 7.55176C35.5438 7.35046 36.0643 7.24685 36.59 7.24685C37.1156 7.24685 37.6362 7.35046 38.1217 7.55176C38.6073 7.75306 39.0485 8.04809 39.42 8.42C39.7919 8.79149 40.0869 9.23264 40.2882 9.71824C40.4895 10.2038 40.5931 10.7243 40.5931 11.25C40.5931 11.7757 40.4895 12.2962 40.2882 12.7818C40.0869 13.2674 39.7919 13.7085 39.42 14.08L39.3 14.2C38.8389 14.6714 38.5296 15.27 38.412 15.9188C38.2943 16.5676 38.3738 17.2368 38.64 17.84V18C38.8935 18.5915 39.3145 19.096 39.8511 19.4514C40.3876 19.8067 41.0164 19.9974 41.66 20H42C43.0609 20 44.0783 20.4214 44.8284 21.1716C45.5786 21.9217 46 22.9391 46 24C46 25.0609 45.5786 26.0783 44.8284 26.8284C44.0783 27.5786 43.0609 28 42 28H41.82C41.1764 28.0026 40.5476 28.1933 40.0111 28.5486C39.4745 28.904 39.0535 29.4085 38.8 30V30Z" stroke="#0D5C63" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </HeroBoxIcon>
        <HeroBoxContent primary> Save money and time </HeroBoxContent>
        <HeroBoxContent secondary> Just type what's on your mind and we'll get you there. </HeroBoxContent>
      </HeroBox>
      <HeroBox diff>
        <HeroBoxIcon>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M38.8 30C38.5338 30.6032 38.4543 31.2724 38.572 31.9212C38.6896 32.57 38.9989 33.1686 39.46 33.64L39.58 33.76C39.9519 34.1315 40.2469 34.5726 40.4482 35.0582C40.6495 35.5438 40.7531 36.0643 40.7531 36.59C40.7531 37.1157 40.6495 37.6362 40.4482 38.1218C40.2469 38.6073 39.9519 39.0485 39.58 39.42C39.2085 39.7919 38.7673 40.0869 38.2817 40.2882C37.7962 40.4895 37.2756 40.5931 36.75 40.5931C36.2243 40.5931 35.7038 40.4895 35.2182 40.2882C34.7326 40.0869 34.2915 39.7919 33.92 39.42L33.8 39.3C33.3286 38.8389 32.73 38.5296 32.0812 38.412C31.4324 38.2943 30.7632 38.3738 30.16 38.64C29.5685 38.8935 29.064 39.3145 28.7086 39.8511C28.3533 40.3876 28.1626 41.0164 28.16 41.66V42C28.16 43.0609 27.7386 44.0783 26.9884 44.8284C26.2383 45.5786 25.2209 46 24.16 46C23.0991 46 22.0817 45.5786 21.3316 44.8284C20.5814 44.0783 20.16 43.0609 20.16 42V41.82C20.1445 41.158 19.9302 40.516 19.545 39.9774C19.1598 39.4388 18.6215 39.0286 18 38.8C17.3968 38.5338 16.7276 38.4543 16.0788 38.572C15.43 38.6896 14.8314 38.9989 14.36 39.46L14.24 39.58C13.8685 39.9519 13.4273 40.2469 12.9418 40.4482C12.4562 40.6495 11.9357 40.7531 11.41 40.7531C10.8843 40.7531 10.3638 40.6495 9.87824 40.4482C9.39264 40.2469 8.95149 39.9519 8.58 39.58C8.20809 39.2085 7.91306 38.7673 7.71176 38.2818C7.51046 37.7962 7.40685 37.2757 7.40685 36.75C7.40685 36.2243 7.51046 35.7038 7.71176 35.2182C7.91306 34.7326 8.20809 34.2915 8.58 33.92L8.7 33.8C9.16107 33.3286 9.47037 32.73 9.58801 32.0812C9.70564 31.4324 9.62623 30.7632 9.36 30.16C9.10647 29.5685 8.68551 29.064 8.14893 28.7086C7.61235 28.3533 6.98357 28.1626 6.34 28.16H6C4.93913 28.16 3.92172 27.7386 3.17157 26.9884C2.42143 26.2383 2 25.2209 2 24.16C2 23.0991 2.42143 22.0817 3.17157 21.3316C3.92172 20.5814 4.93913 20.16 6 20.16H6.18C6.84199 20.1445 7.48401 19.9302 8.0226 19.545C8.56118 19.1598 8.97143 18.6215 9.2 18C9.46623 17.3968 9.54564 16.7276 9.42801 16.0788C9.31037 15.43 9.00107 14.8314 8.54 14.36L8.42 14.24C8.04809 13.8685 7.75306 13.4274 7.55176 12.9418C7.35046 12.4562 7.24685 11.9357 7.24685 11.41C7.24685 10.8843 7.35046 10.3638 7.55176 9.87824C7.75306 9.39264 8.04809 8.95149 8.42 8.58C8.79149 8.20809 9.23264 7.91306 9.71824 7.71176C10.2038 7.51046 10.7243 7.40685 11.25 7.40685C11.7757 7.40685 12.2962 7.51046 12.7818 7.71176C13.2673 7.91306 13.7085 8.20809 14.08 8.58L14.2 8.7C14.6714 9.16107 15.27 9.47037 15.9188 9.58801C16.5676 9.70564 17.2368 9.62623 17.84 9.36H18C18.5915 9.10647 19.096 8.68551 19.4514 8.14893C19.8067 7.61235 19.9974 6.98357 20 6.34V6C20 4.93913 20.4214 3.92172 21.1716 3.17157C21.9217 2.42143 22.9391 2 24 2C25.0609 2 26.0783 2.42143 26.8284 3.17157C27.5786 3.92172 28 4.93913 28 6V6.18C28.0026 6.82357 28.1933 7.45235 28.5486 7.98893C28.904 8.52551 29.4085 8.94647 30 9.2C30.6032 9.46623 31.2724 9.54565 31.9212 9.42801C32.57 9.31037 33.1686 9.00107 33.64 8.54L33.76 8.42C34.1315 8.04809 34.5726 7.75306 35.0582 7.55176C35.5438 7.35046 36.0643 7.24685 36.59 7.24685C37.1156 7.24685 37.6362 7.35046 38.1217 7.55176C38.6073 7.75306 39.0485 8.04809 39.42 8.42C39.7919 8.79149 40.0869 9.23264 40.2882 9.71824C40.4895 10.2038 40.5931 10.7243 40.5931 11.25C40.5931 11.7757 40.4895 12.2962 40.2882 12.7818C40.0869 13.2674 39.7919 13.7085 39.42 14.08L39.3 14.2C38.8389 14.6714 38.5296 15.27 38.412 15.9188C38.2943 16.5676 38.3738 17.2368 38.64 17.84V18C38.8935 18.5915 39.3145 19.096 39.8511 19.4514C40.3876 19.8067 41.0164 19.9974 41.66 20H42C43.0609 20 44.0783 20.4214 44.8284 21.1716C45.5786 21.9217 46 22.9391 46 24C46 25.0609 45.5786 26.0783 44.8284 26.8284C44.0783 27.5786 43.0609 28 42 28H41.82C41.1764 28.0026 40.5476 28.1933 40.0111 28.5486C39.4745 28.904 39.0535 29.4085 38.8 30V30Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </HeroBoxIcon>
        <HeroBoxContent primary diff> Environmental Consulting </HeroBoxContent>
        <HeroBoxContent secondary diff> the quick fox jumps over the lazy dog </HeroBoxContent>
      </HeroBox>
    </HeroFeatures>
    </>
  )
}
