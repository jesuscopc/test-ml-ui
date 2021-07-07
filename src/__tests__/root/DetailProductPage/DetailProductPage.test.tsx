import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import DetailProductPage from 'root/DetailProductPage/DetailProductPage';
import UseApiProduct from '../../../hooks/UseApiProduct';

jest.mock('../../../hooks/UseApiProduct');
describe('Suit test DetailProductPage Page', () => {
  test('should be print data inside every field', () => {
    const dataUseProduct = {
      data: {
        title: 'IPod Touch',
        price: '3999',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, quis. Asperiores fugit quos, eaque natus possimus odio repellat sunt facilis odit et aperiam libero, explicabo facere? Possimus vel id amet.',
        image: 'http://imagefake.jpg',
        condition: 'new',
        soldQuantity: 230
      },
      loading: false
    };
    (UseApiProduct as jest.Mock).mockReturnValue(dataUseProduct);
    const wrapper = mount(
      <MemoryRouter>
        <DetailProductPage />
      </MemoryRouter>
    );
    const { data } = dataUseProduct;
    expect(wrapper.find('.buyCard__status').text()).toBe(
      `${data.condition} - ${data.soldQuantity} vendidos`
    );
    expect(wrapper.find('.buyCard__title').text()).toBe(data.title);
    expect(wrapper.find('.buyCard__price').text()).toBe(`$ ${data.price}`);
  });
});
