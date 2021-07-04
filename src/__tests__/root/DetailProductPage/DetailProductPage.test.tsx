import React from 'react';
import { mount } from 'enzyme';
import DetailProductPage from 'root/DetailProductPage/DetailProductPage';

describe('Suit test DetailProductPage Page', () => {
  let wrapper = mount(<DetailProductPage />);
  beforeEach(() => {
    wrapper = mount(<DetailProductPage />);
  });

  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
