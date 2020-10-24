import RemoteChooseMaster from '../../../data/usecases/RemoteChooseMaster';
import { ChooseMaster } from '../../../domain/usecases/ChooseMaster';
import makeAxiosHttpClient from '../http/AxiosHttpClient';

const makeRemoteChooseMaster = (): ChooseMaster => {
  return new RemoteChooseMaster(
    makeAxiosHttpClient(),
    'https://swapi.dev/api/people'
  );
};

export default makeRemoteChooseMaster;
