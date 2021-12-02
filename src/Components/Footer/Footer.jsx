
// import de imagens
import imgLocal from '../../assets/header-footer/localizacao-footer.png';
import imgEmail from '../../assets/header-footer/email-footer.png';
import imgTel from '../../assets/header-footer/telefone-footer.png';
import imgFace from '../../assets/header-footer/facebook-footer.png';
import imgInsta from '../../assets/header-footer/instagram-footer.png';
import imgLinkedin from '../../assets/header-footer/linkedin-footer.png';
import imgLogoFooter from '../../assets/logo/logo.png';



// import css
import './footer.css';


function Footer(){
    
    let url = '';

    return(
        <>
         <footer>
        <div className="container">

            <div className="container-coluna1">
                <div className="coluna">
                    <img src={imgLocal} alt="" />
                    <p>Rua Haddock Lobo, 595 São Paulo SP</p>
                </div>

                <div className="coluna">
                    <img src={imgEmail} alt="" />
                    <p>contato@smarttools.com.br</p>
                </div>

                <div className="coluna">
                    <img src={imgTel} alt="" />
                    <p>(11) 2543 - 3434</p>
                </div>
            </div>

            <div className="container-coluna2">
                <div className="coluna2">
                    <p>Siga nossas redes sociais</p>
                    <img src={imgFace} alt="" />
                    <img src={imgInsta} alt="" />
                    <img src={imgLinkedin} alt="" />
                </div>
            </div>

            <div className="container-coluna3">
                <div className="coluna3">
                    <img src={imgLogoFooter} alt="" />
                </div>
            </div>
        </div>
        <div className="container-footer">
            <div className="footer">
                <div className="copyright">
                    © 2021 Site desenvolvidos por Alunos Bandtec | <a href={url}>Smart Tools</a>
                </div>

                <div className="information">
                    <a href={url}>Mais Informações</a> | <a href={url}>Politica de privacidade</a> | <a href={url}>Termos e
                        condições</a>
                </div>
            </div>

        </div>
    </footer>
        </>
    );
}

export default Footer;