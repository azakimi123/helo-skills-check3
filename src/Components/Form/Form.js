import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Form.css';
import axios from 'axios';


class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            img: '',
            content: ''
        }

        this.handleTitleInput = this.handleTitleInput.bind(this);
    }

    handleTitleInput(title) {
        this.setState({title: title})
    }

    handleImgInput = (url) => {
        this.setState({img: url})
    }

    handleContentInput = (content) => {
        this.setState({content: content})
    }

    handlPostButton = () => {
        const {title, img, content} = this.state;
        axios.post(`/api/addPost/${this.props.id}`, {title, img, content})
        .then(() => {
            this.props.history.push('/dashboard');
        })
    }


    render(){
        console.log(this.state.title)
        console.log(this.props)
        return(
            <div className='container'>
                <span>Title: </span><input
                    placeholder='Title'
                    value={this.state.title}
                    onChange={e => this.handleTitleInput(e.target.value)}/>
                <img className='add-img' src={this.state.img} alt='post'/>
                <span>Img URL: </span><input
                    placeholder='Image'
                    value={this.state.img}
                    onChange={e => this.handleImgInput(e.target.value)}/>
                <span>Content: </span><input
                    placeholder='Content'
                    value={this.state.content}
                    onChange={e => this.handleContentInput(e.target.value)}/>
                <button onClick={this.handlPostButton}>Post</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {id} = reduxState.user;
    return {
        id
    };
}

export default connect(mapStateToProps)(Form);