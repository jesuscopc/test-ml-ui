import React from 'react';
import { shallow } from 'enzyme';
import CardProduct from 'components/CardProduct/CardProduct';

describe('Suit test CardProduct Component', () => {
  let wrapper = shallow(<CardProduct />);
  beforeEach(() => {
    wrapper = shallow(<CardProduct />);
  });
  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
