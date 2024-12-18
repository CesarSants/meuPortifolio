// import React from 'react'
import { useEffect, useState } from 'react'
import { Container, GlobalCss } from './styles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Particles from './utils/Particle'
import Projects from './components/Projects'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  // const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    AOS.init()
  }, [])

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const secondSectionOffset = window.innerHeight // altura de 100vh

  //     if (window.scrollY >= secondSectionOffset) {
  //       setIsVisible(true)
  //     } else {
  //       setIsVisible(false)
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll)

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <Provider store={store}>
      <GlobalCss />
      <Particles />
      <Header />
      <Container>
        <Home />
        <About />
        <Projects />
        <About />
      </Container>
    </Provider>
  )
}

export default App
