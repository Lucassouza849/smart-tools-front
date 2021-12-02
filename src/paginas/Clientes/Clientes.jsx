import HeaderDash from "../../Components/Header-Dash/HeaderDash";
import SideBar from "../../Components/Sidebar/SideBar";
import ListaClientes from "../../Components/ListaClientes/ListaClientes";



function Clientes(){
    return(
        <div className="container-dashboard-one">
            <SideBar />
            <HeaderDash />
            <ListaClientes />
        </div>
    );
}

export default Clientes;