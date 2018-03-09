import React, { Component } from 'react';
const axios = require('axios');

class Home extends Component {

  //className = image2 was removed to make way for shakespeare text

  constructor(props) {
    super(props)
    this.state = {
      shakespeare: ''
    }
  }

  componentDidMount() {
    //save a reference to "this" because the value of 'this' will change
    //inside the different callback functions
    var base = this

    //the url for our api
    let poemApi = 'http://shakeitspeare.com/api/poem'

    //our fetch of that poemApi url, which was saved to a let variable
    //fetch() is a self-closing function. '.then' is called right after it finishes
    //we want to return JSON using the callback method
    // fetch(poemApi)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((farge) => {
    //     base.setState({ shakespeare: farge.poem })
    //   })
    //   .catch((error) => {
    //     console.log('an error occured when parsing!', error)
    //   })

    axios.get(poemApi)
    .then((response) => {
      base.setState({shakespeare: response.data.poem})
    })
    .catch((error) => {
      console.log('an error occured during json parse', error)
    })
  }

  //we can use our CRUD fuctionality with this
  // axios({
  //   method: 'GET',
  //   url: poemApi
  // })
  // .then((response) => {
  //   base.setState({shakespeare: response.data.poem})
  // })
  // .catch((error) => {
  //   console.log('an error occured during json parse', error)
  // })

  render() {


    if (this.state.shakespeare) {
      var poetry = this.state.shakespeare
    } else {
      var poetry = 'Loading ...'
    }
      return (
        <div className="container">
          <h1 className="header-text">An Otter's Life</h1>
          <p className="header-p">{poetry}</p>
          <img className="image" src="https://burst.shopifycdn.com/photos/green-meets-desert.jpg" />
        </div>
      )

  }
}

export default Home;
