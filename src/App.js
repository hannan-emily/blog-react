import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';
import Author from './Author';

class Post extends Component {
  render() {

    const {title, author, body, comments, authors} = this.props

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
        <header>
          <h1>{title}</h1>
          <h4>Written by:</h4>
          {allAuthors}

        </header>

        <h2>{body}</h2>
        <h3>Comments:</h3>
        {allComments}

      </div>
    );
  }
}

export default Post;
