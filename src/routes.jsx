// importando bibliotecas do react para rotas
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// importando componentes para chamar na rota
import Home from './paginas/Home/Home';
import QuemSomos from './paginas/QuemSomos/QuemSomos';
import Planos from './paginas/Planos/Planos';
import Cadastro from "./paginas/Cadastro/Cadastro";
import Login from "./paginas/Login/Login";
import Dashboard from "./paginas/Dashboard/Dashboard";
import pagCadastrarCliente from "./paginas/PagCadastrarCliente/PagCadastrarCliente";
import pagCadastrarVeicuo from "./paginas/PagCadastrarVeiculo/PagCadastrarVeiculo";
import Extrato from './paginas/Extrato/Extrato';
import Veiculos from "./paginas/Veiculos/Veiculos";
import Clientes from "./paginas/Clientes/Clientes";
import Configuracoes from './paginas/Configuracoes/Configuracoes';


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/quem-somos" exact component={QuemSomos} />
                <Route path="/planos" exact component={Planos} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/login" exact component={Login} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/cadastro-clientes" exact component={pagCadastrarCliente} />
                <Route path="/cadastro-veiculos" exact component={pagCadastrarVeicuo} />
                <Route path="/extrato" exact component={Extrato} />
                <Route path="/veiculos" exact component={Veiculos} />
                <Route path="/clientes" exact component={Clientes} />
                <Route path="/configuracoes" exact component={Configuracoes} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;