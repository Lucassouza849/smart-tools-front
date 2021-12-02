import React from "react";
import "./cadastroVeiculo.css";
import { useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { useHistory } from "react-router-dom";



function CadastroVeiculo() {

 

  const history = useHistory();
  const [tipoVeiculo, setTipoVeiculo] = useState("");
  const [marcaVeiculo, setMarcaVeiculo] = useState("");
  const [modeloVeiculo, setModeloVeiculo] = useState("");
  const [placaVeiculo, setPlacaVeiculo] = useState("");

  let idUser = sessionStorage.getItem('userId');


   function cadastrandoVeiculo(ev) {
    ev.preventDefault();

    api.post("/veiculos", {
      tipoVeiculo: tipoVeiculo,
      marcaVeiculo: marcaVeiculo,
      modeloVeiculo: modeloVeiculo,
      placaVeiculo: placaVeiculo,
      usuario: {id: idUser},
      
    }).then((response => {
      toast.success("Cadastro realizado com sucesso!");
      history.push("/veiculos");
    }))
    .catch((response=> {
      toast.error("erro ao cadastrar transação");
    }));
  }


  return (
    <div className="cadastro__veiculos">
      <div className="title__pagina__cadastro">
        <h1>Cadastro de Veiculos</h1>
      </div>

      <form className="item__form__veiculos" onSubmit={cadastrandoVeiculo}>
        <div className="item__veiculos__left">
          <div className="label__cadastro__veiculos">Tipo Veículo:</div>

          <div className="input__cadastro__veiculos">
            <input
              type="text"
              onChange={e => setTipoVeiculo(e.target.value)}
            />
          </div>

          <div className="label__cadastro__veiculos">Marca do Veículo:</div>

          <div className="input__cadastro__veiculos">
            <input
              type="text"
              onChange={e => setMarcaVeiculo(e.target.value)}
            />
          </div>

          {/* <div className="label__cadastro__veiculos">
                       Cliente:
                    </div> */}

          {/* <div className="input__cadastro__veiculos">
                        <input type="text" onChange={e => setCliente({...cliente, id: e.target.value})} />
                    </div> */}
        </div>

        <div className="item__veiculos__right">
          <div className="label__cadastro__veiculos">Modelo do veículo:</div>

          <div className="input__cadastro__veiculos">
            <input
              type="text"
              onChange={e => setModeloVeiculo(e.target.value)}
            />
          </div>

          <div className="label__cadastro__veiculos">Placa do veículo:</div>

          <div className="input__cadastro__veiculos">
            <input
              type="text"
              onChange={e => setPlacaVeiculo(e.target.value)}
            />
          </div>

          <div className="button__cadastro__veiculos">
            <button type="submit">Cadastrar</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CadastroVeiculo;
