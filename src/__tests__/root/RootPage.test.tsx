import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import RootPage from 'root/RootPage';

describe('Suit test RootPage Page', () => {
  let wrapper = shallow(<RootPage />);
  beforeEach(() => {
    wrapper = shallow(<RootPage />);
  });
  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be render correctly', () => {
    const wrap = mount(
      <BrowserRouter>
        <RootPage />
      </BrowserRouter>
    );
    expect(wrap.find('.container')).toBeTruthy();
  });
});
