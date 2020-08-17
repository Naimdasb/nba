import React, { Component } from 'react'

export default class playerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: "",
                score: "false",
                shot:  ""
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
        
        
        
        else {
            this.setState({
                shot: event.target.value
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
                        <label> Yes
                            <input type="radio" name="score" value="true" onChange={this.handleChange} checked={this.state.score==="true"}/>
                        </label> 
                        <label> No
                            <input type="radio" name="score" value="false" onChange={this.handleChange} checked={this.state.score==="false"}/>
                        </label>
                        <select id="what" onChange={this.handleChange} required>
                            <option value="">Please select shot</option>
                            <option value="shot_a">shot a</option>
                            <option value="shot_b">shot b</option>
                        </select>
                        <input type='submit' value='submit' />
                    </form>

            </div>
        )
    }
}
