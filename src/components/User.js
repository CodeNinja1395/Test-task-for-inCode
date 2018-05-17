import React, { Component } from 'react';
import '../css/User.css';


class User extends Component {

  render() {
    let user = this.props.user;
    return (
      <li className="User">
        <img className="user-avatar" src={user.general.avatar} alt="" height="60px" width="60px"/>
        <div className="user-data">
          <div className="user-name">{user.general.firstName} {user.general.lastName}</div>
          <div className="user-phone">{user.contact.phone}</div>
        </div>

      </li>
    );
  }
}

export default User;
