// import styled from 'styled-components'
// import fundo from '../../assets/backGrounds/cinza-19.webp'

// export const Container = styled.div`
//   height: 100vh;
//   background-image: url(${fundo});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   overflow: hidden;
//   position: relative;
//   z-index: 0;
//   opacity: 0.8;
//   padding-top: 64px;

//   &:after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: black;
//     opacity: 0.5;
//     z-index: 1;
//     pointer-events: none;
//   }

//   :first-child {
//     position: relative;
//     z-index: 2;
//   }

//   .cont {
//   }
// `

import styled from 'styled-components'
import { fonts } from '../../styles'
import fundo from '../../assets/backGrounds/roxo-6.jpg'

export const Container = styled.div`
  /* height: 200vh; */
  /* height: 100vh; */
  overflow: hidden;
  position: relative;
  opacity: 1;

  .background,
  .backgroundResume {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;

    img {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.65;
    }
  }

  .backgroundResume {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    border-radius: 40px;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.5;
      z-index: 0;
      pointer-events: none;
      border-radius: 40px;
    }

    img {
      border-radius: 40px;
      box-shadow: 0px 4px 20px rgba(255, 0, 0, 0.8);
    }
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.35;
    z-index: -1;
    pointer-events: none;
  }

  .aboutContainer {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* text-align: center; */
    /* gap: 32px; */
    max-width: 1024px;
    margin: 70px auto 0;
  }

  .resume {
    width: 50%;
    line-height: 20px;
    font-family: ${fonts.fontPequena};
    font-size: 19px;
    margin-top: 100px;
    position: relative;
    z-index: 0;
    border-radius: 40px;

    p {
      padding: 20px;
    }
  }

  .container-svg {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: auto;
    overflow: hidden;
  }

  .svg-image {
    align-items: center;
    position: absolute;
    display: flex;
    img {
      z-index: 0;
      width: auto;
      margin-right: -58px;
      /* max-height: 450px;
      height: auto;
      margin-bottom: 48px; */
      max-height: 450px;
      height: auto;
      margin-bottom: 41px;
    }
  }

  .complemento-sobre {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    z-index: 0;
    margin-top: 100px;
  }

  .complemento-sobre svg {
    position: relative;
    display: block;
    margin-right: -58px;
    /* left: 50px;
    top: 50px; */
    width: 600px;
    height: 600px;
    z-index: 0;
    animation: rotate 30s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0deg);
    }
  }
  .aboutContainer2 {
    margin-top: 0;
    align-items: center;
    justify-content: center;
    margin-top: -120px;
    margin-bottom: -40px;
  }

  .container2 {
    padding-top: 70px;

    h3 {
      text-align: center;
      font-size: 60px;
      font-family: ${fonts.fontGrande};
    }
  }

  .aboutContainer1 {
    padding-bottom: 20px;
  }

  .tec {
    width: 580px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 20px;
    margin-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .grid-item {
    position: relative;
    width: 100px;
    height: 100px;
    transition: transform 1s ease;
  }

  .grid-item img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: opacity 1s ease;
  }

  .grid-item img.dark {
    opacity: 1;
  }

  .grid-item:hover img.dark {
    opacity: 1;
  }

  .grid-item:hover img.normal {
    opacity: 0;
  }

  .grid-item:hover {
    transform: scale(1.2);
  }
`
