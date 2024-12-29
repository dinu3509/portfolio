import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollWatcher from './components/ScrollWatcher'
import About from './components/About'
import Education from './components/Education'
const App = () => {
  return (
    <div>
      <ScrollWatcher></ScrollWatcher>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Education></Education>
</div>
  )
}

export default App
