import React, {Component} from 'react';
import './Post.css';


class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: '',
            content: '',
            author: '',
            authorPic: ''
        }
    }


    render(){
        // console.log(this.props.post.title)
        return(
            <div>
                {/* <section >
                    <section className='post-card'>
                        <h2  className='post-title'>{this.props.post.title}</h2>
                        <section  className='right-post-card'>
                            <h3  className='post-auth'>by {this.props.post.username}</h3>
                            <img src={this.props.post.profile_pic} alt={this.props.post.username} className='post-img'/>
                        </section>
                    </section>
                </section> */}
            </div>
        )
    }
}


export default Post;