import React, { Component } from 'react'

export default class Player extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            id: "",
            points: 0,
            history: [],    
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (event) {
        if(event.target.type === 'text') {
            this.setState({
                name: event.target.value
            })
        } else {
            this.setState({
                id: event.target.value
            })
        }    
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.addPlayer(this.state)
    }

    render() {
        return (
            <div>
                <h1>New Player Preview</h1>
                <p>Player Name: {this.state.name}</p>
                <p>Player ID: {this.state.id}</p>
                <h1>Player Input</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Name: 
                        <input type="text" onChange={this.handleChange} value={this.state.name} required/>
                    </label><br/>
                    <label> Player ID
                        <input type="number" onChange={this.handleChange} value={this.state.id} required/>
                    </label><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}
