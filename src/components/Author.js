import React, {Component} from 'react';

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
