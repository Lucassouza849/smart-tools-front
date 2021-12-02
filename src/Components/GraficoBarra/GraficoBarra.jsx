import Chart from 'react-apexcharts';
import React, { useEffect, useState } from "react";
import api from '../../services/api';


function GraficoBarra(){

     // grafico de barra 


     const options = {
        plotOptions: {
            bar: {
                horizontal: false,
            }
        },
    };


     const[barData, setBarData] = useState({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]       
    });

    let idUser = sessionStorage.getItem('userId');

   

    useEffect(() => {
        async function plotaDados(){
            const response = await  api.get(`/extratos/todos/${idUser}`);
            if(response.status === 204){
                setBarData({
                    labels: {
                        categories: []
                    },
                    series: [
                        {
                            name: "",
                            data: []
                        }
                    ]       
                })
            }else if(response.status === 200){
            const data = response.data;
            const myLabels = ["despesas", "receitas"];
            const mySeries = data.map(x => x.valorEntrada | x.saida);
            setBarData({
                labels: {
                    categories: myLabels
                },
                series: [
                    {
                        name: "",
                        data: mySeries
                    }
                ]       
            })
            }
        }
        plotaDados();
        
    }, [])
    
    return(
        <Chart
        options={{...options, labels: barData.labels}}
        series={barData.series}
        type="bar"
        height="200px"
        width="325px"
         />
    );
}

export default GraficoBarra;