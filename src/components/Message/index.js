import React, { Component, Children, PropTypes } from 'react';
import MessagePropTypes from './propTypes';
import store from '../../store';

export default class Message extends Component {
  static propTypes = {
    data: MessagePropTypes
  }

  render() {
    const message = store.getMessage(this.props.match.params.title);
    if (!message) {
      return null;
    }

    const { title, content } = message;

    return (
      <div>
          <h1>{title}</h1>
          <p>{content}</p>
      </div>
    );
  }
}
