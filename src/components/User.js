import React, { Component } from 'react';
import '../css/style.css';
import { selectContact } from '../actions/actions';
import { connect } from 'react-redux';


class User extends Component {

  handleSelectUser(){
    this.props.selectContact(this.props.user);
  }

  getHighlightedText(text, higlight) {
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span> { parts.map((part, i) =>
        <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold', background: 'yellow'} : {} }>
            { part }
        </span>)
    } </span>;
  }
  render() {
    console.log(this.props);
    let user = this.props.user;
    if (this.props.searchValue) {
      return (
        <li
          style={{background: this.props.color}}
          className="User"
          onClick= {this.handleSelectUser.bind(this)}>
          <img
            className="user-avatar" src={user.general.avatar}
            alt=""
            height="60px"
            width="60px"/>
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

const mapStateToProps = state => ({
  selectedUser: state.data.selectedUser,
  searchValue: state.data.searchValue
});

export default connect(mapStateToProps,{selectContact})(User);
