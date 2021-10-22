import React from 'react';
import './Card.css';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <button className="Card-button">delete</button>
        <h3 className="Card-title">this.props.title</h3>
        <p className="Card-content">this.props.content</p>
      </div>
    );
  }
}

export default Card;
