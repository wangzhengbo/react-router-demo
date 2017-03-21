import React from 'react';
import { MemoryRouter, NavLink, Link } from 'react-router-dom';
import { mount } from 'enzyme';
import App from './index';

function mountApp() {
  return mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
}

describe('<App />', () => {
  it('should render App with children', () => {
    const wrapper = mountApp();

    expect(wrapper.contains(<h1>首页</h1>)).toBe(true);
  });

  it(`should render App with nav`, () => {
    const wrapper = mountApp();

    const links = wrapper.find(NavLink);
    expect(links.length).toBe(2);
    expect(links.at(0).text()).toBe('首页');
    expect(links.at(0).prop('to')).toBe('/');
    expect(links.at(1).text()).toBe('消息');
    expect(links.at(1).prop('to')).toBe('/messages');
  });
});
