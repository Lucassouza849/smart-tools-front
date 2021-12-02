//  importando imagens
import bannerInicial from "../../assets/quem-somos/Group219.png";
import bannerSegundaSection from "../../assets/quem-somos/fav-folder-dynamic-color.png";
import missaoVisao from "../../assets/quem-somos/missao-visao-valores.png";
import lucas from "../../assets/quem-somos/lucas.png";
import pedro from "../../assets/quem-somos/bruna.png";
import vini from "../../assets/quem-somos/pedro.png";
import bruna from "../../assets/quem-somos/cano.png";
import nixolas from "../../assets/quem-somos/nicholas.png";

// importando estilos css
import './quemsomos.css';

// importando componentes
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

function QuemSomos() {
  return (
    <>
      {/* chamando componente header */}
      <Header />

      <section className="section-about">
        <div className="container-about">
          <div className="texto-h2">
            <h2>Muito além de uma simples gestão</h2>
            <button className="button">Como Assim ?</button>
          </div>

          <div className="img">
            <img src={bannerInicial} alt="banner incial" />
          </div>
        </div>
      </section>
      <div className="section-linha">
        <div className="linha"></div>
      </div>

      <section className="section-about">
        <div className="container-about">
          <div className="img-anotacao">
            <img src={bannerSegundaSection} alt="segunda seção" />
          </div>

          <div className="texto-anotacao">
            <h2>Quem quer resultado precisa de organização financeira!</h2>
            <p>
              A primeira tarefa é analisar a essência da sua empresa, feito
              isso, estaremos pronto para colocar em ordem de negócio.
            </p>
          </div>
        </div>
      </section>
      <div className="section-linha">
        <div className="linha"></div>
      </div>

      <section className="section-about">
        <div className="mensagem">
          <div className="content1">
            <h2>Nossa Proposta</h2>
            <p>
              Filtrar seus gastos e organiza-los para uma melhor gestão e
              precisamente uma melhor qualidade financeira!
            </p>
          </div>

          <div className="pipe-quemSomos"></div>

          <div className="content2">
            <h2>Nosso método</h2>
            <p>
              Empenhamos o bom funcionamento da sua gestão sem complicações
              diárias, e tudo completo!
            </p>
          </div>
        </div>
      </section>

      <div className="imag-box">
        <div className="content-img">
          <img src={missaoVisao} alt="missao" />
        </div>
      </div>

      <div className="section-time">
        <h1>Nosso Time</h1>
      </div>
      <div className="container-time">
        <div className="time">
          <div className="integrante1">
            <p>Lucas Souza</p>
            <img src={lucas} alt="equipe" />
          </div>
          <div className="integrante2">
            <p>Bruna Brito</p>
            <img src={bruna} alt="equipe" />
          </div>
          <div className="integrante1">
            <p>Pedro Gimenez</p>
            <img src={pedro} alt="equipe" />
          </div>
          <div className="integrante2">
            <p>Vinicius Cano</p>
            <img src={vini} alt="equipe" />
          </div>
          <div className="integrante1">
            <p>Nicholas Forte</p>
            <img src={nixolas} alt="equipe" />
          </div>
        </div>
      </div>
      
      {/* chamando componente Footer */}
      <Footer />


    </>
  );
}

export default QuemSomos;
