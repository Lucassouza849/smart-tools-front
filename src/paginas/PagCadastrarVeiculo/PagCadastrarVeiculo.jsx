import CadastroVeiculo from "../../Components/CadastroVeiculo/CadastroVeiculo";
import HeaderDash from "../../Components/Header-Dash/HeaderDash";
import SideBar from "../../Components/Sidebar/SideBar";

function PagCadastrarVeiculo(){
    return(
        <div className="container-dashboard-one">
            <SideBar />
            <HeaderDash />
            <CadastroVeiculo /> 
        </div>
    );
}

export default PagCadastrarVeiculo