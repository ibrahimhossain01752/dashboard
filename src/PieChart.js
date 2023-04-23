import React from 'react';
// import Chart from './Chart.js/auto';
import { Chart as ChartJS } from 'chart.js/auto'
import {Pie} from 'react-chartjs-2';

// const labels = ["January","February","March","April","May","June"];

// const data = {
//     labels:labels,
//     datasets: [
//         {
//             label: 'My First dataset',
//             backgroundColor:"rgb(255,99,132)",
//             borderColor:"rgb(255,99,132)",
//             data:[0,10,5,2,20,30,45],
//         },
//     ],
// };

const PieChart = () => {
    const labels = ["January","February","March","April","May","June"];

const data = {
    labels:labels,
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor:"rgb(255,99,132)",
            borderColor:"rgb(25,99,132)",
            data:[0,10,5,2,20,30,45],
        },
    ],
};
    return (
        <div class="bg-white border-secondary">
            <Pie data={data}></Pie>
        </div>
    );
};

export default PieChart;