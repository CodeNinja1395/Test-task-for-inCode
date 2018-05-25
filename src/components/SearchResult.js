import React, { Component } from 'react';
import '../css/style.css';

class SearchResult extends Component {

  getHighlightedText(text, higlight) {
    let parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span> { parts.map((part, i) =>
        <span key={i} style={part.toLowerCase() === higlight.toLowerCase() ? { fontWeight: 'bold', background: 'yellow'} : {} }>
            { part }
        </span>)
    } </span>;
  }
  render() {
    if (this.props.searchValue) {
      return (
            <div>
              <hr/>
              <div>
                  <h5>{this.getHighlightedText(this.props.foundValue, this.props.searchValue)}
                  </h5>
              </div>
            </div>

      );
    }
    return null;
  }
}



export default SearchResult;
