import React, { Component } from 'react';
import { connect } from 'react-redux';

class ContactDetail extends Component {
  render() {
    if(!this.props.selectedUser){
      return null;
    }

    let selectedUser = this.props.selectedUser;

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
const mapStateToProps = state => ({
  selectedUser: state.data.selectedUser
});

export default connect(mapStateToProps,{})(ContactDetail);
