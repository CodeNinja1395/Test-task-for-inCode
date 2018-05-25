import React, { Component } from 'react';
import User from './User.js';
import SearchUser from './SearchUser.js';
import ContactDetail from './ContactDetail.js';
import { connect } from 'react-redux';
import {searchFilter, fetchData} from '../actions/actions';
import {filterUsers} from '../reducers/contactsAppReducer';
import '../css/style.css';

class ContactsApp extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  handleSearch(event){
    this.props.searchFilter(event.target.value, this.props.users);

  }


  render() {
    let users;
    let selectElem = this.selectElement;

    if (this.props.displayedUsers) {
      users = this.props.displayedUsers.map(user => {

        return (
          <User
            key={user.contact.phone}
            user={user}
            color={(user==this.props.selectedUser) ? 'LightSkyBlue ' : 'white'}
          />
        );
      });
    }


    return (
      <div>
        <div className="left-column">
          <div className="users">
              <SearchUser handleEvent={this.handleSearch.bind(this)} />
              <ul className="usersList"> {users} </ul>
          </div>
        </div>
        <div className="right-column">
          <ContactDetail/>
        </div>
      </div>
      );
    }
}

const mapStateToProps = state => ({
  users: state.data.users,
  displayedUsers: filterUsers(state),
  selectedUser: state.data.selectedUser
});

export default connect(mapStateToProps, {fetchData, searchFilter})(ContactsApp);
