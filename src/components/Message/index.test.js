import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import Message from './index';

function mountMessage(title) {
  return mount(
    <Router>
      <Message match={{params: {title}}} />
    </Router>
  );
}

describe('<Message />', () => {
  it('should render message by message title', () => {
    const wrapper = mountMessage('react');

    const h1 = wrapper.find('h1');
    expect(h1.length).toBe(1);
    expect(h1.text()).toBe('react');

    const p = wrapper.find('p');
    expect(p.length).toBe(1);
    expect(p.text()).toBe('npm install react --save-dev');
  });

  it('should not render message when message not exists', () => {
    const wrapper = mountMessage('notExistsMessage');

    const h1 = wrapper.find('h1');
    expect(h1.length).toBe(0);
    const p = wrapper.find('p');
    expect(p.length).toBe(0);
  });
});
