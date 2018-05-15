import React, { Component } from 'react';
import User from './User.js';


class UsersList extends Component {

  render() {
    let users;
    if (this.props.items) {
      users = this.props.items.map(function (usr) {
        console.log(usr);
        return (
          <User key={usr} user={usr} />
        );
      });
    }
    return (<div className="UsersList">
    {users}
    </div>);

  }
}

export default UsersList;
