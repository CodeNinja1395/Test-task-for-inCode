import React, { Component } from 'react';
import UsersList from './components/UsersList.js';
import UserInfo from './components/UserInfo.js';
import axios from 'axios';
import './css/bootstrap.min.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
         items: [],
   }

  }

  componentWillMount(){
    axios.get('https://raw.githubusercontent.com/CodeNinja1395/InCode-test-project/master/clients.json')
     .then(res => {
         this.setState({ items: res.data });
    });
  }

  render() {
    return (
            <div className="App">
              <UsersList items={this.state.items} />
            </div>
    );
  }

}


export default App;
