export type HttpRequest = {
  url: string;
};

export interface HttpClient {
  get: (params: HttpRequest) => Promise<any>;
}
