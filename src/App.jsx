import React from 'react'
import Navbar from './sections/Navbar.jsx'
//import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Project from './sections/Project.jsx'
import Contact from './sections/Contacts.jsx'


const App = () => {
  return (
    <div className='text-3xl font-bold'>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>


    
    
    </div>
  )
}

export default App