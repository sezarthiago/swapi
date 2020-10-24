import axios from 'axios';
import AxiosHttpClient from './AxiosHttpClient';

jest.mock('axios');

describe('AxiosHttpClient', () => {
  test('should call axios with params', () => {
    const sut = new AxiosHttpClient();
    const params = { url: 'url' };
    sut.get(params);
    expect(axios.get).toBeCalledWith(params.url);
  });
});
