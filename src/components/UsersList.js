import React, { Component } from 'react';
import User from './User.js';
import SearchUser from './SearchUser.js';


class UsersList extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    // this.state = this;

  }

  handleSearch(event){
    let CONTACTS = this.props.items;
    let inputValue = event.target.value;
    var userList = CONTACTS.filter(function (el) {
      let searchValue = el.general.firstName;
      return searchValue.indexOf(inputValue) !== -1;
    });
    console.log(userList);
    return userList;
  }

  render() {
    let users;
    if (this.props.items) {
      users = this.props.items.map(function (usr) {
        return (
          <User key={usr.contact.phone} user={usr} />
        );
      });
    }

    return (
      <div className="users">
        <SearchUser handleEvent={this.handleSearch}/>
        <ul className = "usersList">{users}</ul>
      </div>);
  }
}

export default UsersList;
