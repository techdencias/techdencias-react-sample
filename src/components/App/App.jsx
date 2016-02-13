import React, { Component } from 'react';

import style from './App.css'; // eslint-disable-line no-unused-vars
import Form from '../Form/Form.jsx';
import Card from '../Card/Card.jsx';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {logins: props.logins};
    }

    addCard(loginToAdd) {
      this.setState({ logins: this.state.logins.concat(loginToAdd) });
    }

    render() {
      let cards = '';
      const haveItems = this.state.logins.length > 0;

      if (haveItems) {
        cards = (<ul className="collection">
                    {this.state.logins.map((login) => { return (<Card login={login} />); })}
                </ul>);
      }

      return (
        <div className="container">
            <Form addCard={this.addCard.bind(this)} logins={this.state.logins} />
            <div className="row">
                {cards}
            </div>
        </div>
      );
    }
}

App.propTypes = { logins: React.PropTypes.array, addCard: React.PropTypes.func };
App.defaultProps = { logins: [] };

export default App;
