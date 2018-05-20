import React, { Component } from 'react';
import '../css/User.css';


class User extends Component {
  constructor(){
    super();
    this.state = {
      user: {}

    }
  }

  componentWillMount(){
    this.setState({user: this.props.user});
  }

  handleSelectUser(){
    this.props.selectUser(this.state.user);

  }


  render() {
    console.log(this.props);
    let user = this.props.user;

    if (user) {
      return (
        <li style={{background: this.props.color}} className="User" onClick= {this.handleSelectUser.bind(this)}>
            <img className="user-avatar" src={user.general.avatar} alt="" height="60px" width="60px"/>
            <div className="user-data">
            <div className="user-name">{user.general.firstName} {user.general.lastName}</div>
            <div className="user-phone">{user.contact.phone}</div>
          </div>
        </li>
      );
    }
  }
}

export default User;
