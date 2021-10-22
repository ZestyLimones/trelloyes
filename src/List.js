import React from 'react';
import Card from './Card';

class List extends React.Component {
  render() {
    return (
      <section className="List">
        <header>this.props.header</header>
        <div className="List-cards">{Card}</div>
      </section>
    );
  }
}

export default List;
