import React, {Component} from 'react';
import {connect} from 'react-redux'
// import Post from '../Post/Post';
import './Dashboard.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            search: '',
            userPosts: false
        }
    }

    // componentDidMount = () => {
    //     axios.get(`/api/posts/${this.props.user.id}?userPosts${this.state.userPosts}&title=${this.state.search}`)
    //     .then(res => {
    //         this.setState({posts: res.data})
    //         // console.log(res.data)
    //     })
    // }

    componentDidMount = () => {
            axios.get('/api/getAllPosts')
            .then( res => {
                this.setState({posts: res.data,})
            })
        }


    userPosts = () => {
        axios.get(`/api/posts/${this.props.user.id}?userPosts${this.state.userPosts}&title=${this.state.search}`)
        .then(res => {
            this.setState({posts: res.data})
        }) 
    }


    handleSearchInput = (val) => {
        this.setState({search: val})
    }

    handleUserpostCheckbox = () => {
        this.setState({userPosts: !this.state.userPosts})
        if(this.state.userPosts === false) {
            this.userPosts();
        } else {
            this.componentDidMount();
        }
    }

    render(){
        // console.log(this.props.posts)
        // console.log(this.state.search)
        // console.log(this.props)
        // console.log(this.state.userPosts)
        // console.log(this.state.posts)
        // const displayUserPosts = this.userPosts();
        return(
            <div>
                <section className='input-container'>
                    <input
                        placeholder='Search by Title'
                        value={this.state.search}
                        onChange={ e => this.handleSearchInput(e.target.value)}/>
                    <button>Search</button>
                    <button>Reset</button>
                    <span>My Posts</span>
                    <input 
                        type="checkbox" 
                        value={this.state.userPosts}
                        onClick={this.handleUserpostCheckbox}/>
                </section>
                {/* maps over posts to display in dashboard view */}
                <div>
                        {this.state.posts.map((post, index) => (
                            
                            <div className='post-container' key={index}>
                                <Link to={`/post/${post.post_id}`} className="link" >
                                
                                    <section  className='post-card'>
                                        <p className='post-title'>{post.title}</p>
                                        <section className='right-post-card'>
                                            <p className='post-auth'>{post.username}</p>
                                            <img  className='post-img' src={post.profile_pic} alt={post.username}/>
                                        </section>
                                    </section>
                                </Link>
                            </div>
                            
                        ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);

