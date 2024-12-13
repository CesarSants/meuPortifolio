import { styled } from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;

  .isActive {
    /* display: none; */
    background-color: #b37da7 !important;
  }

  .background {
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
      border-top-right-radius: 40px;
      border-top-left-radius: 40px;
      border: 8px #9999 groove;
      border-left: 8px #9999 ridge;
      border-top: 8px #9999 ridge;
      border-bottom: none;
      box-shadow: 0 0 0 #666 inset, 0 0 8px #666 inset;
    }

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
      border-top-right-radius: 40px;
      border-top-left-radius: 40px;
    }
  }

  .content-wrapper {
    display: flex;
    height: 100%;
    width: 100%;
    padding-top: 22vh;
  }

  .content {
    position: relative;
    max-width: 1024px;
    margin-right: calc((100vw - 1024px) / 2);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100%;
  }

  .aside {
    width: calc((100vw - 1024px) / 2);
    min-width: 160px;
    position: relative;
  }

  .nav-tipos {
    position: sticky;
    top: 10vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 1rem;

    ul {
      list-style: none;

      li:first-child {
        button {
          margin-bottom: 20px;
        }
      }
    }
  }

  .nav-tipos button {
    width: 100%;
    padding: 0.5rem;
    background-color: rebeccapurple;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    border-radius: 40px;
    border: 8px #9999 groove;
    border-left: 8px #9999 ridge;
    border-top: none;
    box-shadow: 0 0 0 #666 inset, 0 0 8px #666 inset;
    color: white;
    transition: all 1s ease;
  }

  .nav-tipos button:hover {
    background-color: #2bacbd;
    color: wheat;
    transform: scale(1.08);
    transition: all 1s ease;
  }

  .nav-tipos2 {
    display: none;

    /* position: absolute;//
    z-index: 1;// */
  }

  @media (max-width: 1344px) {
    height: 110vh;

    ///////////////////////////////////////////////////////////

    .nav-tipos {
      display: none;
    }
    .nav-tipos2 {
      display: flex;
      position: sticky;
      /* top: 60px; */
      top: 8vh;
      padding: 10px 0;
      /* margin-top: -34%; */
      margin-top: -60px;
      z-index: 2;
      ul {
        display: flex;
        gap: 20px;
        li button {
          max-width: 100%;
          width: 140px;
        }
      }
    }

    .contentEncaps {
      /* height: 100%; */
      width: 100%;
      justify-content: center;
      align-items: center;
      margin: auto 0;
      top: 0;
      bottom: 0;
    }

    .contentPrincipal {
      margin-top: 0;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .content {
      flex-direction: column;
    }

    .content-wrapper {
      padding-top: 28vh;
      flex-direction: column;
      height: 100%;
    }

    ///////////////////////////////////////////////////////////

    .aside {
      width: 100%;
      max-width: 512px;
      min-width: 0;
      margin: 0 auto;

      nav {
        padding: 0;

        ul {
          display: flex;
          margin: 0 auto;
          gap: 20px;

          li button {
            max-width: 100%;
            width: 140px;
          }
        }
      }
    }

    .content {
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      padding-top: 0px;
      height: 100%;
      bottom: 0;
      max-height: 100%;
    }
  }

  @media (max-width: 1024px) {
    .content {
      max-width: 100%;
    }
  }

  @media (max-height: 680px) {
    .nav-tipos2 {
      top: 9.5vh;
    }
  }
`
