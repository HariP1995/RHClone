import React from 'react'
import './Stats.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StatsRow from './StatsRow'

function Stats() {
    const baseUrl = 'https://finnhub.io/api/v1/quote'
    const token = 'cbi09maad3i529bmatsg'

    const [stockData, setstockData] = useState([])

    const getStocksData = (stock) => {
        return axios
            .get(`${baseUrl}?symbol=${stock}&token=${token}`)
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        const stocksList = [
            'AAPL',
            'MSFT',
            'TSLA',
            'FB',
            'BABA',
            'UBER',
            'DIS',
            'SBUX',
        ]
        const tempStockData = []
        let promises = []
        stocksList.map((stock) => {
            promises.push(
                getStocksData(stock).then((res) => {
                    tempStockData.push({
                        name: stock,
                        ...res.data,
                    })
                })
            )
        })

        Promise.all(promises).then(() => {
            console.log(tempStockData)
            setstockData(tempStockData)
        })
    }, [])

    return (
        <div className="stats">
            <div className="stats_container">
                <div className="stats_header">
                    <p>Stocks</p>
                </div>
                <div className="stats_content">
                    <div className="stats_rows">{/* for current stocks */}</div>
                </div>
                <div className="stats_header">
                    <p>Lists</p>
                </div>
                <div className="stats_content">
                    <div className="stats_rows">
                        {/* for current stocks we can buy*/}
                        {stockData.map((stock) => (
                            <StatsRow
                                key={stock.name}
                                name={stock.name}
                                openPrice={stock.o}
                                price={stock.c}
                            ></StatsRow>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
