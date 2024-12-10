import HeadlineScroll from '../../utils/SlideSobre'
import { Container } from './styles'
import fundo from '../../assets/backGrounds/cinza-19.webp'
import { fonts } from '../../styles'
import face from '../../assets/images/fundo-tec-zoom-longe.png'
import fundoAbout from '../../assets/backGrounds/azul-2.jpg'

const About = () => {
  return (
    <Container className="sobre">
      <div className="background">
        <img src={fundo} alt="" />
      </div>
      <div className="cont">
        <HeadlineScroll />
      </div>
      <div
        className="aboutContainer"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div
          className="resume"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <div className="backgroundResume">
            <img src={fundoAbout} alt="" />
          </div>
          <p>
            Seja bem vindo(a) ao meu Portifólio! Me chamo Cesar, muito prazer!
            Sou um profissional em transição de carreira para a área de
            tecnologia. Desenvolvedor full-stack Java em formação pela EBAC –
            Escola Britânica de Artes Criativas e Tecnologia. Tenho proficiência
            em JavaScript, HTML, CSS, jQuery, Bootstrap, SASS e LESS, Gulp,
            Grunt, requisições de API Ajax e Fetch; TypeScript, VueJs, React,
            Redux, Next.js; testing com React Testing Library e Cypress. <br />
            Habilidade em manipulação do DOM e implementação de interações
            dinâmicas de usuário. Desenvolvimento de interfaces web visualmente
            atraentes e responsivas, utilizando componentes interativos. <br />
            Em termos de experiências e realizações, tive a oportunidade de
            viver um intercâmbio de um ano na Austrália, onde aprendi inglês e
            adquiri uma vivência internacional valiosa. Ao retornar ao Brasil,
            assumi a responsabilidade do setor financeiro de uma empresa, o que
            me proporcionou grandes aprendizados sobre gestão financeira e
            liderança de equipe.
          </p>
        </div>
        <div
          className="complemento-sobre"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <div className="container-svg">
            <svg width="600" height="600" viewBox="0 0 300 300">
              <defs>
                <path
                  id="text-circle"
                  d="M 150,150 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                />
              </defs>
              <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700&display=swap');

          .work-sans-font {
            font-family: 'Work Sans', sans-serif;
            font-weight: bold
          }
        `}
              </style>
              <text
                fill="#c4acf0"
                fontSize="29"
                className="work-sans-font"
                textAnchor="middle"
              >
                <textPath href="#text-circle" startOffset="50%">
                  Front-End ✧—·—✧ Web Developer ✧—·—✧
                </textPath>
              </text>
              <circle
                cx="150"
                cy="150"
                r="100"
                fill="none"
                stroke="transparent"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="svg-image">
            <img src={face} alt="" />
          </div>
        </div>
      </div>
      {/* <div
        className="aboutContainer aboutContainer2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300"
      >
        <div
          className="resume"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <div className="backgroundResume">
            <img src={fundoAbout} alt="" />
          </div>
          <p>
            Seja bem vindo(a) ao meu Portifólio! Me chamo Cesar, muito prazer!
            Sou um profissional em transição de carreira para a área de
            tecnologia. Desenvolvedor full-stack Java em formação pela EBAC –
            Escola Britânica de Artes Criativas e Tecnologia. Tenho proficiência
            em JavaScript, HTML, CSS, jQuery, Bootstrap, SASS e LESS, Gulp,
            Grunt, requisições de API Ajax e Fetch; TypeScript, VueJs, React,
            Redux, Next.js; testing com React Testing Library e Cypress. <br />
            Habilidade em manipulação do DOM e implementação de interações
            dinâmicas de usuário. Desenvolvimento de interfaces web visualmente
            atraentes e responsivas, utilizando componentes interativos. <br />
            Em termos de experiências e realizações, tive a oportunidade de
            viver um intercâmbio de um ano na Austrália, onde aprendi inglês e
            adquiri uma vivência internacional valiosa. Ao retornar ao Brasil,
            assumi a responsabilidade do setor financeiro de uma empresa, o que
            me proporcionou grandes aprendizados sobre gestão financeira e
            liderança de equipe.
          </p>
        </div>
        <div
          className="complemento-sobre"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-delay="300"
        >
          <div className="container-svg">
            <svg width="600" height="600" viewBox="0 0 300 300">
              <defs>
                <path
                  id="text-circle"
                  d="M 150,150 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                />
              </defs>
              <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700&display=swap');

          .work-sans-font {
            font-family: 'Work Sans', sans-serif;
            font-weight: bold
          }
        `}
              </style>
              <text
                fill="#c4acf0"
                fontSize="29"
                className="work-sans-font"
                textAnchor="middle"
              >
                <textPath href="#text-circle" startOffset="50%">
                  Front-End ✧—·—✧ Web Developer ✧—·—✧
                </textPath>
              </text>
              <circle
                cx="150"
                cy="150"
                r="100"
                fill="none"
                stroke="transparent"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="svg-image">
            <img src={face} alt="" />
          </div>
        </div>
      </div> */}
    </Container>
  )
}

export default About
