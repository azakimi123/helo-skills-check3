import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Form.css';


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


    render(){
        console.log(this.state.title)
        // console.log(this.props)
        return(
            <div className='container'>
                <span>Title: </span><input
                    placeholder='Title'
                    value={this.state.title}
                    onChange={e => this.handleTitleInput(e.target.value)}/>
                <img src={this.state.img} alt={this.state.title}/>
                <span>Img URL: </span><input
                    placeholder='Image'
                    value={this.state.img}
                    onChange={e => this.handleImgInput(e.target.value)}/>
                <span>Content: </span><input
                    placeholder='Content'
                    value={this.state.content}
                    onChange={e => this.handleContentInput(e.target.value)}/>
                <button>Post</button>
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