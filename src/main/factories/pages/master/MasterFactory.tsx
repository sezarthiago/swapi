import React from 'react';
import Master from '../../../../presentation/pages/master/Master';
import makeRemoteChooseMaster from '../../usecases/RemoteChooseMasterFactory';

const makeHome: React.FC = () => {
  return <Master chooseMaster={makeRemoteChooseMaster()} />;
};

export default makeHome;
