import React, { Component } from 'react';

class HelloWorld extends Component {
   render() {
      return (
        <div className="right-align">Hello {this.props.currentLogin}</div>
      );
   }
}

HelloWorld.propTypes = { name: React.PropTypes.string };
HelloWorld.defaultProps = { name: '' };

export default HelloWorld;
