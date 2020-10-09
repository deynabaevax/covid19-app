import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = () => {
    // once we fetch the data, we'll set it to the state and provide the initial value, which is an empty object
    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchAPI = async() =>{
            setDailyData(await fetchDailyData());
        }

        fetchAPI();
    });

    const lineChart = (
        <Line 
            data={{
                labels: '',
                datasets: [{}, {}],
            }}
        />
    );

    return(
        <h1>Chart</h1>
    )
}

export default Chart;