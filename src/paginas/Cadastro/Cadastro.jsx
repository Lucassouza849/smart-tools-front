// importando imagens
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import home from "../../assets/login-cadastro/seta-home.png";
import api from '../../services/api';

import toast from 'react-hot-toast';

// importando estilos
import "./cadastro.css";

function Cadastro() {
  let url = "";

  const history = useHistory();
  const[nomeUsuario, setNomeUsuario] = useState("");
  const[senhaUsuario, setSenhaUsuario] = useState("");
  const[emailUsuario, setEmailUsuario] = useState("");


  async function cadastroUsuarios(ev){
    ev.preventDefault();

    api.post('/usuarios/cadastros', {
      nomeUsuario: nomeUsuario,
      senhaUsuario: senhaUsuario,
      emailUsuario: emailUsuario,
    })
    .then((response=> {
      toast.success('Cadastro criado com sucesso!')
      history.push('/login')
    }))
    .catch((response=> {
      toast.error('Falha ao realizar o cadastro! tente novamente mais tarde!')
    }))
  }


  return (
    <>
      <div class="container-cadastro">
        {/* <div class="button-back">
          <a href={url}>
            <Link to="/">
              <img width="100px" src={home} alt="retorno" />
            </Link>
          </a>
        </div> */}
        <div class="centro">
          <h1>Cadastro</h1>

          <form onSubmit={cadastroUsuarios}>
            <div class="text_fild">
              <i class="fa fa-user" aria-hidden="true"></i>
              <input type="text" placeholder="E-mail do usuário" onChange={ev => setEmailUsuario(ev.target.value)}  />
            </div>
            <div class="text_fild">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input type="text" placeholder="Nome" onChange={ev => setNomeUsuario(ev.target.value)} />

            </div>
            <div class="text_fild">
              <i class="fa fa-lock" aria-hidden="true"></i>
              <input type="password" placeholder="Senha" onChange={ev => setSenhaUsuario(ev.target.value)}  />
            </div>
            <div class="pass-div">
              <input type="submit" value="Cadastrar" />
              <div class="signup_link">
                Já possui cadastro? <br />
                <Link to="/login">
                  <a class="aa" href={url}>
                    Ir para login
                  </a>
                </Link>
                <br />
                <Link to="/">
                  <a class="aa" href={url}>
                  Volte para a tela inicial
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
