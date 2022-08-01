import React, { useState } from 'react'
import './StatsRow.css'
import StockSvg from '../../Images/stock.svg'
import { db } from '../../firebase'
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    updateDoc,
    addDoc,
} from 'firebase/firestore'

function StatsRow(props) {
    const percentage = ((props.price - props.openPrice) / props.openPrice) * 100

    const buyStock = async () => {
        const q = query(
            collection(db, 'myStocks'),
            where('ticker', '==', props.name)
        )
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
            const docData = querySnapshot.docs.map((d) => {
                return {
                    id: d.id,
                    shares: d.data().shares,
                    name: d.data().ticker,
                }
            })[0]

            const stockRef = doc(db, 'myStocks', docData.id)
            await updateDoc(stockRef, {
                shares: docData.shares + 1,
            })
            props.addShare(docData.id)
        } else {
            const docRef = await addDoc(collection(db, 'myStocks'), {
                ticker: props.name,
                shares: 1,
            })

            props.addNewStock({
                id: docRef.id,
                shares: 1,
                name: props.name,
            })
            //add
        }
    }

    return (
        <div className="row" onClick={buyStock}>
            <div className="row_intro">
                <h1>{props?.name}</h1>
                <p>{props.shares && props.shares + ' shares'}</p>
            </div>
            <div className="row_chart">
                <img src={StockSvg} height={16} />
            </div>
            <div className="row_numbers">
                <p className="row_price">{props.price}</p>
                <p className="row_percentage">
                    {' '}
                    +{Number(percentage).toFixed(2)}%
                </p>
            </div>
        </div>
    )
}

export default StatsRow
