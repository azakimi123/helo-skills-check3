import React, {Component} from 'react';
import './Post.css';
import axios from 'axios';
import {connect} from 'react-redux';
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

    componentDidMount = () => {
        axios.get(`/api/post/${this.props.match.params.postid}`)
        .then(res => {
            console.log(res.data[0])
            this.setState({
                title: res.data[0].title,
                img: res.data[0].img,
                content: res.data[0].content,
                author: res.data[0].username,
                authorPic: res.data[0].profile_pic
            })
            // .catch(err => res.status(500).send(console.log(err)))
        })
    }

    render(){
        // console.log(this.props)
        return(
            <div className='container2'>
                <section className='post-card2'>
                    <section className='post-card-top2'>
                        <h3 className='post-title2'>{this.state.title}</h3>
                        <section className='post-card-right2'>   
                            <p className='post-author2'>{this.state.author}</p>
                            <img className='post-profile2' src={this.state.authorPic} alt={this.state.author}/>
                        </section>
                    </section>
                    <section className='post-card-bottom2'>
                        <img className='post-img2' src={this.state.img} alt={this.state.title}/>
                        <p className='post-content2'>{this.state.content}</p>   
                    </section>
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Post);