import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ScrollWatcher from './components/ScrollWatcher'
import About from './components/About'
const App = () => {
  return (
    <div>
      <ScrollWatcher></ScrollWatcher>
      <Header></Header>
      <Hero></Hero>
      <About></About>
</div>
  )
}

export default App
