import React, { Component } from "react";
import "./heroImages.css";
class HeroImages extends Component {
  render() {
    return (
      <div className="hero-image">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImages;
