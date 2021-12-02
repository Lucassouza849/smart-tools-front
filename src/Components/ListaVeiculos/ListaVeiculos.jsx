import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../../services/api";
import "./listaveiculos.css";
import toast from "react-hot-toast";


function ListaVeiculos() {
  const [listaVeiculos, setListaveiculos] = useState([]);

  let idUser = sessionStorage.getItem('userId');


  useEffect(() => {
      async function listarVeiculos(){
        const response = await api.get(`veiculos/todos/${idUser}`);
        if(response.status === 204){
          setListaveiculos([]);
        }else if(response.status === 200){
          setListaveiculos(response.data)
        }
      }  
      listarVeiculos();  
  }, []);



  function deleteItemList(id){
    api.delete(`/veiculos/${id}`)
    .then(response=> {
        toast.success("Excluido com sucesso!")
        window.location.reload();

    })
  }
  
  return (
    <div className="lista__veiculos">
      <div className="section__one__veiculos">
        <NavLink to="/cadastro-veiculos">
          <div className="lista__veiculos__btn">
            <button>cadastrar veículo</button>
          </div>
        </NavLink>
      </div>

      <div className="linha__vertical__veiculos"></div>

      <div className="lista_extrato_center">
        <div className="container__table__extrato">
          <table>
            <thead className="th_extrato">
              <tr>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Tipo do Veículo</th>
                {/* <th>Id do cliente</th> */}
              </tr>
            </thead>

            <tbody className="td_extrato">
              {listaVeiculos.map((listaVeiculos) => (
                <tr key={listaVeiculos.idVeiculo}>
                  <td>{listaVeiculos.marcaVeiculo}</td>
                  <td>{listaVeiculos.modeloVeiculo}</td>
                  <td>{listaVeiculos.placaVeiculo}</td>
                  <td>{listaVeiculos.tipoVeiculo}</td>
                  <td><button className="button_extrato" onClick={() => deleteItemList(listaVeiculos.idVeiculo)}>Excluir</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListaVeiculos;
