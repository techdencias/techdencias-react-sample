import React, { Component, PropTypes } from 'react';

import style from './HelloWorld.css'; // eslint-disable-line no-unused-vars

class HelloWorld extends Component {

   render() {
     const { currentLogin } = this.props;
     return (
       <div className="right-align">Hello {currentLogin}</div>
     );
   }
}

HelloWorld.propTypes = { currentLogin: PropTypes.string };
HelloWorld.defaultProps = { currentLogin: '' };

export default HelloWorld;
