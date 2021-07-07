import { renderHook } from '@testing-library/react-hooks';
import UseApiSearch from '../../hooks/UseApiSearch';

describe('Suit test hook UseApiSearch', () => {
  test('Should be return initial state values', async () => {
    const { result, waitForNextUpdate } = renderHook(() => UseApiSearch('Ipod'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('Should be return initial state values', async () => {
    const { result, waitForNextUpdate } = renderHook(() => UseApiSearch('Ipod'));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });
});
