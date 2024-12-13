import HeadlineScroll from '../../utils/SlideTitle'
import { Container } from './styles'
import fundo from '../../assets/backGrounds/cinza-19.webp'
import { fonts } from '../../styles'
import face from '../../assets/images/fundo-tec-zoom-longe.png'
import fundoAbout from '../../assets/backGrounds/azul-2.jpg'
import imagemBootstrap from '../../assets/tec/bootstrap.png'
import imagemBootstrapDark from '../../assets/tec/bootstrap-dark.png'
import imagemCss from '../../assets/tec/css.png'
import imagemCssDark from '../../assets/tec/css-dark.png'
import imagemCypress from '../../assets/tec/cypress.png'
import imagemCypressDark from '../../assets/tec/cypress-dark.png'
import imagemFigma from '../../assets/tec/figma.png'
import imagemFigmaDark from '../../assets/tec/figma-dark.png'
import imagemGithub from '../../assets/tec/github.png'
import imagemGithubDark from '../../assets/tec/github-dark.png'
import imagemGrunt from '../../assets/tec/grunt.png'
import imagemGruntDark from '../../assets/tec/grunt-dark.png'
import imagemGulp from '../../assets/tec/gulp.png'
import imagemGulpDark from '../../assets/tec/gulp-dark.png'
import imagemHtml from '../../assets/tec/html.png'
import imagemHtmlDark from '../../assets/tec/html-dark.png'
import imagemJavascript from '../../assets/tec/javascript.png'
import imagemJavascriptDark from '../../assets/tec/javascript-dark.png'
import imagemJquery from '../../assets/tec/jquery.png'
import imagemJqueryDark from '../../assets/tec/jquery-dark.png'
import imagemLess from '../../assets/tec/less.png'
import imagemLessDark from '../../assets/tec/less-dark.png'
import imagemNext from '../../assets/tec/next.png'
import imagemNextDark from '../../assets/tec/next-dark.png'
import imagemNode from '../../assets/tec/node.png'
import imagemNodeDark from '../../assets/tec/node-dark.png'
import imagemReact from '../../assets/tec/react.png'
import imagemReactDark from '../../assets/tec/react-dark.png'
import imagemRedux from '../../assets/tec/redux.png'
import imagemReduxDark from '../../assets/tec/redux-dark.png'
import imagemSass from '../../assets/tec/sass.png'
import imagemSassDark from '../../assets/tec/sass-dark.png'
import imagemTypescript from '../../assets/tec/typescript.png'
import imagemTypescriptDark from '../../assets/tec/typescript-dark.png'
import imagemVite from '../../assets/tec/vite.png'
import imagemViteDark from '../../assets/tec/vite-dark.png'
import imagemVscode from '../../assets/tec/vscode.png'
import imagemVscodeDark from '../../assets/tec/vscode-dark.png'
import imagemVue from '../../assets/tec/vue.png'
import imagemVueDark from '../../assets/tec/vue-dark.png'

const About = () => {
  return (
    <Container className="sobre">
      <div className="background">
        <img src={fundo} alt="" />
      </div>
      <div className="cont">
        <HeadlineScroll content="sobre" />
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
            <br />
            Sou um profissional em transição de carreira para a área de
            tecnologia. Desenvolvedor full-stack Java em formação pela EBAC –
            Escola Britânica de Artes Criativas e Tecnologia.
            <br /> Tenho um perfil organizado e meticuloso, gosto de que as
            coisas sejam feitas da maneira certa, sem atalhos. Sou determinado e
            foco em atingir meus objetivos. Acredito que o respeito é
            fundamental para uma boa convivência no ambiente de trabalho e
            sempre busco manter boas relações com todos. Sou também muito
            comunicativo e me adapto facilmente a novos grupos, fazendo amizades
            rapidamente.
            <br />
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
      <div className="container2">
        <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300">
          Habilidades
        </h3>
        <div
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
              Tenho proficiência em JavaScript, HTML, CSS, jQuery, Bootstrap,
              SASS e LESS, Gulp, Grunt, requisições de API Ajax e Fetch;
              TypeScript, VueJs, React, Redux, Next.js; testing com React
              Testing Library e Cypress. <br />
              Habilidade em manipulação do DOM e implementação de interações
              dinâmicas de usuário. Desenvolvimento de interfaces web
              visualmente atraentes e responsivas, utilizando componentes
              interativos. <br />
              Agora, estou migrando para a área de tecnologia e já trabalhei em
              projetos de criação de sites e sistemas, utilizando principalmente
              JavaScript, TypeScript, Vue.js e React no front end. Cada um
              desses projetos me desafiou a aplicar novos conhecimentos e me
              proporcionou grande satisfação em ver minhas soluções funcionando
              na prática.
              <br />
              Estou sempre em busca de novos desafios e oportunidades para
              continuar crescendo na área de tecnologia.
            </p>
          </div>
          <div
            className="complemento-sobre"
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <div className="container-svg">
              <div className="tec">
                {[
                  {
                    normal: imagemBootstrap,
                    dark: imagemBootstrapDark
                  },
                  {
                    normal: imagemCss,
                    dark: imagemCssDark
                  },
                  {
                    normal: imagemCypress,
                    dark: imagemCypressDark
                  },
                  {
                    normal: imagemFigma,
                    dark: imagemFigmaDark
                  },
                  {
                    normal: imagemGithub,
                    dark: imagemGithubDark
                  },
                  {
                    normal: imagemGrunt,
                    dark: imagemGruntDark
                  },
                  {
                    normal: imagemGulp,
                    dark: imagemGulpDark
                  },
                  {
                    normal: imagemHtml,
                    dark: imagemHtmlDark
                  },
                  {
                    normal: imagemJavascript,
                    dark: imagemJavascriptDark
                  },
                  {
                    normal: imagemJquery,
                    dark: imagemJqueryDark
                  },
                  {
                    normal: imagemLess,
                    dark: imagemLessDark
                  },
                  {
                    normal: imagemNext,
                    dark: imagemNextDark
                  },
                  {
                    normal: imagemNode,
                    dark: imagemNodeDark
                  },
                  {
                    normal: imagemReact,
                    dark: imagemReactDark
                  },
                  {
                    normal: imagemRedux,
                    dark: imagemReduxDark
                  },
                  {
                    normal: imagemSass,
                    dark: imagemSassDark
                  },
                  {
                    normal: imagemTypescript,
                    dark: imagemTypescriptDark
                  },
                  {
                    normal: imagemVite,
                    dark: imagemViteDark
                  },
                  {
                    normal: imagemVscode,
                    dark: imagemVscodeDark
                  },
                  {
                    normal: imagemVue,
                    dark: imagemVueDark
                  }
                ].map((image, index) => (
                  <div
                    className="grid-item"
                    key={index}
                    data-aos="fade-up"
                    // data-aos-duration="1000"
                    // data-aos-delay={(index + 1) * 50}
                  >
                    <img src={image.dark} alt="" className="dark" />
                    <img src={image.normal} alt="" className="normal" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About
