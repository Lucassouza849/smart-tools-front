import { useEffect, useState } from 'react';
import api from '../../services/api';
import './listaextrato.css';
import Modal from 'react-modal';
import toast from "react-hot-toast";



Modal.setAppElement("#root");


const customStyles = {
    content: {
      top: '50%',
      height: '200px',
      width: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '30px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };





function ListaExtrato(){
    const[extrato, setExtratos] = useState([]);
    const[newFile, setNewFile] = useState();

    let idUser = sessionStorage.getItem('userId');

    useEffect(()=> {
        async function listaExtrato(){
            const response = await api.get(`/extratos/todos/${idUser}`);
            if(response.status === 204){
                setExtratos([])
            }else if(response.status === 200){
                setExtratos(response.data);
            }
        }
        listaExtrato();
    }, []);   


    function uploadDocument(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append("txt", newFile)


        api.post('/extratos/upload', formData, {
            headers: {
                "Content-Type": "application/txt"
            },
        })
        .then((response => {
            toast.success("upload feito com sucesso!");
        }))
        .catch((response=> {
            toast.error("erro ao fazer upload do arquivo");
        })); 
    }


    const[isNewImport, setIsNewImport] = useState(false);
   


    function openModalImport(){
        setIsNewImport(true);
    }

    function closeModalImport(){
        setIsNewImport(false);
    }

    function deleteItemList(id){
        api.delete(`/extratos/${id}`)
        .then(response=> {
            toast.success("Excluido com sucesso!")
            window.location.reload();

        })
    }

    async function exportDocument(){
            const response = await api.get(`/extratos/txt/${idUser}`);
            if(response.status === 204){
                toast.error("falha na exportação do arquivo")
            }else if(response.status === 200){
                toast.success("Arquivo exportado com sucesso!")
            }
    }


    return(    
            <div className="lista__extrato">
                <div className="section__one__extrato">
                    
                        <div className="lista__extrato__btn">
                            <button onClick={exportDocument}>Exportar Arquivo</button>
                        </div>

                        <div className="lista__extrato__btn">                                 
                            <button onClick={openModalImport}>Importar Arquivo</button>
                        </div>
                        
                        <Modal
                            isOpen={isNewImport}
                            onRequestClose={closeModalImport}
                            style={customStyles}

                        >
                            <form onSubmit={uploadDocument}>
                            <div className="container_modal_lista_extrato">
                            
                                <div className="title_lista_extrato">
                                    <h3>Selecione um arquivo para importar</h3>
                                </div>
                                <div className="input_lista_extrato_modal">
                                    
                                    <input type="file" name="file-txt" onChange={e => setNewFile(e.target.files[0])} />
                                </div>
                                <div className="lista__extrato__btn">
                                     <button type="submit">Salvar</button>
                                </div>

                            </div>
                            </form>

                        </Modal>
                </div>

                    <div className="linha__vertical__extrato">

                    </div>
                    <div className="lista_extrato_center">
                    <div className="container__table__extrato">
                            <table>
                                <thead className="th_extrato">
                                    <tr>
                                        <th>Descrição</th>
                                        <th>Categoria</th>
                                        <th>Valor</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>

                                <tbody className="td_extrato">
                                    {extrato.map(extratos => (
                                        <tr key={extratos.id}>
                                           <td>{extratos.descricao}</td>
                                           <td>{extratos.categoria}</td>
                                           <td>{new Intl.NumberFormat('pt-BR', {
                                             style: 'currency',
                                             currency: 'BRL'
                                            }).format(extratos.valorEntrada | -extratos.saida)}
                                            </td>
                                            <td>{new Intl.DateTimeFormat('pt-BR')
                                            .format(new Date(extratos.dataRegistro))}</td>
                                            <td><button className="button_extrato" onClick={() => deleteItemList(extratos.id)}>Excluir</button></td>
                                        </tr>
                                    ))}
                                   
                                </tbody>
                            </table>
                    </div>
                    </div>
            </div>    
            
    );
}

export default ListaExtrato;