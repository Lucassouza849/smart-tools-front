import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import api from "../../services/api";
import "./listaclientes.css";
import toast from "react-hot-toast";


function ListaClientes() {
  const [listaClientes, setListaClientes] = useState([]);

  let idUser = sessionStorage.getItem('userId');


  useEffect(() => {
      async function listarClientes(){
        const response = await api.get(`/clientes/todos/${idUser}`);
        if(response.status === 204){
          setListaClientes([]);
        }else if(response.status === 200){
          setListaClientes(response.data);
        }
      }
      listarClientes();
  }, []);


  function deleteItemList(id){
    api.delete(`/clientes/${id}`)
    .then(response=> {
        toast.success("Excluido com sucesso!")
        window.location.reload();

    })
  }

  return (
    <div className="lista__veiculos">
      <div className="section__one__veiculos">
        <NavLink to="/cadastro-clientes">
          <div className="lista__veiculos__btn">
            <button>cadastrar cliente</button>
          </div>
        </NavLink>
      </div>

      <div className="linha__vertical__veiculos"></div>

      <div className="lista_extrato_center">
        <div className="container__table__extrato">
          <table>
            <thead className="th_extrato">
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>E-mail</th>
              </tr>
            </thead>

            <tbody className="td_extrato">
              {listaClientes.map((listaClientes) => (
                <tr key={listaClientes.id}>
                  <td>{listaClientes.nome}</td>
                  <td>{listaClientes.telefone}</td>
                  <td>{listaClientes.email}</td>
                  <td><button className="button_extrato" onClick={() => deleteItemList(listaClientes.id)}>Excluir</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListaClientes;
