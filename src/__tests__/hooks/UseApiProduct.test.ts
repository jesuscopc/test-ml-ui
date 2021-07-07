import { renderHook } from '@testing-library/react-hooks';
import UseApiProduct from '../../hooks/UseApiProduct';

describe('Suit test hook UseApiProduct', () => {
  test('Should be return initial state values', async () => {
    const { result, waitForNextUpdate } = renderHook(() => UseApiProduct('Ipod'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual({
      condition: '',
      description: '',
      image: '',
      price: '',
      soldQuantity: 0,
      title: ''
    });
    expect(loading).toBeTruthy();
  });

  test('Should be return initial state values', async () => {
    const { result, waitForNextUpdate } = renderHook(() => UseApiProduct('Ipod'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual({
      condition: '',
      description: '',
      image: '',
      price: '',
      soldQuantity: 0,
      title: ''
    });
    expect(loading).toBeTruthy();
  });
});
