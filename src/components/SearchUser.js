import React, { Component } from 'react';

class SearchUser extends Component {

  render() {
      return (
        <form action="">
        <input type="text" ref="title" className="search-user" onChange={this.props.handleEvent}/>
        </form>

      )
  }

}

export default SearchUser
