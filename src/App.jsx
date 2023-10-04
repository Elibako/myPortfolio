import React from 'react'
import Header from './components/header/Header'
import Body from './components/body/Body'
import ServiceSection from './components/ServiceSection/ServiceSection'
// import Socials from './components/socials/Socials'
// import AboutMe from './components/about-me/aboutme'
// import Skills from './components/my-skills/Skills'
import Works from './components/my-works/Works'
import Contactme from './components/contactMe/contactMe'
import ParticleBg from './components/particleJs/particleBg'
import Footer from './components/footer/footer'
import {BrowserRouter} from 'react-router-dom'
const App = () => {
  return (
   <BrowserRouter>
    <div>
      <Header />
      <Body />
      <ServiceSection/>
      <Works/>
      <ParticleBg/>
      <Contactme/>
       <Footer/>
    </div>
   </BrowserRouter>
  )
}

export default App