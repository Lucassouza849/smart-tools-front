// importando imagens
import imgBanner from "../../assets/index/pngwing1.png";
import carrousel1 from "../../assets/index/1.png";
import carrousel2 from "../../assets/index/2.png";
import carrousel3 from "../../assets/index/3.png";
import mapaPagina from "../../assets/index/mapa.png";

// importando estilos
import "./home.css";

// importando componentes
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Home() {
  let url = "";

  return (
    <>
      {/* chamando o componente header */}
      <Header />

      {/* primeira seção */}
      <section className="section-one">
        <div className="container">
          <div className="content-left">
            <div className="img">
              <img src={imgBanner} alt="imagem do banner inicial" />
            </div>
            <div className="botao">
              {/* <button>Conheça mais sobre nossos planos</button> */}
            </div>
          </div>
          <div className="content-right">
            <h1>O Lugar onde a gestão é mais simples!</h1>
            <p>A liberdade e o controle que você precisava!</p>
          </div>
        </div>
      </section>
      {/* <!-- fim primeira section  --> */}

      {/* <!-- icone de subir a página --> */}
      <div className="arrow">
        <a href={url} title="Back to Top">
          <span className="fas fa-angle-up">^</span>
        </a>
      </div>
      {/* <!--=========================--> */}

      {/* <!-- carrousel --> */}
      <div className="carrousel">
        <div className="titulo-carrousel">
          <h1>Aqui você encontra...</h1>
        </div>
        <div id="itens-carrousel">
          <div id="item">
            <div className="itens">
              <img src={carrousel1} alt="imagens carrousel" />
            </div>
            <div className="itens">
              <img src={carrousel2} alt="imagens carrousel" />
            </div>
            <div className="itens">
              <img src={carrousel3} alt="imagens carrousel" />
            </div>
          </div>
        </div>
        <div className="linha"></div>
      </div>

      {/* <!-- fim carrousel --> */}

      {/* <!-- mapa --> */}
      <div className="section-mapa">
        <div className="container-mapa">
          <div className="title-mapa">
            <h1>Está perdido? Vamos te explicar o passo a passo:</h1>
          </div>
          <div className="img-mapa">
            <img src={mapaPagina} alt="mapa do site" />
          </div>
        </div>
      </div>

      {/* chamando componente do footer */}
      <Footer />
    </>
  );
}

export default Home;
