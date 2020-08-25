import React, { Component } from 'react'
import Player from '../player/Player'
import PlayerList from '../playerList/PlayerList';
import Ranking from '../ranking/Ranking'
import PlayerSpecs from '../playerspec/PlayerSpecs'
import History from '../history/History'
import auth from '../../auth'


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerList: JSON.parse(localStorage.getItem('data')) || [],
            recordList: JSON.parse(localStorage.getItem('record')) || []
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
    }

    getIndex (name) {
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

        this.setState( state => {
            let prevList = [...state.playerList];
            prevList[index].history = [...prevList[index].history, props.position]
            prevList[index].points = props.score === "true"? prevList[index].points + 1 : prevList[index].points
            
            let prevRecord = [...state.recordList];
            prevRecord.push({shooter: props.name , distance: props.distance, score: props.score, position: props.position }) 
            
            return {
                playerList : prevList,
                recordList: prevRecord
            }
        }
        )
    }

    componentDidUpdate() {
        localStorage.setItem('data', JSON.stringify(this.state.playerList))
        localStorage.setItem('record', JSON.stringify(this.state.recordList))
    }

    render() {
        return (
            <div className="container_dashboard">
                <div className="header">
                <h1 className="title">Dashboard</h1>
                <p>Welcome {localStorage.getItem("currentSession")}</p>
                <button className="logout" onClick={
                    () => {
                        auth.logout(() => {
                            window.location.reload()
                        })
                    }
                }>Logout</button>
                </div>
                <Player addPlayer={(name, id) => this.createPlayer(name, id)}/>
                <PlayerList players={this.state.playerList} addHistory={(props) => this.setHistory(props)} />
                <Ranking players={this.state.playerList} />
                <PlayerSpecs players={this.state.playerList} />
                <History records={this.state.recordList}/>
            </div>
        )
    }
}

