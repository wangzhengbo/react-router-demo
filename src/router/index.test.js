import React from 'react';
import { MemoryRouter as Router, NavLink, Link } from 'react-router-dom';
import { mount } from 'enzyme';
import App from '../container/App';

function mountApp() {
  return mount(
    <Router>
      <App />
    </Router>
  );
}

function clickLink(link) {
  link.simulate('click', {
    button: 0
  });
}

function getClassNames(wrapper) {
  return (wrapper.getNode().className || '').split(' ');
}

function expectHasClassName(wrapper, className) {
  expect(getClassNames(wrapper)).toContain(className);
}

function expectNotHasClassName(wrapper, className) {
  expect(getClassNames(wrapper)).not.toContain(className);
}

function gotoHome(wrapper) {
  const links = wrapper.find('.container .nav li a');
  expect(links.length).toBe(2);
  expect(links.at(0).text()).toBe('首页');
  clickLink(links.at(0));
}

describe.only('<AppRouter />', () => {
  it('should render AppRouter', () => {
    const wrapper = mountApp();

    expect(wrapper.find('.container .content').text()).toBe('首页');

    const links = wrapper.find('.container .nav li a');
    expect(links.length).toBe(2);
    expect(links.at(0).text()).toBe('首页');
    expectHasClassName(links.at(0), 'active');

    let messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expectNotHasClassName(messagesLink, 'active');
  });

  it('should navigate to messages page when click message link', () => {
    const wrapper = mountApp();

    let links = wrapper.find(Link);
    expect(links.length).toBe(2);
    let messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expect(messagesLink.find('a').getNode().className).not.toBe('active');
    clickLink(messagesLink);

    links = wrapper.find('.container .nav li a');
    expect(links.length).toBe(2);

    // home link is not active now
    expect(links.at(0).text()).toBe('首页');
    expectNotHasClassName(links.at(0), 'active');
    // messages link is active now
    messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expectHasClassName(messagesLink, 'active');

    const messageItemLinks = wrapper.find('.container .content').find(Link);
    expect(messageItemLinks.length).toBe(3);
  });

  it('should navigate to message detail page when click message item link', () => {
    const wrapper = mountApp();
    gotoHome(wrapper);

    let links = wrapper.find(Link);
    expect(links.length).toBe(2);
    let messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expect(messagesLink.find('a').getNode().className).not.toBe('active');
    clickLink(messagesLink);

    links = wrapper.find('.container .nav li a');
    expect(links.length).toBe(2);
    // home link is not active now
    expect(links.at(0).text()).toBe('首页');
    expectNotHasClassName(links.at(0), 'active');
    // messages link is active now
    messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expectHasClassName(messagesLink, 'active');

    const messageItemLinks = wrapper.find('.container .content').find(Link);
    expect(messageItemLinks.length).toBe(3);
    clickLink(messageItemLinks.at(0));

    links = wrapper.find('.container .nav li a');
    expect(links.length).toBe(2);
    // home link is not active now
    expect(links.at(0).text()).toBe('首页');
    expectNotHasClassName(links.at(0), 'active');
    // messages link is not active now
    messagesLink = links.at(1);
    expect(messagesLink.text()).toBe('消息');
    expectNotHasClassName(messagesLink, 'active');

    expect(wrapper.find('.container .content h1').text()).toBe('zhufeng');
    expect(wrapper.find('.container .content p').text()).toBe('zhufeng react');
  });
});
