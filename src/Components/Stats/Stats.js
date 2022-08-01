import React from 'react'
import './Stats.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StatsRow from './StatsRow'
import { db } from '../../firebase'
import { collection, doc, getDocs } from 'firebase/firestore'

function Stats() {
    const baseUrl = 'https://finnhub.io/api/v1/quote'
    const token = 'cbi09maad3i529bmatsg'

    const [stockData, setstockData] = useState([])
    const [myStocks, setmyStocks] = useState([])
    const getStocksData = (stock) => {
        return axios
            .get(`${baseUrl}?symbol=${stock}&token=${token}`)
            .catch((err) => console.log(err))
    }

    const addShareToCurrentStock = (id) => {
        var stock = myStocks.find((stock) => stock.id == id)
        stock.data.shares += 1
        setmyStocks([...myStocks])
    }

    const addNewToStockToMyStock = (stock) => {
        console.log(stock)
        console.log(myStocks)

        getStocksData(stock.name).then((res) => {
            const stockToPush = {
                id: stock.id,
                data: stock,
                info: res.data,
            }

            myStocks.push(stockToPush)
            setstockData([...stockData])
        })
    }

    const getMyStocks = async () => {
        const stockCol = collection(db, 'myStocks')
        const stockSnapshot = await getDocs(stockCol)
        const stockData = await stockSnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                shares: doc.data().shares,
                name: doc.data().ticker,
            }
        })

        let promises = []
        let tempData = []

        stockData.map((doc) => {
            promises.push(
                getStocksData(doc.name).then((res) => {
                    tempData.push({
                        id: doc.id,
                        data: doc,
                        info: res.data,
                    })
                })
            )
        })

        Promise.all(promises).then(() => {
            console.log(tempData)
            setmyStocks(tempData)
        })
    }

    useEffect(() => {
        getMyStocks()
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
            setstockData(tempStockData)
        })
    }, [])

    return (
        <div className="stats">
            <div className="stats_container">
                <div className="stats_header">
                    <p>My Stocks</p>
                </div>
                <div className="stats_content">
                    <div className="stats_rows">
                        {/* for current stocks */}
                        {myStocks.map((stock) => (
                            <StatsRow
                                key={stock.id}
                                name={stock.data.name}
                                openPrice={stock.info.o}
                                price={stock.info.c}
                                shares={stock.data.shares}
                                id={stock.id}
                            ></StatsRow>
                        ))}
                    </div>
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
                                addShare={addShareToCurrentStock}
                                addNewStock={addNewToStockToMyStock}
                            ></StatsRow>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
