import React, { Component } from 'react';
import User from './User.js';


class UsersList extends Component {

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
        <ul className = "usersList">{users}</ul>
      </div>);

  }
}

export default UsersList;
