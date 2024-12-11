// SlideSobre.tsx
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { cores, fonts } from '../styles'

const HeadlineWrapper = styled.div`
  height: 20%;
  /* height: 30%; */
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  .headline-scroll {
    display: flex;
    align-items: center;
    white-space: nowrap;
    animation: scroll 35s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .headline-scroll span {
    font-family: ${fonts.fontGrande};
    font-size: 5rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }

  .headline-scroll .divisor {
    width: 20px;
    height: 20px;
    background-color: ${cores.cinza};
    border-radius: 50%;
    margin: 0 20px;
  }

  .headline-scroll .bold {
    font-weight: bold;
    color: ${cores.branca};
  }

  .headline-scroll .light {
    font-weight: lighter;
    color: ${cores.cinza};
  }
`

const HeadlineScroll: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      const headlineScroll = scrollContainer.children[0] as HTMLElement
      const clone = headlineScroll.cloneNode(true) as HTMLElement
      scrollContainer.appendChild(clone)

      const scrollWidth = headlineScroll.scrollWidth
      headlineScroll.style.width = `${scrollWidth}px`
      clone.style.width = `${scrollWidth}px`
    }
  }, [])

  return (
    <HeadlineWrapper
      ref={scrollContainerRef}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div id="headline-scroll" className="headline-scroll">
        <span className="bold">SOBRE</span>
        <span className="divisor"></span>
        <span className="light">SOBRE</span>
        <span className="divisor"></span>
        <span className="bold">SOBRE</span>
        <span className="divisor"></span>
        <span className="light">SOBRE</span>
        <span className="divisor"></span>
        <span className="bold">SOBRE</span>
        <span className="divisor"></span>
        <span className="light">SOBRE</span>
        <span className="divisor"></span>
        <span className="bold">SOBRE</span>
        <span className="divisor"></span>
        <span className="light">SOBRE</span>
        <span className="divisor"></span>
        <span className="bold">SOBRE</span>
        <span className="divisor"></span>
        <span className="light">SOBRE</span>
        <span className="divisor"></span>
        <span className="bold">SOBRE</span>
        <span className="divisor"></span>
        <span className="light">SOBRE</span>
        <span className="divisor"></span>
      </div>
    </HeadlineWrapper>
  )
}

export default HeadlineScroll
