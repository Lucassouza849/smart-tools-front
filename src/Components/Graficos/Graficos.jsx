import React, { useEffect, useState } from "react";
import './graficos.css';
import Chart from 'react-apexcharts';
import api from "../../services/api";



function Graficos(){
   
    
    // grafico donut
    
    const options = {
        legend: {
            show: false
        }
    }

    const[chartData, setChartData] = useState({labels: [], series: []});
    let idUser = sessionStorage.getItem('userId');

    useEffect(() => {
        async function plotaDados(){
            const response = await  api.get(`/extratos/todos/${idUser}`);
            if(response.status === 204){
                setChartData({labels: [], series: []})
            }else if(response.status === 200){
                const data = response.data;
                const myLabels = data.map(x => x.categoria);
                const mySeries = data.map(x => x.valorEntrada | x.saida);
                setChartData({labels: myLabels, series: mySeries})
            }
        }
        plotaDados();
        
    }, [])



    
    return(
        <>

        
                    <Chart
                        options={{...options, labels: chartData.labels}}
                        series={chartData.series}
                        type="donut"
                        height="200px" />
              
                
                

                  
                            
        </>
    );
}

export default Graficos;

