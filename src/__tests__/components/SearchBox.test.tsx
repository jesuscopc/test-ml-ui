/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from '../../components/SearchBox/SearchBox';

describe('Suit Test SearchBox Component', () => {
  const handleSubmit = jest.fn();
  let wrapper = shallow(<SearchBox />);
  beforeEach(() => {
    wrapper = shallow(<SearchBox />);
  });

  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be change inputTextValue', () => {
    const input = wrapper.find('input');
    const value = 'CHange Text';
    input.simulate('change', { currentTarget: { value } });
    expect(wrapper.find('input').props().value).toBe(value);
  });

  test('should send fomaValue form', () => {
    const history = jest.fn();
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
