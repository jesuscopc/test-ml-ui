import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('Suit test App', () => {
  let wrapper = shallow(<App />);
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('should be defined and render correctly', () => {
    expect(wrapper).toMatchInlineSnapshot(`<MlApp />`);
  });
});
