import React from 'react'

export default function Ranking(props) {
    
    

    return (
        

        <div>
            <h1>Last Plays</h1>
            {props.records.slice(0,4).map( record => 
                
            
            <div>
                <p>Record Name: {record.shooter}</p>
                <p>Record Position: {record.position}</p>
                <p>Record Score: {record.score}</p>
                <p>Record Distance: {record.distance}</p>
            </div>
            
            )}
        </div>
    )
}
