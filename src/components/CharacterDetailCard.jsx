import React, { Component } from "react";

class CharacterDetailCard extends Component {
  render() {
    return (
      <div className="characters-detail-card bg-white">
        <img src={this.props.img} alt="img" />
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}
export default CharacterDetailCard;
