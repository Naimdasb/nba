import React, { Component } from 'react'
import auth from './auth'

export default class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            user: "",
            password: "",
            userFlag: false,
            passFlag: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.userExist = this.userExist.bind(this)
    }

    userExist() {
        return localStorage.getItem(this.state.user)
    }

    handleChange (event) {
        
        if(event.target.id === "user") {
            this.setState({
                user: event.target.value
            })

            if(event.target.value !== "") {
                    
                this.setState({
                    userFlag: true
                })
            }

            else {
                this.setState({
                    userFlag: false
                })
            }
            

        } else {
                this.setState({
                    password: event.target.value
                })

                if(event.target.value.length > 6) {
                    
                    this.setState({
                        passFlag: true
                    })
                }

                else {
                    this.setState({
                        passFlag: false
                    })
                }
            }
        
    }

    

    render() {
        return (
            <div className="container_login">
                <h1>Panel Login</h1>
                    <p>User</p>
                    <input id="user" 
                           type="text" 
                           onChange={this.handleChange} 
                           value={this.state.user} />
                    <p>Password <span>(7 char long or more)</span></p>
                    <input id="pass" 
                           type="password" 
                           onChange={this.handleChange} 
                           value={this.state.password} />
                    <button 
                        onClick={
                        () => {
                            auth.login(this.state.user, this.state.password, () => {
                                this.props.history.push("/app")
                            })
                        }
                    }>Login</button>
                    <button 
                    disabled={!(this.state.userFlag && this.state.passFlag && this.userExist(this.state.user) === null)}
                    onClick= {
                        () => {
                            auth.register(this.state.user,this.state.password)
                        }
                    }>Register</button>
            </div>
        )
    }
}

