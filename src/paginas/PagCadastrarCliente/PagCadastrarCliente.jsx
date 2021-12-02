import CadastroCliente from "../../Components/CadastroCliente/CadastroCliente";
import HeaderDash from "../../Components/Header-Dash/HeaderDash";
import SideBar from "../../Components/Sidebar/SideBar";


function PagCadastrarCliente(){




    
    return(
        <div className="container-dashboard-one">
            <SideBar />
            <HeaderDash />
            <CadastroCliente />
            
        </div>
    );
}

export default PagCadastrarCliente;