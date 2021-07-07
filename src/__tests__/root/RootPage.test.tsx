import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RootPage from '../../root/RootPage';
import UseApiSearch from '../../hooks/UseApiSearch';

jest.mock('../../hooks/UseApiSearch');

describe('Suit test RootPage Page', () => {
  test('should be render productCards correctly', () => {
    (UseApiSearch as jest.Mock).mockReturnValue({
      data: [
        {
          title: 'ipod'
        },
        {
          title: 'IPod hearphones'
        }
      ],
      loading: false
    });
    const wrapper = mount(
      <MemoryRouter>
        <RootPage />
      </MemoryRouter>
    );
    expect(wrapper.find('.cardProduct')).toBeTruthy();
    expect(wrapper.find('.container')).toBeTruthy();
  });
});
