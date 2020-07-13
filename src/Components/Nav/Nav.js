import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Nav.css';
import home from '../../img/home.svg';
import logout from '../../img/logout.svg';
import post from '../../img/post.svg';


class Nav extends Component{
    render(){
        // console.log(this.props)

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
                                <Link  className='link2' to='/'>
                                    <img src={logout} alt='logout button'/>
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

export default connect(mapStateToProps)(withRouter(Nav));