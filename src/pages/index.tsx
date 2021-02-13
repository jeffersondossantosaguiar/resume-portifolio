import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Contact from '../sessions/Contact'
import Home from '../sessions/Home'
import Portifolio from '../sessions/Portifolio'

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
      <Portifolio />
      <Contact />
    </>
  )
}

export default LandingPage
