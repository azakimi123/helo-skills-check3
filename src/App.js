import React, {Component} from 'react';
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Auth/>
        <Dashboard/>
        <Form/>
        <Nav/>
        <Post/>
      </div>
    )
  }
}

export default App;
