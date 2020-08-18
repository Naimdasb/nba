import React, { Component } from 'react'

export default class PlayerSpecs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            player: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.getIndex = this.getIndex.bind(this)
    }

    getIndex (id) {
        let playerIndex = null;
        this.props.players.forEach((player,index) => {
            if(player.id === id) {
                playerIndex = index
            }
        })
        return playerIndex
    }

    handleChange (event) {
        if (event.target.value === "") {
            this.setState({
                player: ""
            })
        } else {
        this.setState({
            id: event.target.value,
            player: this.props.players[this.getIndex(event.target.value)]
        })
        }
    }

    render() {

        let prev =  <div>
                        <p>Player Name: {this.state.player.name}</p>
                        <p>Player ID: {this.state.player.id}</p>
                        <p>Player Score: {this.state.player.points}</p>
                        <p>Player History: {this.state.player.history? this.state.player.history.reverse().slice(0,50).map(el => el + ", "): "none" }</p>
                    </div>

        return (
            <div className="container_playerSpecs">
               <div className="box">
                <h1>Player Preview</h1>
                <select onChange={this.handleChange}>
                    <option value="">Please select an option</option>
                    {this.props.players.map((player) => <option 
                            key={player.id} 
                            value={player.id}>{player.name}</option>)}
                </select>
                    {this.state.player === ""? "" : prev }
                </div>
            </div>
        )
    }
}
