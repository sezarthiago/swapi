import axios from 'axios';

export const mockHttpResponse = (): any => ({
  data: 'response',
  status: 200,
});

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  mockedAxios.get.mockClear().mockResolvedValue(mockHttpResponse());
  return mockedAxios;
};
