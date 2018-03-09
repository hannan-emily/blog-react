import React, {Component} from 'react';

class About extends Component {

  render() {
    return (
      <div className="body-container">
        <img className="image-body" src="https://tribwtic.files.wordpress.com/2015/12/sea-otter.jpg?quality=85&strip=all&w=1200" />
        <img className="image-body" src="http://2.bp.blogspot.com/-Wln0KLGo76M/VnFwEm8J_WI/AAAAAAAB1LI/zSdx9QOWM0w/s1600/Nellie.jpg" />

        <h1>Nellie, our favorite cup-stacking Otter</h1>

        <h2><a href="https://www.youtube.com/watch?v=wavh47RpLz4" target="_blank">Her Video That Broke the Internet</a></h2>

        <p className="body-container">In 2012, a video featuring a tiny otter and her stack of cups stole the Internet’s heart — and Nellie was its star.
        She was repeatedly handed three small cups to stack, and then given a treat each time she successfully completes the task.
        At one point, her trainer gives her the cups out of order, and Nellie adorably bangs them together in frustration.
        After the video came out, Nellie the otter quickly became the mascot for online rage; and GIFs of her side-eying her trainer circulated far and wide across the web.</p>
        <p>Source: hellogiggles.com</p>
      </div>
    )
  }
}

export default About;
