import React from 'react'

export default function Ranking(props) {
    
    let sorted = props.players.sort(function(a,b){return b.points - a.points})
    
    return (
        <div className="container_ranking">
            <h1>Ranking</h1>
            {sorted.slice(0,3).map( player => 
            <div className="box">
                <p>Name: {player.name}</p>
                <p>ID: {player.id}</p>
                <p>Points: {player.points}</p>
                <p>Last Plays: {player.history.length === 0? "": player.history.reverse().slice(0,6).map(el => el + ", ") }</p>
            </div>
            )}
        </div>
    )
}
