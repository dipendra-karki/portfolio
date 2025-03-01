import { useState, useEffect } from 'react'
import MainLayout from './layouts/MainLayout'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LoadingScreen from './components/LoadingScreen'
import { AnimatePresence } from 'framer-motion'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <AnimatePresence mode='wait'>
      {loading ? (
        <LoadingScreen />
      ) : (
        <MainLayout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </MainLayout>
      )}
    </AnimatePresence>
  )
}

export default App