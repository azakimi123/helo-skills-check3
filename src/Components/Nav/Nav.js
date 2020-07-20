import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearUser, getUser} from '../../ducks/reducer';
import axios from 'axios';
import './Nav.css';
import home from '../../img/home.svg';
import logout from '../../img/logout.svg';
import post from '../../img/post.svg';


class Nav extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }


    componentDidMount = () => {
        console.log('hello')
        axios.get(`/api/auth/me`)
        .then(res => {
            console.log('user info')
            this.props.getUser(res.data[0])
        })
    }


    handleLogout  = () => {
        axios.post('/auth/logout')
        .then( () => {
            this.props.clearUser();
            this.props.history.push('/');
        })
        .catch(err => console.log(err))
    }

    render(){
        // console.log(this.props.user)

        return(
            <div>
                {this.props.location.pathname !== '/'
                ? (
                    <div  className='nav-bar'>
                        <section className='info'>
                            <img className='profile-pic' src={this.props.user.profile_pic} alt={this.props.user.username}/>
                            <p className='profile-name'>{this.props.user.username}</p>
                        </section>
                        <div className='link-container'>
                            <div>
                                <Link className='link1' to='/dashboard'>
                                    <img src={home} alt='home button'/>
                                </Link>
                                <Link  className='link1' to='/new'>
                                    <img src={post} alt='post button'/>
                                </Link>
                            </div>
                                <Link to='/'>
                                    <img className='link2' src={logout} alt='logout button' onClick={this.handleLogout}/>
                                </Link>
                        </div>
                    </div>
                )
                : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, {clearUser, getUser})(withRouter(Nav));