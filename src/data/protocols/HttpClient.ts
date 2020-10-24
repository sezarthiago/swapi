export interface HttpClient {
  get: (params: any) => Promise<any>;
}
