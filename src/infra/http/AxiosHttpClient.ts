import Axios from 'axios';
import { HttpClient, HttpRequest } from '../../data/protocols/HttpClient';

export default class AxiosHttpClient implements HttpClient {
  get(params: HttpRequest): Promise<any> {
    return Axios.get(params.url);
  }
}
