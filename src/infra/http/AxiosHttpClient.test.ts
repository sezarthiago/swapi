import axios from 'axios';
import { mockAxios } from '../test/mockAxios';
import AxiosHttpClient from './AxiosHttpClient';

jest.mock('axios');

function makeSut() {
  const sut = new AxiosHttpClient();
  return { sut, mockedAxios: mockAxios() };
}

describe('AxiosHttpClient', () => {
  test('should call axios with params', () => {
    const { sut } = makeSut();
    const params = { url: 'url' };
    sut.get(params);
    expect(axios.get).toBeCalledWith(params.url);
  });

  test('should return the correct values', async () => {
    const params = { url: 'url' };
    const { sut, mockedAxios } = makeSut();
    const response = await sut.get(params);
    const axiosResponse = await mockedAxios.get.mock.results[0].value;

    expect(response).toEqual({
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    });
  });
});
