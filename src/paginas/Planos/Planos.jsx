// importando imagens

import iconBanner from "../../assets/planos/notebook-dynamic-color.png";
import contentImage from "../../assets/planos/monitorwithcardcomingout1.png";
import checkMark from "../../assets/planos/Checkmark.png";
import premium from "../../assets/planos/star.png";





// importando estilo css
import "./planos.css";

// importando componentes
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Planos() {
  return (
    <>
      {/* chamando header */}
      <Header />

      <section className="section-text">
        <div className="container-1">
            <div className="content-right">
                <h1>Conheça nossos planos por assinatura</h1>
                <p>Sem taxa de inscrição. Sem contrato de longo prazo. Sem multa por rescisão contratual.</p>
            </div>
            <div className="content-image">
                <img src={iconBanner} alt="" />
            </div>
        </div>
    </section>

    <div className="linha"></div>

    <section className="secao-um">
        <div className="container-2">
            <div className="content-image">
                <img src={contentImage} alt="" />
            </div>
            <div className="content-text">
                <h1>Com planos que cabem no orçamento da sua oficina</h1>
            </div>
        </div>
        <div className="linha"></div>
    </section>

    <div className="secao-tabela">
        <div className="container-tabela">
            <div className="request">
                <p>Acesso a área exclusiva</p>
                <div className="separador"></div>
                <p>Acesso a gráficos de receitas e despesas</p>
                <div className="separador"></div>
                <p>Pagina exclusiva com extrato atualizado por mês</p>
                <div className="separador"></div>
                <p>Acesso em Tablets e Smartphones</p>
                <div className="separador"></div>
                <p>Suporte avançado 24hrs com equipe especializada</p>
            </div>
            </div>

            <div className="basico">
                <div className="title_basico">
                    <h2>Básico</h2>
                    <p>R$ 29,90/mês</p>
                </div>

                <div className="check">
                    <img src={checkMark} alt="" />
                    <div className="separador"></div>
                    <img src={checkMark} alt="" />
                    <div className="separador"></div>
                    <img src={checkMark} alt="" />
                    <div className="separador"></div>
                    <p>Somente no plano Premium</p>
                    <div className="separador"></div>
                    <p>Somente no plano Premium</p>
                </div>

                <button>Assinar</button>
            </div>


            <div className="premium">
                <div className="title_premium">
                    <img src={premium} alt="" />
                    <h2>Premium</h2>
                    <p>R$ 59,90/mês</p>
                </div>

                <div className="check">
                    <img src={checkMark} alt="" />
                    <div className="separador"></div>
                    <img src={checkMark} alt="" />
                    <div className="separador"></div>
                    <img src={checkMark} alt="" />
                    <div className="separador"></div>
                    <img src={checkMark} alt="" />
                    <div className="separador"></div>
                    <img src={checkMark} alt="" />
                </div>

                <button>Assinar</button>
            </div>
            </div>

      {/* chamando footer */}
      <Footer />
    </>
  );
}

export default Planos;
