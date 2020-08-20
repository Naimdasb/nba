import React from 'react'

export default function Ranking(props) {
    
    return (
        <div className="container_history">
            <h1>Last Plays</h1>
            {props.records.slice(0,4).map( record => 
            <div className="box">
                <p>Name: {record.shooter}</p>
                <p>Position: {record.position}</p>
                <p>Score: {record.score}</p>
                <p>Distance (mts): {record.distance}</p>
            </div>
            )}
        </div>
    )
}
