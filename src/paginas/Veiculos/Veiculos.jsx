import HeaderDash from "../../Components/Header-Dash/HeaderDash";
import ListaVeiculos from "../../Components/ListaVeiculos/ListaVeiculos";
import SideBar from "../../Components/Sidebar/SideBar";


function Veiculos(){
    return(
        <div className="container-dashboard-one">
            <SideBar />
            <HeaderDash />
            <ListaVeiculos />
        </div>
    );
}

export default Veiculos;