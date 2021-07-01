import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="characters-card">
        <img src={this.props.img} alt="img" />
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
export default Card;
