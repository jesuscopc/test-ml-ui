import API from 'constants/Api';
import { SendRequest } from '../../utils/Http.util';

const fetchMock = require('fetch-mock-jest');

global.fetch = jest.fn();
// const fetch = fetchMock.sandBox();

describe('Suit test Http utils', () => {
  afterEach(() => {
    fetchMock.restore();
    fetchMock.reset();
  });
  test('should be defined', () => {
    expect(SendRequest).toBeDefined();
  });

  test('send request an get Data', async () => {
    const products = ['Iphone', 'Mac', 'IPad', 'Ipod Touch'];
    fetchMock.mock({
      name: 'route',
      matcher: `${API.SEARCH}?q=Ipod`,
      method: 'GET',
      credentials: 'same-origin',
      response: {
        status: 200,
        body: products
      }
    });
    const response = await SendRequest(`${API.SEARCH}?q=Ipod`);
    expect(response.success).toBeTruthy();
    expect(response.data).toEqual(products);
  });

  test('send request an get zero Data', async () => {
    fetchMock.mock({
      name: 'route',
      matcher: `${API.SEARCH}?q=,,,.-.,.-`,
      method: 'GET',
      credentials: 'same-origin',
      response: {
        status: 500,
        body: []
      }
    });
    const result = await SendRequest(`${API.SEARCH}?q=,,,.-.,.-`);
    expect(result.data).toBe(null);
  });
});
