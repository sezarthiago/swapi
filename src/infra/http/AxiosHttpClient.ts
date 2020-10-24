import Axios, { AxiosResponse } from 'axios';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
} from '../../data/protocols/HttpClient';

export default class AxiosHttpClient implements HttpClient {
  async get(params: HttpRequest): Promise<HttpResponse> {
    let response: AxiosResponse;
    try {
      response = await Axios.get(params.url);
    } catch (error) {
      response = error.response;
    }
    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}
