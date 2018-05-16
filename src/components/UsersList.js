import React, { Component } from 'react';
import User from './User.js';
import SearchUser from './SearchUser.js';


class UsersList extends Component {
  handleEvent(event){
    console.log(event.target.value);
  }

  getInitial

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
        <SearchUser handleEvent={this.handleEvent}/>
        <ul className = "usersList">{users}</ul>
      </div>);

  }
}

export default UsersList;
