import React from 'react';
import Style from './Home.module.scss';
import { ChooseMaster } from '../../../domain/usecases/ChooseMaster';
import useMaster from '../../hooks/usMaster';

type Props = {
  chooseMaster: ChooseMaster;
};

function Home({ chooseMaster }: Props) {
  const { loading, choose } = useMaster(chooseMaster);

  function handleStart() {
    choose();
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
          data-testid="button"
          onClick={handleStart}
          className={Style.button}
          type="button"
          disabled={loading}
        >
          <span>START</span>
        </button>
      </div>
      <div className={Style.footer} />
    </div>
  );
}

export default Home;
