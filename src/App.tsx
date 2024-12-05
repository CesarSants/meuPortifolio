// import React from 'react'
import React, { useEffect, useState } from 'react'
import { Container, GlobalCss, Header, HeaderContainer, Inicio } from './styles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ChevronComponent from './utils/chevronComponent'
import Particles from './components/Particle'
import topsombra from './assets/images/top-sombra-execao.png'
import topLogo from './assets/images/top-nome3.png'
import AnimatedText from './utils/AnimatedText'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const handleMenuToggle = () => {
  //   setIsMenuOpen((prevState) => !prevState)
  // }

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => {
      if (prevState) {
        setTimeout(() => {
          const menuContainer = document.querySelector(
            '.menu-aberto'
          ) as HTMLElement
          if (menuContainer) {
            menuContainer.scrollTop = 0
          }
        }, 500)
      }
      return !prevState
    })
  }

  const handleOverlayClick = () => {
    setIsMenuOpen(false)
    setTimeout(() => {
      const menuContainer = document.querySelector(
        '.menu-aberto'
      ) as HTMLElement
      if (menuContainer) {
        menuContainer.scrollTop = 0
      }
    }, 500)
  }

  return (
    <Container>
      <GlobalCss />
      <Header className="header">
        {/* <div>ola mundo</div> */}
        <HeaderContainer>
          <div className="logo">
            <img src={topLogo} alt="Logo" />
          </div>
          <div className="menuContainer">
            <div className="menu">
              <label className="hamburger">
                <input
                  type="checkbox"
                  id="menuToggle"
                  checked={isMenuOpen}
                  onChange={handleMenuToggle}
                  aria-label="Abrir menu"
                />
                <svg viewBox="0 0 32 32">
                  <path
                    className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                  ></path>
                  <path className="line" d="M7 16 27 16"></path>
                </svg>
              </label>
            </div>
          </div>
          <div className="menuAbertoContainer">
            <div className={`menu-aberto ${isMenuOpen ? 'active' : ''}`}>
              <ChevronComponent />
              <nav className="nav-menu">
                <a href="#inicio">INÍCIO</a>
                <a href="#sobre">SOBRE</a>
                <a href="#servicos">SERVIÇOS</a>
                <a href="#portfolio">PORTFÓLIO</a>
                <a href="#contato">CONTATO</a>
              </nav>
            </div>
            <div
              className={`overlay ${isMenuOpen ? 'active' : ''}`}
              onClick={handleOverlayClick}
              aria-hidden="true"
            ></div>
          </div>
        </HeaderContainer>
      </Header>
      <Inicio id="inicio" className="inicio">
        <Particles />
        <div className="container-inicio">
          <div
            className="conteudo-inicio"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="titulo-inicio">
              {/* <h1>Lorem ipsum</h1> */}
              <h1 className="destaque-inicio">
                <img src={topsombra} alt="" />
              </h1>
            </div>
            <div
              className="paragrafo-inicio"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <p>
                Desenvolvedor{' '}
                <span>
                  <AnimatedText textArray={['Front-End', 'Criativo', 'Web']} />
                </span>
              </p>
              <p>
                Conectando design e tecnologia para dar vida às suas ideias.
              </p>
            </div>
            <button
              className="cta"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <span>Fale Comigo</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </Inicio>
    </Container>
  )
}

export default App
