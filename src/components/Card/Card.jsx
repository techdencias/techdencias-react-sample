import React, { Component } from 'react';
import $ from 'jquery';

import style from './Card.css'; // eslint-disable-line no-unused-vars

class Card extends Component {

    constructor(props) {
      super(props);
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
      // .fail((error) => {
        // const err = error;
        // alert(err.status + ' - ' + err.statusText);
      // });
    }

    getUsername(data) {
      let usernameHtml = '';
      if (data.login !== null) {
        usernameHtml = (<div className="col s3">
                            <span className="valign-wrapper"><i className="material-icons">assignment_ind</i> {data.login}</span>
                        </div>);
      }
      return (usernameHtml);
    }

    getJob(data) {
      let jobHtml = '';
      if (data.company !== null) {
        jobHtml = (<div className="col s5">
                        <span className="valign-wrapper"><i className="material-icons">work</i> {data.company}</span>
                    </div>);
      }
      return (jobHtml);
    }

    getLocation(data) {
      let locationHtml = '';
      if (data.location !== null) {
        locationHtml = (<div className="col s4">
                            <span className="valign-wrapper"><i className="material-icons">location_on</i> {data.location}</span>
                        </div>);
      }
      return (locationHtml);
    }

    render() {
      const username = this.getUsername(this.state.data);
      const job = this.getJob(this.state.data);
      const location = this.getLocation(this.state.data);

      return (
        <li className="collection-item avatar">
            <img src={this.state.data.avatar_url} alt="profile image" className="circle" />
            <span className="title">{this.state.data.name}</span><br /><br />
            <div className="row">
                {username}
                {job}
                {location}
            </div>
            <a href={this.state.data.html_url} className="secondary-content" target="_blank"><i className="material-icons">more_vert</i></a>
            <div className="row">
                <div className="col s4">
                    <span>{this.state.data.followers}</span> <label>Followers</label>
                </div>
                <div className="col s4">
                    <span>{this.state.data.following}</span> <label>Following</label>
                </div>
                <div className="col s4">
                    <span>{this.state.data.public_repos}</span> <label>Rrepositories</label>
                </div>
            </div>
        </li>
      );
    }
}

Card.propTypes = { login: React.PropTypes.string };
Card.defaultProps = { login: '' };

export default Card;
