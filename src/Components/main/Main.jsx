import "./main.css";

//importando imagens
import saldoIcon from "../../assets/dashboard/icone-total.png";
import despesasIcon from "../../assets/dashboard/icone-despesas.png";
import receitasIcon from "../../assets/dashboard/icone-receitas.png";

//importando componentes
import Graficos from "../../Components/Graficos/Graficos";
import GraficoBarra from  "../../Components/GraficoBarra/GraficoBarra";
import { useEffect, useState } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";

function Main() {


  const [extratos, setExtratos] = useState([]);

  let idUser = sessionStorage.getItem('userId');

  let nameUser = sessionStorage.getItem('name');

 
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


  const summary = extratos.reduce((acc, extratos)=> {
        if(extratos.valorEntrada){
          acc.deposits += extratos.valorEntrada;
          acc.total += extratos.valorEntrada;      
        }else{
          acc.retiradas += extratos.saida;
          acc.total -= extratos.saida;
        }
        
        return acc;
  },{
    deposits: Number(0.0),
    retiradas: Number(0.0),
    total: Number(0.0)
  })


    async function desfazerTransacao(){
        const response = await api.get('/extratos/desfazer');
        if(response.status === 204){
            toast.error('erro ao desfazer operação');
        }else if(response.status === 200){
            toast.success('ultima operação desfeita com sucesso');
        }
    }
 

  return (
    <main>
      <div className="main__container">
        <div className="header_main_user">
          <h4>Bem vindo, {nameUser}</h4>
          <button onClick={desfazerTransacao}>Desfazer ultima transação</button>
        </div>
        <div className="main__cards">
          <div className="card">
            <img src={saldoIcon} alt="saldo" />
            <div className="card_inner">
              <p>Saldo</p>
                  <span>
                  {new Intl.NumberFormat('pt-BR', {
                                             style: 'currency',
                                             currency: 'BRL'
                                            }).format(summary.total)}
                    
                  </span>             
            </div>
          </div>

          <div className="card">
            <img src={receitasIcon} alt="receitas" />
            <div className="card_inner">
              <p>Receitas</p>
              <span>
                  {new Intl.NumberFormat('pt-BR', {
                                             style: 'currency',
                                             currency: 'BRL'
                                            }).format(summary.deposits)}</span>
            </div>
          </div>

          <div className="card">
            <img src={despesasIcon} alt="despesas" />
            <div className="card_inner">
              <p>Despesas</p>
              <span> 
                  {new Intl.NumberFormat('pt-BR', {
                                             style: 'currency',
                                             currency: 'BRL'
                                            }).format(summary.retiradas)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="charts">
        <div className="charts__left">
          <div className="charts__left__title">
            <div>
              <h3>Transações por categoria</h3>
            </div>
          </div>
          <Graficos />
        </div>

        <div className="charts__right">
          <div className="charts__right__title">
            <div>
              <h3>Transações Gerais</h3>
            </div>
          </div>
          <GraficoBarra />
        </div>
      </div>
    </main>
  );
}

export default Main;
