import React, { Component } from 'react';
import About from './About';
import Post from './Post';
import FavoriteFood from './FavoriteFood';
import FavoriteMovie from './FavoriteMovie';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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

class Home extends Component {



  render() {


    return(
      <Router>
        <div>
          <nav>
            <Link to='/'>Home</Link>{' '}
            <Link to='/Post'>Post</Link>{' '}
            <Link to='/FavoriteFood'>FavoriteFood</Link>{' '}
            <Link to='/FavoriteMovie'>FavoriteMovie</Link>{' '}
            <Link to='/About'>About</Link>{' '}
          </nav>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/Post' component={Post} />
            <Route path='/FavoriteFood' component={FavoriteFood} />
            <Route path='/FavoriteMovie' component={FavoriteMovie} />
            <Route path='/About' component={About} />
          </div>
        </div>
      </Router>
    )
  }
}


export default Home;
