import React, {Component} from 'react';
import './App.css';

class Authors extends Component {

  render() {
    return (
      <div>
        <p>{this.props.allauthors}</p>
      </div>
    )
  }
}

export default Authors;
