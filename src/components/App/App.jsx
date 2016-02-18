import React, { Component, PropTypes } from 'react';
import NotificationSystem from 'react-notification-system';

import style from './App.css'; // eslint-disable-line no-unused-vars
import Form from '../Form/Form.jsx';
import Card from '../Card/Card.jsx';
import Header from '../Header/Header.jsx';

class App extends Component {

    constructor(props) {
      super(props);
      this.addCard = this.addCard.bind(this);
      this.removeCard = this.removeCard.bind(this);
      this.state = { logins: props.logins, currentLogin: props.currentLogin };
    }

    componentDidMount() {
      this._notificationSystem = this.refs.notificationSystem;
    }

    _notificationSystem = null;

    _addNotification(message, level) {
      this._notificationSystem.addNotification({
        message: message,
        level: level,
      });
    }

    addCard(loginToAdd) {
      const { logins } = this.props;
      // Validations
      if (loginToAdd === '') { // Empty field.
        this._addNotification('Empty field', 'error');
      } else if (logins.indexOf(loginToAdd) === 0) { // Username exist
        this._addNotification('User already exist', 'error');
      } else { // Validation passed.
        this.setState({ logins: this.state.logins.concat(loginToAdd), currentLogin: loginToAdd });
        this._addNotification('User added', 'success');
      }
    }

    removeCard(loginToRemove) {
      const pos = this.state.logins.indexOf(loginToRemove); // Get position of item to remove.
      this.state.logins.splice(pos, 1); // remove from current list.
      this.setState({ logins: this.state.logins }); // Update current status

      this._addNotification('User removed', 'success'); // Notification
    }

    render() {
      let cards = '';
      const haveItems = this.state.logins.length > 0;

      if (haveItems) {
        cards = (<ul className="collection">
                    {this.state.logins.map((login) => { return (<Card key={login.key} login={login} removeCard={this.removeCard} />); })}
                </ul>);
      }

      return (
        <div>
            <Header currentLogin={this.state.currentLogin} />
            <div className="container">
                <Form addCard={this.addCard} logins={this.state.logins} />
                <div className="row">
                    <div className="col s12">
                        {cards}
                    </div>
                </div>
            </div>
            <NotificationSystem ref="notificationSystem" />
        </div>
      );
    }
}

App.defaultProps = {
  logins: [],
  currentLogin: 'World',
};

App.propTypes = {
  logins: PropTypes.array,
  addCard: PropTypes.func,
  removeCard: PropTypes.func,
  currentLogin: PropTypes.string,
};

export default App;
