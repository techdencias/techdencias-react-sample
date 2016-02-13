import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NotificationSystem from 'react-notification-system';

import style from './Form.css'; // eslint-disable-line no-unused-vars

class Form extends Component {

    constructor(props) {
      super(props);
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

    handleSubmit(e) {
      e.preventDefault();
      const loginInput = ReactDOM.findDOMNode(this.refs.login);

      if (loginInput.value === '') {
        // Empty field.
        this._addNotification('Empty field', 'error');
      } else if (this.props.logins.indexOf(loginInput.value) === 0) {
        // Username exist
        this._addNotification('User already exist', 'error');
      } else {
        this.props.addCard(loginInput.value);
        loginInput.value = '';
        this._addNotification('User added', 'success');
      }
    }

    render() {
      return (
            <div className="row">
                <form className="col s12"
                    onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="input-field col s11">
                            <input id="login" ref="login" type="text" className="validate" placeholder="Username" />
                        </div>
                        <div className="input-field col s1">
                            <button className="btn"><i className="material-icons">search</i></button>
                        </div>
                    </div>
                </form>
                <NotificationSystem ref="notificationSystem" />
            </div>
        );
    }
}

Form.propTypes = { addCard: React.PropTypes.func, logins: React.PropTypes.array };

export default Form;
