import React, { Component } from 'react';
import ContactsApp from './components/ContactsApp.js';
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
    axios.get('https://raw.githubusercontent.com/CodeNinja1395/Test-task-for-inCode/master/clients.json')
     .then(res => {
         this.setState({ items: res.data });
    });
  }

  render() {
    return (
            <div className="App">
              <ContactsApp items={this.state.items} />
            </div>
    );
  }

}


export default App;
