import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Post from './Post';
import FavoriteFood from './FavoriteFood';
import FavoriteMovie from './FavoriteMovie';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var post = {
  title: 'Dinosaurs Are Extra-Awesome',

  author: 'boaty mcboatface',
  body: 'Boy, was Ragnorn vicious!',
  authors: [
    "Finnegan Swarty",
    "Andoliza Swanson",
    "Marcule De Fin"
  ],
  comments: [
    'Ragnor loved raspberry and blueberry tarts.',
    'He did not care for mince meat pie.',
    'What a guy ... said everyone.',
    "There once was a dinosaur who liked tarts. Ragnor said, See the master of arts! It was rather apple, But not very appel, And he could not resist the ace of hearts."
  ]
}

class App extends Component {

  render() {
    return(
      <Router>
        <div>
          <nav className="nav">
            <Link class-="link" to='/'>Home</Link>{' '}
            <Link class-="link" to='/about'>About</Link>{' '}
            <Link class-="link" to='/post'>Blog</Link>{' '}
            <Link class-="link" to='/favoritefood'>Favorite Food</Link>{' '}
            <Link class-="link" to='/favoritemovie'>Favorite Movie</Link>{' '}
          </nav>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/post' component={() =>(<Post title={post.title}
            author={post.author}
            body={post.body}
            comments={post.comments}
            authors={post.authors}/>)} />
          <Route path='/favoritefood' component={FavoriteFood} />
          <Route path='/favoritemovie' component={FavoriteMovie} />
        </div>
      </Router>
    )
  }
}


export default App;
