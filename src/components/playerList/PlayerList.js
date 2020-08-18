import React, { Component } from 'react'

export default class playerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: "",
                score: "false",
                position:  "",
                distance: ""
            }
        

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        if(event.target.id === "who") {
            this.setState({
                name: event.target.value
            })
        } else if (event.target.type === "radio") {

            this.setState({
                score: event.target.value
            })

        }
        
        else if (event.target.id === "distance") {
            this.setState({
                distance: event.target.value,
                
            })
        } else {
            this.setState({
                position: event.target.value,
                
            })
        }
    }

    handleSubmit (event) {
        event.preventDefault()

        this.props.addHistory(this.state)
    }
    

    render() {

        console.log(this.state)

        return (
            <div>   
                    <h1>New Plays</h1>
                    <form onSubmit={this.handleSubmit}>
                        <select id="who" onChange={this.handleChange} required>
                            <option value="">Please select a player</option>
                        {this.props.players.map((player) => <option key={player.id} value={player.name}>{player.name}</option>)}
                        </select><br/>
                        <p>Did he score?</p>
                        <label> Yes
                            <input type="radio" name="score" value="true" onChange={this.handleChange} checked={this.state.score==="true"}/>
                        </label> 
                        <label> No
                            <input type="radio" name="score" value="false" onChange={this.handleChange} checked={this.state.score==="false"}/>
                        </label><br/>
                        <select id="what" onChange={this.handleChange} required>
                            <option value="">Please select shot</option>
                            <option value="position_a">position_a</option>
                            <option value="position_b">position_b</option>
                            <option value="position_c">position_c</option>
                            <option value="position_d">position_d</option>
                            <option value="position_e">position_e</option>
                        </select><br/>
                        <p>Distance</p>
                        <input id="distance" trype='text' value={this.state.distance} onChange={this.handleChange} required />
                        <br/>
                        <input type='submit' value='submit' />
                    </form>

            </div>
        )
    }
}
