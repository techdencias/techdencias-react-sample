import React, { Component } from 'react';
import $ from 'jquery';

import style from './Card.css'; // eslint-disable-line no-unused-vars

class Card extends Component {

    constructor(props) {
      super(props);
      this.removeClick = this.removeClick.bind(this);
      this.state = { data: [] };
    }

    componentWillMount() {
      this.getDataFromAPI();
    }

    getDataFromAPI() {
      const component = this;
      $.get('https://api.github.com/users/' + this.props.login, (data) => {
        component.setState({ data: data });
      });
    }

    getUsername(data) {
      let usernameHtml = '';
      if (data.login !== null) {
        usernameHtml = (<div className="col s3">
                            <span className="valign-wrapper"><i className="material-icons">assignment_ind</i>&nbsp;{data.login}</span>
                        </div>);
      }
      return (usernameHtml);
    }

    getJob(data) {
      let jobHtml = '';
      if (data.company !== null) {
        jobHtml = (<div className="col s5">
                        <span className="valign-wrapper"><i className="material-icons">work</i>&nbsp;{data.company}</span>
                    </div>);
      }
      return (jobHtml);
    }

    getLocation(data) {
      let locationHtml = '';
      if (data.location !== null) {
        locationHtml = (<div className="col s4">
                            <span className="valign-wrapper"><i className="material-icons">location_on</i>&nbsp;{data.location}</span>
                        </div>);
      }
      return (locationHtml);
    }

    removeClick(e) {
      e.preventDefault();
      this.props.removeCard(this.props.login);
    }

    render() {
      const username = this.getUsername(this.state.data);
      const job = this.getJob(this.state.data);
      const location = this.getLocation(this.state.data);

      return (
        <li className="collection-item avatar">
            <img src={this.state.data.avatar_url} alt="profile image" className="circle" />
            <h5 className="title">{this.state.data.name}</h5>
            <div className="row">
                {username}
                {job}
                {location}
            </div>
            <div className="secondary-content">
                <a href="#" onClick={this.removeClick} alt="remove">
                    <i className="material-icons text-red">close</i>
                </a>
                <a href={this.state.data.html_url} target="_blank">
                    <i className="material-icons text-lighten-green">add</i>
                </a>
            </div>
            <div className="row">
                <div className="col s4">
                    <span>{this.state.data.followers}</span> <label>Followers</label>
                </div>
                <div className="col s4">
                    <span>{this.state.data.following}</span> <label>Following</label>
                </div>
                <div className="col s4">
                    <span>{this.state.data.public_repos}</span> <label>Repositories</label>
                </div>
            </div>
        </li>
      );
    }
}

Card.propTypes = { };
Card.defaultProps = { };

export default Card;
