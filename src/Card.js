import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <h3 className="Card-title">this.props.title</h3>
        <p className="Card-content">this.props.content</p>
      </div>
    );
  }
}

export default Card;
