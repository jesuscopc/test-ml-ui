import React from 'react';
import { shallow } from 'enzyme';
import MlApp from 'root/MlApp';

describe('Suit test MlApp', () => {
  let wrapper = shallow(<MlApp />);
  beforeEach(() => {
    wrapper = shallow(<MlApp />);
  });
  test('should be defined MLApp', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
