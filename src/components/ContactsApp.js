import React, { Component } from 'react';
import User from './User.js';
import SearchUser from './SearchUser.js';
import ContactDetail from './ContactDetail.js';
import { connect } from 'react-redux';
import {fetchData} from '../actions/actions';
import '../css/style.css';

class ContactsApp extends Component {
  constructor(){
    super();
    this.state = {
      searchResults: [],
      displayedUsers: [],
      displayedInfo: [],
      selectedUser: null,
      searchValue: ''
    }

  }

  componentWillMount() {
    this.props.fetchData();
  }

  handleSearch(event){
    let CONTACTS = this.props.items;
    let inputValue = event.target.value;
    this.setState({searchValue: inputValue});
    let iterate = function(obj, callback) {
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                if (typeof obj[property] == "object") {
                    iterate(obj[property], callback);
                } else {
                    callback(obj[property]);
                }
            }
        }
    }

    let searchResults = [];

    CONTACTS.forEach(el => { //this finds all matches (except avatar)
      let arr = [];
      iterate(el, function (e) {
        if (e!=el.general.avatar)
           arr.push(e);
      });

      for (var i = 0; i < arr.length; i++) {
          if(arr[i].toLowerCase().indexOf(inputValue) !== -1){
            searchResults.push(el.foundValue = arr[i]);
          }
        }
    });

    var displayedUsers = CONTACTS.filter(el => { //this finds element by first match (except avatar)

      let arr = [];
      iterate(el, function (e) {
        if (e!=el.general.avatar)
           arr.push(e);
      });

      for (var i = 0; i < arr.length; i++) {
          if(arr[i].toLowerCase().indexOf(inputValue) !== -1){
            el.foundValue = arr[i];
            return arr[i];

          }
        }
    });

   this.setState({searchResults:  searchResults});
   this.setState({displayedUsers: displayedUsers});

  }

  handleSelectedUser(user, color){
    this.setState({selectedUser: user}, function (){
    });
  }


  render() {

    let users;

    // console.log(this.state.searchResults);
    //console.log(this.state.displayedUsers);

    let selectElem = this.selectElement;

    if (this.state.displayedUsers) {
      users = this.state.displayedUsers.map(user => {

        return (
          <User
            key={user.contact.phone}
            user={user}
            color={(user==this.state.selectedUser) ? 'LightSkyBlue ' : 'white'}
            selectUser={this.handleSelectedUser.bind(this)}
            searchValue={this.state.searchValue}
            searchResults={this.state.searchResults}
          />
        );
      });
    }


    return (
      <div>
        <div className="left-column">
          <div className="users">
              <SearchUser handleEvent= {this.handleSearch.bind(this)} />
              <ul className="usersList"> {users} </ul>
          </div>
        </div>
        <div className="right-column">
          <ContactDetail selectedUser={this.state.selectedUser} />
        </div>
      </div>
      );
    }
}

export default connect(null, {fetchData})(ContactsApp);
