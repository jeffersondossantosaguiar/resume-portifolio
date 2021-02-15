import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import About from '../sessions/About'
import Contact from '../sessions/Contact'
import Education from '../sessions/Education'
import Home from '../sessions/Home'
import Portifolio from '../sessions/Portifolio'
import Skills from '../sessions/Skiils'

const LandingPage = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home />
      <About />
      <Skills />
      <Portifolio />
      <Education />
      <Contact />
    </>
  )
}

export default LandingPage
