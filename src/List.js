import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
  render() {
    return (
      <section className="List">
        <header>this.props.header</header>
        <div className="List-cards"></div>
      </section>
    );
  }
}

export default List;
