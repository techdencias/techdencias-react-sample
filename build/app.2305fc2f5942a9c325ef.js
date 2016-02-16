webpackJsonp([0],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),o=a(r),l=n(153),i=a(l),c=n(154),u=a(c);i["default"].render(o["default"].createElement(u["default"],null),document.body)},154:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=a(c),s=n(155),f=a(s),d=n(162),p=(a(d),n(166)),m=a(p),h=n(169),y=a(h),b=n(173),v=a(b),g=function(e){function t(e){r(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n._notificationSystem=null,n.state={logins:e.logins,currentLogin:e.currentLogin},n}return l(t,e),i(t,[{key:"componentDidMount",value:function(){this._notificationSystem=this.refs.notificationSystem}},{key:"_addNotification",value:function(e,t){this._notificationSystem.addNotification({message:e,level:t})}},{key:"addCard",value:function(e){""===e?this._addNotification("Empty field","error"):0===this.props.logins.indexOf(e)?this._addNotification("User already exist","error"):(this.setState({logins:this.state.logins.concat(e),currentLogin:e}),this._addNotification("User added","success"))}},{key:"removeCard",value:function(e){var t=this.state.logins.indexOf(e);this.state.logins.splice(t,1),this.setState({logins:this.state.logins}),this._addNotification("User removed","success")}},{key:"render",value:function(){var e=this,t="",n=this.state.logins.length>0;return n&&(t=u["default"].createElement("ul",{className:"collection"},this.state.logins.map(function(t){return u["default"].createElement(y["default"],{login:t,removeCard:e.removeCard.bind(e)})}))),u["default"].createElement("div",null,u["default"].createElement(v["default"],{currentLogin:this.state.currentLogin}),u["default"].createElement("div",{className:"container"},u["default"].createElement(m["default"],{addCard:this.addCard.bind(this),logins:this.state.logins}),u["default"].createElement("div",{className:"row"},u["default"].createElement("div",{className:"col s12"},t))),u["default"].createElement(f["default"],{ref:"notificationSystem"}))}}]),t}(c.Component);g.propTypes={logins:u["default"].PropTypes.array,addCard:u["default"].PropTypes.func,removeCard:u["default"].PropTypes.func,currentLogin:u["default"].PropTypes.string},g.defaultProps={logins:[],currentLogin:"World"},t["default"]=g},162:function(e,t){},166:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=a(c),s=n(153),f=a(s),d=n(167),p=(a(d),function(e){function t(e){return r(this,t),o(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),i(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=f["default"].findDOMNode(this.refs.login);this.props.addCard(t.value),t.value=""}},{key:"render",value:function(){return u["default"].createElement("div",{className:"row"},u["default"].createElement("form",{className:"col s12",onSubmit:this.handleSubmit.bind(this)},u["default"].createElement("div",{className:"row"},u["default"].createElement("div",{className:"input-field col s10"},u["default"].createElement("input",{id:"login",ref:"login",type:"text",className:"validate",placeholder:"Username"})),u["default"].createElement("div",{className:"input-field col s2"},u["default"].createElement("button",{className:"btn light-green accent-4"},u["default"].createElement("i",{className:"material-icons"},"search"))))))}}]),t}(c.Component));p.propTypes={},t["default"]=p},167:function(e,t){},169:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=a(c),s=n(170),f=a(s),d=n(171),p=(a(d),function(e){function t(e){r(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.removeClick=n.removeClick.bind(n),n.state={data:[]},n}return l(t,e),i(t,[{key:"componentWillMount",value:function(){this.getDataFromAPI()}},{key:"getDataFromAPI",value:function(){var e=this;f["default"].get("https://api.github.com/users/"+this.props.login,function(t){e.setState({data:t})})}},{key:"getUsername",value:function(e){var t="";return null!==e.login&&(t=u["default"].createElement("div",{className:"col s3"},u["default"].createElement("span",{className:"valign-wrapper"},u["default"].createElement("i",{className:"material-icons"},"assignment_ind")," ",e.login))),t}},{key:"getJob",value:function(e){var t="";return null!==e.company&&(t=u["default"].createElement("div",{className:"col s5"},u["default"].createElement("span",{className:"valign-wrapper"},u["default"].createElement("i",{className:"material-icons"},"work")," ",e.company))),t}},{key:"getLocation",value:function(e){var t="";return null!==e.location&&(t=u["default"].createElement("div",{className:"col s4"},u["default"].createElement("span",{className:"valign-wrapper"},u["default"].createElement("i",{className:"material-icons"},"location_on")," ",e.location))),t}},{key:"removeClick",value:function(e){e.preventDefault(),this.props.removeCard(this.props.login)}},{key:"render",value:function(){var e=this.getUsername(this.state.data),t=this.getJob(this.state.data),n=this.getLocation(this.state.data);return u["default"].createElement("li",{className:"collection-item avatar"},u["default"].createElement("img",{src:this.state.data.avatar_url,alt:"profile image",className:"circle"}),u["default"].createElement("h5",{className:"title"},this.state.data.name),u["default"].createElement("div",{className:"row"},e,t,n),u["default"].createElement("div",{className:"secondary-content"},u["default"].createElement("a",{href:"#",onClick:this.removeClick,alt:"remove"},u["default"].createElement("i",{className:"material-icons text-red"},"close")),u["default"].createElement("a",{href:this.state.data.html_url,target:"_blank"},u["default"].createElement("i",{className:"material-icons text-lighten-green"},"add"))),u["default"].createElement("div",{className:"row"},u["default"].createElement("div",{className:"col s4"},u["default"].createElement("span",null,this.state.data.followers)," ",u["default"].createElement("label",null,"Followers")),u["default"].createElement("div",{className:"col s4"},u["default"].createElement("span",null,this.state.data.following)," ",u["default"].createElement("label",null,"Following")),u["default"].createElement("div",{className:"col s4"},u["default"].createElement("span",null,this.state.data.public_repos)," ",u["default"].createElement("label",null,"Repositories"))))}}]),t}(c.Component));p.propTypes={},p.defaultProps={},t["default"]=p},171:function(e,t){},173:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=a(c),s=n(174),f=(a(s),n(176)),d=a(f),p=function(e){function t(e){return r(this,t),o(this,Object.getPrototypeOf(t).call(this,e))}return l(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("header",{className:"section"},u["default"].createElement("div",{className:"container"},u["default"].createElement(d["default"],{currentLogin:this.props.currentLogin}),u["default"].createElement("div",{className:"row"},u["default"].createElement("div",{className:"col s12"},u["default"].createElement("h1",{className:"header light-green-text text-accent-4 center-on-small-only center-align"},u["default"].createElement("i",{className:"fa fa-github"})," Ginder"),u["default"].createElement("h4",{className:"light light-green-text text-accent-4 center-on-small-only center-align"},"ReactJS App to find users on Github")))))}}]),t}(c.Component);t["default"]=p},174:function(e,t){},176:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=a(c),s=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u["default"].createElement("div",{className:"right-align"},"Hello ",this.props.currentLogin)}}]),t}(c.Component);s.propTypes={name:u["default"].PropTypes.string},s.defaultProps={name:""},t["default"]=s}});
//# sourceMappingURL=app.2305fc2f5942a9c325ef.js.map?