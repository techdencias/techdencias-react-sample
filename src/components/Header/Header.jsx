import React, { Component } from 'react';

import style from './Header.css'; // eslint-disable-line no-unused-vars

import HelloWorld from '../HelloWorld/HelloWorld.jsx';

class Header extends Component {
   constructor(props) {
     super(props);
   }

   render() {
     return (
        <header className="section">
            <div className="container">
                <HelloWorld currentLogin={this.props.currentLogin} />
                <div className="row">
                    <div className="col s12">
                        <h1 className="header light-green-text text-accent-4 center-on-small-only center-align"><i className="fa fa-github"></i> Ginder</h1>
                        <h4 className="light light-green-text text-accent-4 center-on-small-only center-align">ReactJS App to find users on Github</h4>
                    </div>
                </div>
            </div>
        </header>
     );
   }
}

export default Header;
