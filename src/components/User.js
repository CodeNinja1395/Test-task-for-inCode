import React, { Component } from 'react';
import '../css/style.css';
import { selectContact } from '../actions/actions';
import { connect } from 'react-redux';
import SearchResult from './SearchResult';


class User extends Component {

  handleSelectUser(){
    this.props.selectContact(this.props.user);
  }
  render() {
    let user = this.props.user;
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
             <SearchResult 
               foundValue={user.foundValue}
               searchValue= {this.props.searchValue}
             />
          </div>
        </li>
      );
  }
}

const mapStateToProps = state => ({
  selectedUser: state.data.selectedUser,
  searchValue: state.data.searchValue
});

export default connect(mapStateToProps,{selectContact})(User);
