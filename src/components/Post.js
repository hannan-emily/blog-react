import React, { Component } from 'react';

import Comment from './Comment';
import Author from './Author';

class Post extends Component {

  constructor(props) {
      super(props)
      this.state = {
        body: props.body
      }
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      body: e.target.value
    })
  }

  render() {

    const {title, author, body, comments, authors } = this.props

    let allComments = [
      <Comment ragnor={comments[0]}/>,
      <Comment ragnor={comments[1]}/>,
      <Comment ragnor={comments[2]}/>,
      <Comment ragnor={comments[3]}/>
    ]

    let allAuthors = [
      <Author allauthors={authors[0]}/>,
      <Author allauthors={authors[1]}/>,
      <Author allauthors ={authors[2]}/>
    ]

    return (
      <div className="Post">
        <img alt="" className="image3" src="https://images.pexels.com/photos/461769/pexels-photo-461769.jpeg" />

        <header class="body-text">
          <h1>{title}</h1>
          <h4>Written by:</h4>
          {allAuthors}

        </header>

        <h2>{this.state.body}</h2>

        <input type='text' value={this.state.value} onChange={this.handleChange} />

        <h3>Comments:</h3>
        {allComments}



      </div>
    );
  }
}

export default Post;
