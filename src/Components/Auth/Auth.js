import React, {Component} from 'react';
import axios from 'axios';


class Auth extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                password: ''
            }
        }
    }



    handleUsernameInput = (val) => {
        this.setState({user: {...this.state.user, username: val}})
    }

    handlePasswordInput = (val) => {
        this.setState({user: {...this.state.user, password: val}})
    }

    handleRegister = () => {
        const {username, password} = this.state.user;
        if(password && username) {
        axios.post('/auth/register', {username, password})
        .then(res => {
            console.log(res.data)
            this.setState({username: res.data.username, password: res.data.password});
            this.props.history.push('/dashboard');
            })
        .catch(err => alert(err.response.request.response))
        }
    }

    handleLogin = () => {
        const {username, password} = this.state.user;
        axios.post('/auth/login', {username, password})
        .then(res => {
            this.setState({username: res.data.username, password: res.data.password});
            this.props.history.push('/dashboard');
        })
        .catch(err => alert(err.response.request.response))
    }


    render(){
        // console.log(this.state.user.username)
        // console.log(this.state.user.password)
        return(
            <div>
                <span>Username: </span><input
                    value={this.state.user.username}
                    onChange={ (e) => this.handleUsernameInput(e.target.value)}/>
                <span>Password: </span><input
                    value={this.state.user.password}
                    type='password'
                    onChange={ (e) => this.handlePasswordInput(e.target.value)}/>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}


export default Auth;