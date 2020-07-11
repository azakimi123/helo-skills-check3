import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Nav extends Component{
    render(){
        console.log(this.props)

        return(
            <div>
                {this.props.location.pathname !== '/'
                ? (
                    <div>
                        <div>
                            <Link to='/dashboard'>
                                <button>Home</button>
                            </Link>
                            <Link to='/new'>
                                <button>New Post</button>
                            </Link>
                            <Link to='/'>
                                <button>Logout</button>
                            </Link>
                        </div>
                        <section>
                            <img src={this.props.user.profile_pic} alt={this.props.user.username}/>
                            {this.props.user.username}
                        </section>
                    </div>
                )
                : null}
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(withRouter(Nav));