import "./sidebar.css";

import iconDash from "../../assets/icons/dash.png";
import iconCliente from "../../assets/icons/cliente.png";
import iconConfig from "../../assets/icons/config.png";
import iconExtrato from "../../assets/icons/extrato.png";
import iconVeiculos from "../../assets/icons/veiculo.png";
import iconEntrada from "../../assets/iconEntrada.png";
import iconSaida from "../../assets/iconSaida.png";


import { useState } from "react";
import Modal from "react-modal";

import imgLogo from "../../assets/logo/logo.png";
import { NavLink, Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import toast from "react-hot-toast";

const customStyles = {
    content: {
      top: '50%',
      height: '420px',
      width: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '30px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



Modal.setAppElement("#root");

function SideBar() {


  const history = useHistory();
  const [type, setType] = useState('receitas');
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria]= useState("");
  const [valorEntrada, setValorEntrada] = useState(0);
  const [saida, setSaida] = useState(0);

  let idUser = sessionStorage.getItem('userId');

  let email = sessionStorage.getItem('userEmail');

  let senha = sessionStorage.getItem('senha');

  function logout(){
    api.delete(`/usuarios/logoff/${email}/${senha}`)
        .then(response=> {
            history.push('/')
        })
  }


  //criando funcao para pegar o dados que o usuario ira digitar no modal e fazer a requisicao
  function criandoTransacao(event){
     event.preventDefault(); 

     if(type === 'receitas'){
        api.post('/extratos/receitas', {
          descricao: descricao,
          categoria: categoria,
          valorEntrada: valorEntrada,
          usuario: {id: idUser}
        })
        .then((response => {
          if(response.status === 201){
            toast.success("transação cadastrada com sucesso, você tem 20 segundos para desfazer!");
            closeNewTransactionModal();
            // window.location.reload();
            // history.push('/extrato');
          }
        }))
        .catch((response=> {
          toast.error("erro ao cadastrar transação");
        }))

      }else if(type === 'despesas'){
          api.post('/extratos/despesas', {
            descricao: descricao,
            categoria: categoria,
            saida: saida,
            usuario: {id: idUser}
          })
          .then((response => {
            if(response.status === 201){
              toast.success("transação cadastrada com sucesso!");
              closeNewTransactionModal();
              // history.push('/extrato');
            }
          }))
          .catch((response=> {
            toast.error("erro ao cadastrar transação")
          }))
      }
  }
  
  const [isNewTransaction, setNewTransaction] = useState(false);

  function openNewTransactionModal() {
    setNewTransaction(true);
  }

  function closeNewTransactionModal() {
    setNewTransaction(false);
  }

  return (
    <div id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={imgLogo} alt="" />
          <h1>Smart Tools</h1>
        </div>
      </div>

      <Modal
        isOpen={isNewTransaction}
        onRequestClose={closeNewTransactionModal}
        style={customStyles}
      >
        <div className="modal__new__transaction">

            <div className="modal__transaction__header">
                <h2>Cadastrar transação</h2>
                <button onClick={closeNewTransactionModal}>X</button>
            </div>
                  <form onSubmit={criandoTransacao}>


                  <div className="container__button__transaction">
                        <button 
                          type="button"
                          className={type === 'receitas' ? 'active' : ''}
                          onClick={()=> {setType('receitas')}}
                          >
                            <img src={iconEntrada} alt="entradas" />
                            <span>Entrada</span>
                        </button>
                       
                       <button 
                        type="button"
                        className={type === 'despesas' ? 'activeRed' : ''}
                        onClick={()=> {setType('despesas')}}
                        >
                            <img src={iconSaida} alt="saídas" />
                            <span>Saída</span>
                       </button>
                    </div>
                    <div className="container__input__extrato">
                        <input type="text" 
                        placeholder="descrição" 
                        onChange={e => setDescricao(e.target.value)}
                        />

                        {/* <input 
                        type="hidden"
                        className="active-input"
                        placeholder="R$" 
                        id="saida"
                        name="saida"
                        onChange={onChange}
                        /> */}

                        <input 
                        type="Number"
                        placeholder="R$" 
                        onChange={type === 'receitas' ? 
                        e => setValorEntrada(e.target.value) 
                        :
                        e => setSaida(e.target.value)}
                      
                        />
                    </div>
                    
                    

                    <div className="input__categoria__trasaction">
                        <input 
                        type="text" 
                        placeholder="categoria"
                        onChange={e => setCategoria(e.target.value)}          
                        />
                    </div>

                    {/* <div className="container__input__client">
                        <input type="text" placeholder="Nome do cliente" />
                        <input type="text" placeholder="Placa" />
                    </div> */}

                    <div className="button__salvar__transaction">
                        <button type="submit">Salvar</button>
                    </div>
            </form>
        </div>
      </Modal>

      <div className="btn-new-transaction">
        <div className="container-btn-new-transaction">
          <button onClick={openNewTransactionModal}>+ Transação</button>
        </div>
      </div>

      <div className="sidebar__menu">
        <NavLink to="/dashboard" 
        className="menu__dash__side" 
        activeClassName="selected"
        style={{textDecoration: 'none', color: '#132C33'}}
        activeStyle={{ color: '#FFF' }}
        >
          <div className="sidebar__link">
            <div>
              <img src={iconDash} alt="dashboard" />
            </div>
            <div>
              <span>Dashboard</span>
            </div>
          </div>
        </NavLink>

        <NavLink to="/extrato" 
        className="menu__dash__side" 
        activeClassName="selected"
        style={{textDecoration: 'none', color: '#132C33'}}
        activeStyle={{ color: '#FFF' }}
        >
          <div className="sidebar__link">
            <div>
              <img src={iconExtrato} alt="" />
            </div>
            <div>
              <span>Extrato</span>
            </div>
          </div>
        </NavLink>

        <NavLink to="/veiculos" 
        className="menu__dash__side" 
        activeClassName="selected"
        style={{textDecoration: 'none', color: '#132C33'}}
        activeStyle={{ color: '#FFF' }}   
        >
          <div className="sidebar__link">
            <div>
              <img src={iconVeiculos} alt="" />
            </div>
            <div>
              <span>Veículos</span>
            </div>
          </div>
        </NavLink>

        <NavLink to="/clientes" 
        className="menu__dash__side" 
        activeClassName="selected"
        style={{textDecoration: 'none', color: '#132C33'}}
        activeStyle={{ color: '#FFF' }}
        >
          <div className="sidebar__link">
            <div>
              <img src={iconCliente} alt="" />
            </div>
            <div>
              <span>Clientes</span>
            </div>
          </div>
        </NavLink>

        <NavLink to="/configuracoes" 
        className="menu__dash__side" 
        activeClassName="selected"
        style={{textDecoration: 'none', color: '#132C33'}}
        activeStyle={{ color: '#FFF' }}

        >
          <div className="sidebar__link">
            <div>
              <img src={iconConfig} alt="" />
            </div>
            <div>
              <span>configurações</span>
            </div>
          </div>
        </NavLink>

        {/* <Link to="/" style={{textDecoration: 'none'}} className="link__logou__dash"> */}
        <div className="sidebar__logout">
          <li onClick={logout}>  x Sair </li>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default SideBar;
