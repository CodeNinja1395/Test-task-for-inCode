import React, { Component } from 'react';
//import Projects from './components/Projects.js';


class User extends Component {

  render() {
    let user = this.props.user;
    console.log(user);
    return (
      <li className="User">
        <img src={user.general.avatar} className ="userAvatar" alt="" height="60px" width="60px"/>
        <div>{user.general.firstName} {user.general.lastName}</div>

      </li>
    );
  }
}

export default User;
