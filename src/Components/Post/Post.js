import React, {Component} from 'react';
import './Post.css';


class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: '',
            content: '',
            author: 'aaron6',
            authorPic: 'https://image.flaticon.com/icons/svg/2948/2948218.svg'
        }
    }
    render(){
        console.log(this.props.post)
        return(
            <div>
                <section >
                    <section className='post-card'>
                        <h2  className='post-title'>{this.props.post.title}</h2>
                        <section  className='right-post-card'>
                            <h3  className='post-auth'>by {this.state.author}</h3>
                            <img src={this.state.authorPic} alt={this.state.author} className='post-img'/>
                        </section>
                    </section>
                </section>
            </div>
        )
    }
}


export default Post;