import React, { Component, PropTypes } from 'react';

import style from './CardList.css'; // eslint-disable-line no-unused-vars

import CardItem from '../CardItem/CardItem.jsx';

class CardList extends Component {

    renderCardItem(login, handle) {
      return (<CardItem key={login} login={login} removeCard={handle} />);
    }

    render() {
      const { logins, removeCard } = (this.props);
      const cards = logins.map((login) => { return (this.renderCardItem(login, removeCard)); } );

      return (
        <ul className="collection">
            { cards }
        </ul>
      );
    }
}

CardList.defaultProps = { };

CardList.propTypes = {
  logins: PropTypes.array,
  removeCard: PropTypes.func,
};


export default CardList;
