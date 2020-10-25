import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Masters from '../../domain/data/Masters.json';
import { Master } from '../../domain/models/Master';
import { ChooseMaster } from '../../domain/usecases/ChooseMaster';
import { dashString } from '../../utils/StringUtils';

type HookReturn = {
  loading: boolean;
  choose: () => Promise<void>;
  master: Master | null;
};

export default function useMaster(chooseMaster: ChooseMaster): HookReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [master, setMaster] = useState<Master | null>(null);
  const history = useHistory();

  async function choose(): Promise<void> {
    setLoading(true);
    try {
      setMaster(await chooseMaster.choose(Masters));
      setLoading(false);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Sorry, try again later!');
      setLoading(false);
    }
  }

  useEffect(() => {
    if (master != null) {
      history.push(`/master/${dashString(master.name)}`);
    }
  }, [history, master]);

  return { loading, choose, master };
}
