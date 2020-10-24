import { HttpClient } from '../protocols/HttpClient';
import RemoteChooseMaster from './RemoteChooseMaster';

class HttpClientSpy implements HttpClient {
  get(): Promise<any> {
    return Promise.resolve(this);
  }
}

const vader = { id: '4', name: 'vader' };
const luke = { id: '1', name: 'luke' };
const masters = [luke, vader];

const mockHttpResponse = (body: any): any => ({
  body,
  statusCode: 200,
});

function makeSut() {
  const httpClient = new HttpClientSpy();
  jest
    .spyOn(HttpClientSpy.prototype, 'get')
    .mockReturnValueOnce(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockHttpResponse(vader));
        }, 20);
      })
    )
    .mockReturnValueOnce(Promise.resolve(mockHttpResponse(luke)));
  const baseUrl = 'base-url';
  const sut = new RemoteChooseMaster(httpClient, baseUrl);
  return { sut, baseUrl };
}

describe('RemoteChooseMaster', () => {
  test('It should call httpClient for each master', () => {
    const { sut } = makeSut();
    sut.choose(masters);
    expect(sut.httpClient.get).toHaveBeenCalledTimes(masters.length);
  });

  test('It should return the first resolved master request', async () => {
    const { sut } = makeSut();
    const master = await sut.choose(masters);
    expect(master).toStrictEqual(masters[0]);
  });

  test('It should call httpClient with properly master url', async () => {
    const { sut, baseUrl } = makeSut();
    await sut.choose([luke]);
    expect(sut.httpClient.get).toHaveBeenCalledWith({
      url: `${baseUrl}/${luke.id}`,
    });
  });
});
