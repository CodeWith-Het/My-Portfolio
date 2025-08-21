import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero-Section/Hero'
import About from './Components/About-Section/About'
import SkillProject from './Components/Skill+Project-Section/Skill_Project'
import ContactUs from './Components/Contact/Contact'
import Footer from './Components/Footer-Section/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <SkillProject />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
