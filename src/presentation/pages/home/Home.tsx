import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Masters from '../../../domain/data/Masters.json';
import Style from './Home.module.scss';
import { ChooseMaster } from '../../../domain/usecases/ChooseMaster';
import { dashString } from '../../../utils/StringUtils';

type Props = {
  chooseMaster: ChooseMaster;
};

function Home({ chooseMaster }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  async function handleStart() {
    setLoading(true);
    let master;
    try {
      master = await chooseMaster.choose(Masters);
      history.push(`/master/${dashString(master.name)}`);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Sorry, try again later!');
    }
    setLoading(false);
  }

  return (
    <div className={Style.home}>
      <div className={Style.welcomeWrap}>
        <span className={Style.welcome}>
          Welcome to <b>IClinic</b>
        </span>
        <span className={Style.challenge}>Frontend challenge</span>
      </div>
      <div className={Style.buttonWrap}>
        <button
          onClick={handleStart}
          className={Style.button}
          type="button"
          disabled={loading}
        >
          START
        </button>
      </div>
      <div className={Style.footer} />
    </div>
  );
}

export default Home;
