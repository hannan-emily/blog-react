import React, {Component} from 'react';
const axios = require('axios');

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      weather: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ zip: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zip + ',us&appid=052f26926ae9784c2d677ca7bc5dec98'

    axios({
      method: 'GET',
      url: weatherApi
      })
      .then((response) => {
        this.setState({
          weather: response.data.name,
        })
      }).catch((error) => {
        console.log(error)
      })
  }


  //   axios.get(weatherApi)
  //   .then((response) => {
  //     base.setState({ weatherHere: response.main.temp })
  //     console.log(response.main.temp);
  //   })
  //   .catch((error) => {
  //     console.log('an error occured during json parse', error)
  //   })
  // }



  render() {

    var weatherHere = this.state.weatheHere

    return (
      <div className="body-container">
        <img alt="" className="image-body" src="https://tribwtic.files.wordpress.com/2015/12/sea-otter.jpg?quality=85&strip=all&w=1200" />
        <img alt="" className="image-body" src="http://2.bp.blogspot.com/-Wln0KLGo76M/VnFwEm8J_WI/AAAAAAAB1LI/zSdx9QOWM0w/s1600/Nellie.jpg" />

        <h1>Nellie, our favorite cup-stacking Otter</h1>

        <h2><a href="https://www.youtube.com/watch?v=wavh47RpLz4" target="_blank">Her Video That Broke the Internet</a></h2>

        <p>The weather here is {this.state.weather}</p>

        <label>
          <p>Check your weather:</p>
          <input type="text" onChange={this.handleChange} placeholder="enter your zipcode" />
        </label>
        <input type="submit" onClick={this.handleSubmit} value="Get my forecast!" />

      </div>
    )
  }
}

export default About;
