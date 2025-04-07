import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {

  return (
    <>
  <Nav/>
  <Hero/>
  <Projects/>
  <Skills/>
  <Resume />
  <Contact/>
    </>
  )
}

export default App
