import React, {Component} from 'react';
import routes from './routes';
import Nav from './Components/Nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className='main'>
        <Nav/>
        {routes}
      </div>
    )
  }
}

export default App;
