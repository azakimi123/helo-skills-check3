import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';


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
        this.setState({username: val})
    }

    handlePasswordInput = (val) => {
        this.setState({password: val})
    }

    handleRegister = () => {
        const {username, password} = this.state;
        if(password && username) {
        axios.pos('/auth/register', {username, password})
        .then(res => {
            // console.log(res.data)
            this.props.getUser(res.data);
            this.props.history.push('/dashboard');
            })
        .catch(err => alert(err.response.request.response))
        }
    }

    handleLogin = () => {
        const {username, password} = this.state;
        axios.post('/auth/login', {username, password})
        .then(res => {
            this.props.getUser(res.data);
            this.props.history.push('/dashboard');
        })
        .catch(err => alert(err.response.request.response))
    }


    render(){
        console.log(this.state.user.username)
        // console.log(this.state.user.password)
        return(
            <div>
                <span>Username: </span><input
                    value={this.state.username}
                    onChange={ (e) => this.handleUsernameInput(e.target.value)}/>
                <span>Password: </span><input
                    value={this.state.password}
                    type='password'
                    onChange={ (e) => this.handlePasswordInput(e.target.value)}/>
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleRegister}>Register</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {getUser})(Auth);