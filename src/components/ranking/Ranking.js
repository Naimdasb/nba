import React from 'react'

export default function Ranking(props) {
    
    let sorted = props.players.sort(function(a,b){return b.points - a.points})
    console.log(sorted)

    return (
        

        <div>
            <h1>Ranking</h1>
            {sorted.slice(0,4).map( player => 
                
            
            <div>
                <p>Player Name: {player.name}</p>
                <p>Player ID: {player.id}</p>
                <p>Player Score: {player.points}</p>
                <p>Player History: {player.history.length === 0? "none": player.history+""}</p>
            </div>
            
            )}
        </div>
    )
}
