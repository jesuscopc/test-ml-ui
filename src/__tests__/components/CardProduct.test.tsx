import React from 'react';
import { shallow } from 'enzyme';
import CardProduct from 'components/CardProduct/CardProduct';
import { TProduct } from 'hooks/UseApiSearch';

describe('Suit test CardProduct Component', () => {
  const propsItem: TProduct = {
    id: 'MLDSHJK98',
    title: 'iPOD tOUCH',
    price: '19.9990',
    thumbnail: 'image.png',
    address: 'Distrito federal'
  };
  let wrapper = shallow(<CardProduct {...propsItem} />);
  beforeEach(() => {
    wrapper = shallow(<CardProduct {...propsItem} />);
  });
  test('should be render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should be render Title product', () => {
    expect(wrapper.find('.cardProduct__info__description').text()).toBe(propsItem.title);
  });
});
