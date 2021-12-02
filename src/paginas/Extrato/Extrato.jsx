
import HeaderDash from '../../Components/Header-Dash/HeaderDash';
import SideBar from '../../Components/Sidebar/SideBar';
import ListaExtrato from '../../Components/ListaExtrato/ListaExtrato';
import './extrato.css';


function Extrato(){
    return(
        <div className="container-dashboard-one">
            <SideBar />
            <ListaExtrato />
            <HeaderDash />
        </div>
    );
}

export default Extrato;