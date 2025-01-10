import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function Exam4() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://www.trcloud.co/test/api.php');
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    const barChartData = {
        labels: data.map(item => item.City),
        datasets: [{
            label: 'Range by Country',
            data: data.map(item => parseInt(item.Population)),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }],
    };

    const pieChartData = {
        labels: data.map(item => item.City),
        datasets: [{
            label: 'Population Distribution',
            data: data?.map(item => parseInt(item.Population)),
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        }],
    };

    return (
        <div>
            <h1 className='font-bold'>
                Use any JS library to display a bar chart and a pie chart from the data retrieved from https://www.trcloud.co/test/api.php through an AJAX call.
            </h1>

            <div className='mb-20 mt-20'>
                <Bar data={barChartData} options={{ responsive: true }} />
            </div>
            <div>
                <Pie data={pieChartData} options={{ responsive: true }} />
            </div>

        </div >
    )
}


