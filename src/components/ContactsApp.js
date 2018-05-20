import React, { Component } from 'react';
import User from './User.js';
import SearchUser from './SearchUser.js';
import ContactDetail from './ContactDetail.js';

class ContactsApp extends Component {
  constructor(){
    super();
    this.state = {
      displayedUsers: [],
      selectedUser: null,

    }

  }

  componentWillReceiveProps(newProps) {
    this.setState({displayedUsers: newProps.items});
  }

  handleSearch(event){
    let CONTACTS = this.props.items;
    let inputValue = event.target.value;

    let iterate = function(obj, callback) {
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    iterate(obj[property], callback);
                } else {
                    callback(obj[property]);
                }
            }
        }
    }

    var foundInfo = [];

    var displayedUsers = CONTACTS.filter(el => {
      //console.log(el);
    let arr = [];

    iterate(el, function (e) {
         arr.push(e);
    });

    for (var i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase().indexOf(inputValue) !== -1){
          foundInfo = arr[i];
          return arr[i];
        }
      }
    });

   this.setState({displayedUsers: displayedUsers});

  }

  handleSelectedUser(user, color){
    this.setState({selectedUser: user}, function (){
    });
  }


  render() {

    let users;

    let selectElem = this.selectElement;

    if (this.state.displayedUsers) {
      users = this.state.displayedUsers.map(user => {

        console.log(user==this.state.selectedUser);

        return (
          <User
            key={user.contact.phone}
            user={user}
            color = {(user==this.state.selectedUser) ? 'LightSkyBlue ' : 'white'}
            selectUser={this.handleSelectedUser.bind(this)}
          />
        );
      });
    }


    return (
      <div>
        <div className="left-column">
          <div className="users">
              <SearchUser handleEvent= {this.handleSearch.bind(this)} />
              <ul className="usersList"> {users} </ul>
          </div>
        </div>
        <div className="right-column">
          <ContactDetail selectedUser={this.state.selectedUser} />
        </div>
      </div>
      );
    }
}

export default ContactsApp;
