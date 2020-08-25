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
        } else if (event.target.id === "distance") {
            this.setState({
                distance: event.target.value.slice(0,4)
            })
        } else {
            this.setState({
                position: event.target.value
            })
        }
    }

    handleSubmit (event) {
        event.preventDefault()
        if(this.state.distance > 0) {
        this.props.addHistory(this.state)
        }
    }
    
    render() {
        return (
            <div className="container_playerList">   
                    <h1>New Plays</h1>
                    <form onSubmit={this.handleSubmit}>
                        <select id="who" 
                                onChange={this.handleChange} 
                                required>
                            <option value="">Please select an option</option>
                            {this.props.players.map((player) => <option 
                                    key={player.id} 
                                    value={player.name}>{player.name}</option>)}
                        </select>
                        <br/>
                        <p>Did he score?</p>
                        <label> Yes </label> 
                            <input type="radio" 
                                   name="score" 
                                   value="true" 
                                   onChange={this.handleChange} 
                                   checked={this.state.score==="true"}/>
                        <label> No </label>
                            <input type="radio" 
                                   name="score" 
                                   value="false"  
                                   onChange={this.handleChange}  
                                   checked={this.state.score==="false"}/>
                        <br/>
                        <p className="position">Position</p>
                        <select id="what" onChange={this.handleChange} required>
                            <option value="">Please select an option</option>
                            <option value="Position_A">Position_A</option>
                            <option value="Position_B">Position_B</option>
                            <option value="Position_C">Position_C</option>
                            <option value="Position_D">Position_D</option>
                            <option value="Position_E">Position_E</option>
                        </select>
                        <br/>
                        <p>Distance <span>(mts)</span></p>
                        <input id="distance"
                               
                               type='number' 
                               value={this.state.distance}
                               onChange={this.handleChange} 
                               required />
                        <br/>
                        <input className="button" 
                               type='submit' 
                               value='submit'/>
                    </form>
            </div>
        )
    }
}
