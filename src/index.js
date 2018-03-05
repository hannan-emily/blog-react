import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: 'Dinosaurs Are Extra-Awesome',

  body: 'Boy, was Ragnor vicious!',
  authors: [
    "Finnegan Swarty",
    "Andoliza Swanson",
    "Marcule De Fin"
  ],
  comments: [
    'Ragnor loved raspberry and blueberry tarts.',
    'He did not care for lemon pie.',
    'What a guy ... said everyone.',
    "There once was a dinosaur who liked tarts. Ragnor said, See the master of arts! It was rather apple, But not very appel, And he could not resist the ace of hearts."
  ]
}


ReactDOM.render
  (<Post
  title={post.title}

  body={post.body}
  comments={post.comments}
  authors={post.authors}
  />, document.getElementById('root'));
registerServiceWorker();
