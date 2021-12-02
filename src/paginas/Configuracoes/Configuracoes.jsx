

import FormConfiguracoes from '../../Components/FormConfiguracoes/FormConfiguracoes';
import HeaderDash from '../../Components/Header-Dash/HeaderDash';
import SideBar from '../../Components/Sidebar/SideBar';

function Configuracoes(){
    return(
        <div className="container-dashboard-one">
            <SideBar />
            <HeaderDash />
            <FormConfiguracoes />
        </div>       
    );
}

export default Configuracoes;