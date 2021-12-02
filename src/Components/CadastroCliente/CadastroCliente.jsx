import React from 'react';
import './cadastroCliente.css';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../services/api';

function CadastroCliente() {
    const history = useHistory();
    const[nome, setNome] = useState("");
    const[telefone, setTelefone] = useState("");
    const[email, setEmail] = useState("");

    let idUser = sessionStorage.getItem('userId');


    function cadastroClientes(ev) {
        ev.preventDefault();
    
        api.post('/clientes', {
            nome: nome,
            telefone: telefone,
            email: email,
            usuario: {id: idUser}
        }).then((response => {
          toast.success("Cadastro realizado com sucesso!");
          history.push("/clientes");
        }))
        .catch((response=> {
          toast.error("erro ao cadastrar transação");
        }));
      }

    return (


        
        <div className="cadastro__clientes">
                
            <div className="title__pagina__cadastro">
                <h1>Cadastro de Clientes</h1>
            </div>
            
            <form className="item__form__clientes" onSubmit={cadastroClientes}>
                <div className="item__cliente__left">
                    <div className="label__cadastro__cliente">
                        Nome
                    </div>

                    <div className="input__cadastro__cliente">
                        <input type="text" onChange={ev => setNome(ev.target.value)} />
                    </div>

                    <div className="label__cadastro__cliente">
                        Telefone
                    </div>

                    <div className="input__cadastro__cliente">
                        <input type="text" onChange={ev => setTelefone(ev.target.value)}/>
                    </div>
                </div>
               

                <div className="item__cliente__right">
                    <div className="label__cadastro__cliente">
                        E-mail
                    </div>

                    <div className="input__cadastro__cliente">
                        <input type="text" onChange={ev => setEmail(ev.target.value)} />
                    </div>

                    <div className="button__cadastro__cliente">
                        <button type="submit">Cadastrar</button>
                    </div>
                </div>
               
            </form>
        </div>

    );



}

export default CadastroCliente;