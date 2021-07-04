import React from 'react';
import { shallow } from 'enzyme';
import Routes from 'root/routes';

describe('Suit test Routes', () => {
  let wrapper = shallow(<Routes />);
  beforeEach(() => {
    wrapper = shallow(<Routes />);
  });

  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
