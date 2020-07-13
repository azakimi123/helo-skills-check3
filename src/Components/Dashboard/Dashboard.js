import React, {Component} from 'react';
import {connect} from 'react-redux'
import Post from '../Post/Post';
import './Dashboard.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                // {
                //     title: 'Naruto',
                //     img: 'https://img1.looper.com/img/gallery/the-entire-naruto-storyline-finally-explained/intro-1583346246.jpg',
                //     content: 'Naruto is awesome, rasengan'
                // },
                // {
                //     title: 'Kakashi Sensei',
                //     img: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/KakashiHatake_Naruto_0.png',
                //     content: 'Kakashi is awesome, chidori and kamui'
                // },
                // {
                //     title: 'Sasuke',
                //     img: 'https://www.dhresource.com/0x0/f2/albu/g9/M00/03/D9/rBVaWF33STWAbHzrAAbKy45W4I4388.jpg',
                //     content: 'Sasuke is awesome, amaterasu, mangekyo'
                // }
                
            ],
            search: '',
            userPosts: true
        }
    }

    componentDidMount = () => {
        axios.get(`/api/posts/${this.props.user.id}?${this.state.userPosts}&title=${this.state.search}`)
        .then(res => {
            this.setState({posts: res.data})
            console.log(res.data)
        })
    }

    handleSearchInput = (val) => {
        this.setState({search: val})
    }

    render(){
        // console.log(this.props.posts)
        // console.log(this.state.search)

        let postList = this.state.posts.map((post, index) => (
            <Post key={index} post={post}/>
        ))
        console.log(this.state.posts)
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
                        value={this.state.userPosts}/>
                </section>
                <div>
                    {this.state.posts.map((post, index) => (
                        <div className='post-container'>
                            <section  className='post-card'>
                                <p className='post-title'>{post.title}</p>
                                <section className='right-post-card'>
                                    <p className='post-auth'>{post.username}</p>
                                    <img  className='post-img' src={post.profile_pic} alt={post.username}/>
                                </section>
                            </section>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);