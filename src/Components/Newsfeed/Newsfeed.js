import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'

function Newsfeed() {
    return (
        <div className="newsfeed">
            <div className="newsfeed_container"></div>
            <div className="newsfeed_chartSection">
                <div className="newsfeed_portfolio">
                    <h1>$144444</h1>
                    <p>+44.63 (+0.04%) today</p>
                </div>
            </div>
            <div className="newsfeed_chart">
                <LineGraph></LineGraph>
                <div className="test"></div>
            </div>
        </div>
    )
}

export default Newsfeed
