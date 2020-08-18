
import React, { Component } from 'react'
import auth from './auth'

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            user: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }


    handleChange (event) {

        if(event.target.id === "user") {

            this.setState({
                user: event.target.value
            })

        } else {
            this.setState({
                password: event.target.value
            })
        }
       
        
    }

    render() {
        return (
            <div>
                <h1>landing</h1>
                    
                    <p>User</p>
                    <input id="user" type="text" onChange={this.handleChange} value={this.state.user} />
                    <p>Password</p>
                    <input id="pass" type="text" onChange={this.handleChange} value={this.state.password} />
                    
                    
                    
                    <button onClick={
                        () => {
                            auth.login(this.state.user,this.state.password,() => {
                                this.props.history.push("/app")
                            })
                        }
                    }>Login</button>
                    <button onClick= {
                         () => {
                            auth.register(this.state.user,this.state.password,() => {
                                this.props.history.push("/app")
                            })
                        }

                    }>
                        Register
                    </button>
            </div>
        )
    }
}

