import React, {Component} from 'react';
import Post from '../Post/Post';
import './Dashboard.css';


class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    title: 'Naruto',
                    img: 'https://img1.looper.com/img/gallery/the-entire-naruto-storyline-finally-explained/intro-1583346246.jpg',
                    content: 'Naruto is awesome, rasengan'
                },
                {
                    title: 'Kakashi Sensei',
                    img: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/KakashiHatake_Naruto_0.png',
                    content: 'Kakashi is awesome, chidori and kamui'
                },
                {
                    title: 'Sasuke',
                    img: 'https://www.dhresource.com/0x0/f2/albu/g9/M00/03/D9/rBVaWF33STWAbHzrAAbKy45W4I4388.jpg',
                    content: 'Sasuke is awesome, amaterasu, mangekyo'
                }
                
            ],
            search: '',
            userPosts: true
        }
    }
    render(){
        let postList = this.state.posts.map((post, index) => (
            <Post post={post} key={index}/>
        ))
        console.log(postList)
        return(
            <div>
                <section className='input-container'>
                    <input
                        placeholder='Search by Title'
                        value={this.state.search}/>
                    <button>Search</button>
                    <button>Reset</button>
                    <span>My Posts</span>
                    <input 
                        type="checkbox" 
                        value={this.state.userPosts}/>
                </section>
                <section className='post-container'>
                    <span>{postList}</span>
                </section>
            </div>
        )
    }
}


export default Dashboard;