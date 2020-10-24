import { Master } from '../../domain/models/Master';
import { ChooseMaster } from '../../domain/usecases/ChooseMaster';
import { HttpClient, HttpStatusCode } from '../protocols/HttpClient';

export default class RemoteChooseMaster implements ChooseMaster {
  constructor(readonly httpClient: HttpClient, readonly url: string) {}

  async choose(masters: Master[]): Promise<Master> {
    const promises = masters.map((master) =>
      this.httpClient.get({
        url: `${this.url}/${master.id}`,
      })
    );
    const result = await Promise.race(promises);
    if (result.statusCode === HttpStatusCode.ok) {
      return result.body;
    }
    throw new Error();
  }
}
