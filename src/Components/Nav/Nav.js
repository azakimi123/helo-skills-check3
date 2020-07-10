import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';


class Nav extends Component{
    render(){
        // console.log(this.props)
        return(
            <div>
                {this.props.location.pathname !== '/'
                ? (
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
                )
                : null}
            </div>
        )
    }
}


export default withRouter(Nav);