import React from "react";
import HeaderDash from "../../Components/Header-Dash/HeaderDash";
import Main from "../../Components/main/Main";
import SideBar from "../../Components/Sidebar/SideBar";
// import Cards from "../../Components/Cards/Cards";

function Dashboard(){
//   const[sidebarOpen,setSideBarOpen] = useState(false);

//   const openSideBar = () => {
//     setSideBarOpen(true);
//   }

//   const closeSideBar = () => {
//     setSideBarOpen(false);
//   }
    return(
        
        <div className="container-dashboard-one">
            
            <HeaderDash />
            <Main />
            <SideBar />
            
        </div>
        
    );
}

export default Dashboard;