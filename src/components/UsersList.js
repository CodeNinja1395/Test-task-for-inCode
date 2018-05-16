import React, { Component } from 'react';
import User from './User.js';
import SearchUser from './SearchUser.js';


class UsersList extends Component {
  constructor(){
    super();
    this.state = {
      displayedUsers: []
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

  render() {
    let users;
    if (this.state.displayedUsers) {
      users = this.state.displayedUsers.map(function (usr) {
        return (
          <User key={usr.contact.phone} user={usr} />
        );
      });
    }

    return (
      <div className="users">
        <SearchUser handleEvent={this.handleSearch.bind(this)}/>
        <ul className = "usersList">{users}</ul>
      </div>);
  }
}

export default UsersList;
