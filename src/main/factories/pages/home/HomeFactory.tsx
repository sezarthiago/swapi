import React from 'react';
import Home from '../../../../presentation/pages/home/Home';
import makeRemoteChooseMaster from '../../usecases/RemoteChooseMasterFactory';

const makeHome: React.FC = () => {
  return <Home chooseMaster={makeRemoteChooseMaster()} />;
};

export default makeHome;
