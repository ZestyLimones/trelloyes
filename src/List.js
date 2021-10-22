import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
  render() {
    return (
      <section className="List">
        <header>this.props.header</header>
        <div className="List-cards">
          this.props.cards.map((card) =>{' '}
          {<Card key={Card.id} title={Card.title} content={Card.content} />})
          <button type="button" className="List-add-button">
            Add Random Card
          </button>
        </div>
      </section>
    );
  }
}

export default List;
