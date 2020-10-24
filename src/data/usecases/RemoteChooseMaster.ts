import { Master } from '../../domain/models/Master';
import { ChooseMaster } from '../../domain/usecases/ChooseMaster';
import { HttpClient } from '../protocols/HttpClient';

export default class RemoteChooseMaster implements ChooseMaster {
  constructor(readonly httpClient: HttpClient, readonly url: string) {}

  choose(masters: Master[]): Promise<Master> {
    const promises = masters.map((master) =>
      this.httpClient.get({
        url: `${this.url}/${master.id}`,
      })
    );
    return Promise.race(promises);
  }
}
