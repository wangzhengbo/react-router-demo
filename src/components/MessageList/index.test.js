import React from 'react';
import { MemoryRouter as Router, Link } from 'react-router-dom';
import { mount } from 'enzyme';
import MessageList from './index';
import store from '../../store';

describe('<MessageList />', () => {
  it(`should render three messages`, () => {
    const wrapper = mount(
      <Router>
        <MessageList match={{url: '/messages'}} />
      </Router>
    );

    const links = wrapper.find(Link);
    const messages = store.listMessages();
    expect(links.length).toBe(3);
    expect(links.length).toBe(messages.length);

    messages.forEach((message, index) => {
      const link = links.at(index);
      expect(link.text()).toBe(message.title);
      expect(link.prop('to')).toBe(`/messages/${message.title}`);
    });
  });
});
