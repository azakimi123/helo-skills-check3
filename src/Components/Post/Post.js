import React, {Component} from 'react';
import './Post.css';


class Post extends Component{
    render(){
        console.log(this.props.post)
        return(
            <div>
                <section>
                    <section className='post-card'>
                        <h2  className='post-title'>{this.props.post.title}</h2>
                        <img src={this.props.post.img} alt={this.props.post.title} className='post-img'/>
                        <h3  className='post-content'>{this.props.post.content}</h3>
                    </section>
                </section>
            </div>
        )
    }
}


export default Post;