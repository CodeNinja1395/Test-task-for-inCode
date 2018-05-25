import React, { Component } from 'react';
import ContactsApp from './components/ContactsApp.js';
import { Provider } from 'react-redux';
import store from './store';
import './css/bootstrap.min.css';

class App extends Component {

componentDidMount(){

}
  render() {
    return (
          <Provider store= {store}>
            <div className="App">
              <ContactsApp />
            </div>
          </Provider>
    );
  }

}


export default App;
