import styled, { createGlobalStyle } from 'styled-components'

const cores = {
  branca: '#eeeeee',
  preta: '#111111',
  cinza: '#333333',
  verde: '#10ac84',
  amarelo: '#e7fc00'
}

const fonts = {
  fontGrande: "'Poppins', sans-serif",
  fontPequena: "'Work Sans', sans-serif"
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.fontPequena};
  }

  body{
    background-color: ${cores.preta};
    color: ${cores.branca};
    overflow-x: hidden;

      #tsparticles {
      position: absolute;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background-color: transparent;
      background-image: url("");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      opacity: 0.9;
    }
  }
`

export const Container = styled.div`
  position: relative;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;

  .logo {
    img {
      height: 5vh;
    }
  }

  .menuAbertoContainer {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

export const Header = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 16px;

  .logo {
    z-index: 98;
    margin-left: 20px;
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* z-index: 100; */
    z-index: 101;
    position: fixed;
    right: 20px;
  }

  .hamburger {
    cursor: pointer;
    z-index: 103; //
    position: relative;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }

  .menu-aberto {
    background-color: rgba(0, 0, 0, 0.92);
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    height: 0;
    width: 80%;
    /* z-index: 100; */
    z-index: 98;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: 0;
    border-bottom-left-radius: 42px;
    border-bottom-right-radius: 42px;
    border: 8px #9999 groove;
    border-left: 8px #9999 ridge;
    border-top: none;
    box-shadow: 0 0 0 #666 inset,
      /* Sombra interna na parte inferior */ 0 0 8px #666 inset;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .menu-aberto.active {
    height: 50vh;
    opacity: 1;
  }

  .nav-menu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    transition: opacity 0.5s ease-in-out;
    position: absolute;
    padding-top: 16px;
  }

  .nav-menu a {
    user-select: none;
    text-decoration: none;
    color: ${cores.branca};
    font-family: ${fonts.fontPequena};
    font-size: 3rem;
    font-weight: bold;
    opacity: 0;
    transform: translateY(-20px);
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    &:last-child {
      /* padding-bottom: 2rem; */
    }
  }

  .menu-aberto.active .nav-menu a {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.9s ease;
    z-index: 103;
  }

  .nav-menu a:hover {
    color: ${cores.amarelo};
    transition: all 0.9s ease;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 97;
    pointer-events: none;
    opacity: 0;
    transform: translateY(-100%);
    transition: transform 0.55s ease-in-out, opacity 0.55s ease-in-out;
  }

  .menu-aberto.active ~ .overlay {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .menu-aberto.active {
    height: 50vh;
    opacity: 1;
    transition: height 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }

  .menu-aberto:not(.active) ~ .overlay {
    opacity: 0;
    pointer-events: none;
    transform: translateY(-100%);
  }

  .chevron-down {
    display: block;
    position: fixed;
    bottom: 55vh;
    left: 85vw;
    transform: translateX(-50%);
    transition: opacity 0.4s ease-out;
    /* opacity: 0; */
    user-select: none;
  }
  .chevron-down img {
    width: 32px;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }

    50% {
      transform: translateX(-50%) translateY(-20px);
    }
  }
`

export const Inicio = styled.main`
  width: 100%;
  height: 100%h;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem;
  /* overflow-y: hidden; */

  .cta {
    position: relative;
    margin: auto;
    padding: 52px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
    margin-top: -20px;
  }

  .cta span {
    font-size: clamp(1.2rem, 1.5vw + 1rem, 2rem);
  }

  .cta:before {
    content: '';
    position: absolute;
    top: 50%;
    bottom: auto;
    left: -2px;
    display: block;
    border-radius: 50px;
    background: linear-gradient(to right, #3e79f7, #728e6f);
    width: 15px;
    height: 15px;
    transition: all 0.3s ease;
    transform: translateY(-50%);
  }

  .cta span {
    position: relative;
    font-family: ${fonts.fontPequena};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: ${cores.branca};
  }

  .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #3e79f7;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }

  .cta:hover:before {
    width: 100%;
    background: linear-gradient(to right, #3e79f7, #728e6f);
    height: 45px;
  }

  .cta:hover svg {
    transform: translateX(0);
    stroke: #e7fc00;
    stroke-width: 3;
  }

  .cta:active {
    transform: scale(0.95);
  }

  .paragrafo-inicio {
    margin-top: -10vh;

    text-align: center;
    color: #c4acf0;
    font-size: 30px;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.9),
      -3px -3px 8px rgba(0, 0, 0, 0.9), 0 0 15px rgba(0, 0, 0, 0.5);

    p:first-child {
      font-size: 48px;
    }
    span {
      color: #3e79f7;
      font-weight: bold;
    }
  }

  .destaque-inicio {
    text-align: center;
    /* margin-top: -13vh; */
    img {
      /* height: 80vh; */
      max-width: 558px;
      width: 100%;
      height: auto;
      overflow-y: hidden;
    }
  }

  .conteudo-inicio {
    display: flex;
    flex-direction: column;
  }
`
