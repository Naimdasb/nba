import React, { Component } from 'react'

export default class Player extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "",
            id: "",
            points: 0,
            history: [],
            flag: false    
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.playerExist = this.playerExist.bind(this)
    }

    handleChange (event) {
        if(event.target.type === 'text') {
            this.setState({
                name: event.target.value.slice(0, 25)
            })
        } else {
            this.setState({
                id: event.target.value.slice(0, 11)
            })
            if(this.playerExist(event.target.value).length === 0) {
                this.setState({
                    flag: true
                })
            } else {
                this.setState({
                    flag: false
                })
            }
        }    
    }

    playerExist(id) {
        let players = JSON.parse(localStorage.getItem('data'))
        return players.filter(element => 
            element.id === id
        )

    }

    handleSubmit(event) {
        event.preventDefault()
        
        if(this.playerExist(this.state.id).length === 0 && this.state.id !== "") {
       
        this.props.addPlayer(this.state)
        this.setState({
            name: "",
            id: ""
        })
        }
    }



    render() {
        return (
            <div className="container_player">
                <h1>New Player Preview</h1>
                <p>Player Name: {this.state.name}</p>
                <p>Player ID: {this.state.id}</p>
                <h1>Player Input</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Name: </label>
                        <input type="text" 
                               onChange={this.handleChange}  
                               value={this.state.name}  
                               required/>
                    <br/>
                    <label> Player ID</label>
                        <input type="number"
                               onChange={this.handleChange} 
                               value={this.state.id} 
                               required/>
                    <br/>
                    <p>{this.playerExist(this.state.id).length !== 0? "ID already Exist": ""}</p>
                    <input className="button"
                           disabled={!this.state.flag}  
                           type="submit" 
                           value="Submit" />
                </form>
            </div>
        )
    }
}
