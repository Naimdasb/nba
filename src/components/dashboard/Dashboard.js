import React, { Component } from 'react'
import Player from '../player/Player'
import PlayerList from '../playerList/PlayerList';
import Ranking from '../ranking/Ranking'
import PlayerSpecs from '../playerspec/PlayerSpecs'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerList: JSON.parse(localStorage.getItem('data')) || []
        }

        this.createPlayer = this.createPlayer.bind(this)
        this.getIndex = this.getIndex.bind(this)
    }

    createPlayer (props) {
        
        

        this.setState(state => {
            let prev = [...state.playerList];
            let newarr = prev.concat({...props});
            return {playerList: newarr}
        })

        console.log(this.state.playerList, 'created')
    }

    getIndex (name) {
        console.log(name)
        let playerIndex = null;
        this.state.playerList.forEach((player,index) => {

            if(player.name === name) {
                playerIndex = index
            }
            
        })
        return playerIndex
    }

    setHistory (props) {

        let index = this.getIndex(props.name)
        console.log(this.getIndex(props.name))


        this.setState( state => {
            let prev = [...state.playerList];
            prev[index].history = [...prev[index].history, props.shot]
            prev[index].points = props.score === "true"? prev[index].points + 1 : prev[index].points

            return {playerList : prev}
        }

        )
    }

    

    
    componentDidUpdate() {
        localStorage.setItem('data', JSON.stringify(this.state.playerList))
        
    }

    render() {

        console.log(this.state.playerList)
        return (
            <div>
                <h1>Dashboard</h1>
                <Player addPlayer={(name, id) => this.createPlayer(name, id)}/>
                <PlayerList players={this.state.playerList} addHistory={(props, index) => this.setHistory(props,index)} />
                <Ranking players={this.state.playerList} />
                <PlayerSpecs players={this.state.playerList} />
            </div>
        )
    }
}

