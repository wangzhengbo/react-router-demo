import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from '../../components/Home';
import MessageList from '../../components/MessageList';
import Message from '../../components/Message';
import './index.less';

export default class App extends Component {
  static defaultProps = {
    history
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/messages" component={MessageList} />
          <Route path="/messages/:title" component={Message} />
        </div>
        <ul className="nav">
          <li>
            <NavLink exact to="/">首页</NavLink>
          </li>
          <li>
            <NavLink exact to="/messages">消息</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
