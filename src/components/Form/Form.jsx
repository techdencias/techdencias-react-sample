import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import style from './Form.css'; // eslint-disable-line no-unused-vars

class Form extends Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault();
      const loginInput = ReactDOM.findDOMNode(this.refs.login); // Find input at DOM
      const { addCard } = this.props;
      if (typeof addCard === 'function') {
        addCard(loginInput.value);
        loginInput.value = '';
      }
    }

    render() {
      return (
        <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s10">
                        <input id="login" ref="login" type="text" className="validate" placeholder="Username" />
                    </div>
                    <div className="input-field col s2">
                        <button className="btn light-green accent-4"><i className="material-icons">search</i></button>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}

Form.defaultProps = { };

Form.propTypes = {
  addCard: PropTypes.func,
};


export default Form;
