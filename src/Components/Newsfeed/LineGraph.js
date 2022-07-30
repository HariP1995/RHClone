import React, { useEffect } from 'react'
import { useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip
)

function LineGraph() {
    const [graphData, setGraphData] = useState([])

    useEffect(() => {
        let data = []
        let value = 50
        for (var i = 0; i < 365; i++) {
            let date = new Date()
            date.setHours(0, 0, 0, 0)
            date.setDate(i)
            value += Math.round(
                (Math.random() < 0.5 ? 1 : 0) * Math.random() * 10
            )
            data.push({ x: date, y: value })
        }
        console.log(data)
        setGraphData(data)
    }, [])

    const options = {
        responsive: true,
        scales: {
            yAxes: [{ ticks: { display: false } }],
        },
    }
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'First dataset',
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: '#5AC53B',
                borderColor: '#5AC53B',
            },
        ],
    }

    return (
        <div className="linegraph" style={{ height: '200px' }}>
            <Line height={'100%'} data={data} options={options}></Line>
        </div>
    )
}

export default LineGraph
