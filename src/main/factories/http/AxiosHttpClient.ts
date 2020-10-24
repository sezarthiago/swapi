import AxiosHttpClient from '../../../infra/http/AxiosHttpClient';

const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient();

export default makeAxiosHttpClient;
