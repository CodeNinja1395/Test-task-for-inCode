import React, { Component } from 'react';

class ContactDetail extends Component {
  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({user: newProps.selectedUser})
  }

  render() {
    console.log(this.state.user);
    if(!this.props.selectedUser){
      console.log("nope");
      return null;
    }

    let selectedUser = this.state.user;

    return (
      <div className = "user-detail">
        <div className ="user-detail-img">
          <img src={selectedUser.general.avatar} alt=""/>
        </div>
        <div className = "user-detail-text">
          <h1>{selectedUser.general.firstName} {selectedUser.general.lastName}</h1>
          <h2>{selectedUser.job.title} - {selectedUser.job.company}</h2>
          <h4>email: {selectedUser.contact.email}</h4>
          <h4>phone: {selectedUser.contact.phone}</h4>
          <h4>address: {selectedUser.address.street}, {selectedUser.address.city} {selectedUser.address.zipcode}, {selectedUser.address.country}</h4>
        </div>
      </div>

    );






  }
}
export default ContactDetail;
