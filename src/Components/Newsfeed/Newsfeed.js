import React, { useState } from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from '../TimeLine/TimeLine'
import { Avatar, Chip } from '@mui/material'

function Newsfeed() {
    const [popularTopics, setTopics] = useState([
        'Technology',
        'Top Movies',
        'Upcoming Earnings',
        'Crypto',
        'Cannabis',
        'Healthcare Supplies',
        'Index ETFs',
        'Technology',
        'China',
        'Pharma',
    ])

    return (
        <div className="newsfeed">
            <div className="newsfeed_container"></div>
            <div className="newsfeed_chartSection">
                <div className="newsfeed_portfolio">
                    <h1>£144,444</h1>
                    <p>+$44.63 (+0.04%) today</p>
                </div>
            </div>
            <div className="newsfeed_chart">
                <LineGraph></LineGraph>
                <TimeLine></TimeLine>
            </div>
            <div className="newsfeed_buying_section">
                <h2> Buying Power</h2>
                <h2> £4.11</h2>
            </div>
            <div className="newsfeed_market_section">
                <div className="newsfeed_market_box">
                    <p> Markets Closed</p>
                    <h1> Till tomorrow...</h1>
                </div>
            </div>

            <div className="newsfeed_popularlists_section">
                <div className="newsfeed_popularlists_intro">
                    <h1>Popular lists</h1>
                    <p>Show More</p>
                </div>
                <div className="newsfeed_popularlists_badges">
                    {popularTopics.map((topic) => (
                        <Chip
                            className="topic_badge"
                            variant="outlined"
                            label={topic}
                            avatar={
                                <Avatar
                                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                                />
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Newsfeed
