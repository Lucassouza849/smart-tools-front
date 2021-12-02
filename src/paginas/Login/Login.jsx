// importando componentes
import Cadastro from "../Cadastro/Cadastro";

// importando componentes
// import home from "../../assets/login-cadastro/seta-home.png";

// importando estilo css
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import api from '../../services/api'
import toast from 'react-hot-toast';



function Login() {


  const[login, setLogin] = useState('');
  const[senha, setSenha] = useState('');
  const history = useHistory();
    
   

    async function loginUser(ev){
        ev.preventDefault();

        api.post('/usuarios/autenticacoes', {
          login: login,
          senha: senha,
        })
        .then((response) => {
          if(response.status === 200){
            sessionStorage.setItem('userId', response.data.id)
            sessionStorage.setItem('userEmail', response.data.login)
            sessionStorage.setItem('name', response.data.nome)
            sessionStorage.setItem('senha', response.data.senha)
            console.log(response.data)
            toast.success('login efetuado com sucesso')
            history.push('/dashboard')
          }
            
        })
        
    }


  return (
    <>
      <div className="container-login">
        {/* <div className="button-back">
          <a href={url}>
            <Link to="/">
              <img width="100px" src={home} alt="retorno" />
            </Link>
          </a>
        </div> */}

        <div className="centro">
          <h1>Login</h1>

          <form onSubmit={loginUser}>
            <div className="text_fild">
              <i className="fa fa-user" aria-hidden="true"></i>
              <input type="text" placeholder="Email do usuário" onChange={e => setLogin(e.target.value)}/>
            </div>
            <div className="text_fild">
              <i className="fa fa-lock" aria-hidden="true"></i>
              <input type="password" placeholder="Senha" onChange={e => setSenha(e.target.value)} />
            </div>
            <div className="pass-div">
              <input type="submit" value="Entrar" />
              <div className="signup_link">
                Ainda não possui cadastro? <br />
                <Link to="/cadastro">
                  <a className="aa" href={Cadastro}>
                    Cadastrar-se
                  </a>
                </Link>
        <br />
                <Link to="/">
                  <a className="aa" href={Cadastro}>
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

export default Login;
