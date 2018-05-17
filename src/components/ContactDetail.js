import React, { Component } from 'react';

class ContactDetail extends Component {
  constructor(){
    super();
    this.state = {
      user: {}
    };
  }
  componentWillMount(){
    this.setState({user: this.props.selectedUser});
  }

  handleClickEvent(){
    this.setState({user: this.props.selectedUser},
      function () {
        console.log(this.state);
      this.props.someInfo(this.state.user);
    });
  } //test function

  render() {
    if(!this.props.selectedUser){
      return null;
    }

    else {
      let user = this.props.selectedUser;

      return (
        <div className="user-info">
          <img className="detail-image" onClick={this.handleClickEvent.bind(this)} src={user.general.avatar} alt=""/>
          <h1>{user.general.firstName} {user.general.lastName}</h1>
          <h2>{user.job.title} - {user.job.company}</h2>
        </div>
      )
    }

  }



}
export default ContactDetail;
