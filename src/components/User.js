import React, { Component } from 'react';
import '../css/style.css';


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

  getHighlightedText(text, higlight) {
    let searchIndex = text.toLowerCase().indexOf(higlight);


    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span> { parts.map((part, i) =>
        <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold', color: 'yellow'} : {} }>
            { part }
        </span>)
    } </span>;
  }
  render() {
    let user = this.props.user;
  //  console.log(this.props.searchResults);

    if (this.props.searchValue) {
      return (
        <li style={{background: this.props.color}} className="User" onClick= {this.handleSelectUser.bind(this)}>
          <img className="user-avatar" src={user.general.avatar} alt="" height="60px" width="60px"/>
          <div className="user-data">
             <div className="user-name">{user.general.firstName} {user.general.lastName}</div>
             <div className="user-job">{user.job.title} <br/> {user.job.company}</div>
             <hr/>
             <div> <h5>{this.getHighlightedText(user.foundValue, this.props.searchValue)}</h5></div>
          </div>

        </li>
    );
    }
    else {
      return (
        <li style={{background: this.props.color}} className="User" onClick= {this.handleSelectUser.bind(this)}>
            <img className="user-avatar" src={user.general.avatar} alt="" height="60px" width="60px"/>
            <div className="user-data">
               <div className="user-name">{user.general.firstName} {user.general.lastName}</div>
               <div className="user-job">{user.job.title} <br/>{user.job.company}</div>
            </div>
        </li>
      );
    }
  }
}

export default User;
