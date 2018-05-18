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
      <div class = "user-detail">
        <div class ="user-detail-main">
          <img src={selectedUser.general.avatar} alt=""/>
        </div>
        <div>
          <h1>{selectedUser.general.firstName} {selectUser.general.lastName}</h1>
          <h2>{selectedUser.job.title} {selectUser.job.company}</h2>
        </div>


      </div>

    );






  }
}
export default ContactDetail;
