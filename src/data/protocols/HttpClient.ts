export type HttpRequest = {
  url: string;
};

export interface HttpClient {
  get: (params: HttpRequest) => Promise<HttpResponse>;
}

export enum HttpStatusCode {
  ok = 200,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
};
