import React, { Component } from 'react';
import User from './User.js';
import SearchUser from './SearchUser.js';
import ContactDetail from './ContactDetail.js';

class ContactsApp extends Component {
  constructor(){
    super();
    this.state = {
      displayedUsers: [],
      selectedUser: null
    }

  }

  componentWillReceiveProps(newProps) {
    this.setState({displayedUsers: newProps.items});
  }

  handleSearch(event){
    console.log(event.target.value);
    let CONTACTS = this.props.items;
    let inputValue = event.target.value;
    var displayedUsers = CONTACTS.filter(function (el) {
      let searchValue = el.general.firstName.toLowerCase();
      return searchValue.indexOf(inputValue) !== -1;
    });

    this.setState({displayedUsers: displayedUsers});
  }

  iterate(obj) {
    for (var property in obj) {
      if (obj.hasOwnProperty(property)) {
          if (typeof obj[property] == "object") {
              this.iterate(obj[property]);
          } else {
              return obj[property];
          }
      }
    }
  }
  handleSelectedUser(state){
    this.setState({selectedUser: state}, function (){
    });
  }

  render() {
    this.iterate(this.props);
    let users;

    let selectElem = this.selectElement;

    if (this.state.displayedUsers) {
      users = this.state.displayedUsers.map(usr => {
        return (
          <User  key={usr.contact.phone} user={usr} selectUser={this.handleSelectedUser.bind(this)}/>

        );
      });
    }

    // let selected;
    // if(this.state.selectedUser){
    //   selected = this.state.selectedUser;
    // }
    // else {
    //   selected = this.props.items[0];
    // }
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
