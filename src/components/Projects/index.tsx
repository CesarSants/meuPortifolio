import { useEffect, useRef, useState } from 'react'
import HeadlineScroll from '../../utils/SlideTitle'
import { Container } from './styles'
import fundo from '../../assets/backGrounds/cinza-11.jpg'

const Projects = () => {
  const [menu, setMenu] = useState('site')
  const [activeButton, setActiveButton] = useState('site')
  const contentWrapperRef = useRef<HTMLDivElement>(null)

  const handleButtonClick = (menuName: 'site' | 'tools') => {
    setMenu(menuName)
    setActiveButton(menuName)
    // if (contentWrapperRef.current) {
    //   contentWrapperRef.current.scrollIntoView({ behavior: 'smooth' })
    // }
    if (contentWrapperRef.current) {
      const element = contentWrapperRef.current.getBoundingClientRect()
      const scrollPosition = window.scrollY + element.top + 60
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Container>
      <HeadlineScroll content="projetos" height="25%" />
      <div className="content-wrapper" ref={contentWrapperRef}>
        <aside
          className="aside"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-delay="200"
        >
          <nav className="nav-tipos">
            <ul>
              <li>
                <button
                  className={activeButton === 'site' ? 'isActive' : ''}
                  onClick={() => handleButtonClick('site')}
                >
                  Websites
                </button>
              </li>
              <li>
                <button
                  className={activeButton === 'tools' ? 'isActive' : ''}
                  onClick={() => handleButtonClick('tools')}
                >
                  Ferramentas
                </button>
              </li>
            </ul>
          </nav>
        </aside>
        <div
          className="content"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <nav className="nav-tipos nav-tipos2">
            <ul>
              <li>
                <button
                  className={activeButton === 'site' ? 'isActive' : ''}
                  onClick={() => handleButtonClick('site')}
                >
                  Websites
                </button>
              </li>
              <li>
                <button
                  className={activeButton === 'tools' ? 'isActive' : ''}
                  onClick={() => handleButtonClick('tools')}
                >
                  Ferramentas
                </button>
              </li>
            </ul>
          </nav>
          <div className="background">
            <img src={fundo} alt="" />
          </div>
          <div className="contentEncaps">
            {menu === 'site' ? (
              <div className="contentPrincipal">ola mundo</div>
            ) : menu === 'tools' ? (
              <div className="contentPrincipal">ola mundo 2</div>
            ) : null}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Projects
