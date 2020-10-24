import React from 'react';
import { useHistory } from 'react-router-dom';
import Masters from '../../../domain/data/Masters.json';
import Style from './Home.module.scss';
import { ChooseMaster } from '../../../domain/usecases/ChooseMaster';

type Props = {
  chooseMaster: ChooseMaster;
};

function Home({ chooseMaster }: Props) {
  const history = useHistory();

  async function handleStart() {
    const response = await chooseMaster.choose(Masters);
    history.push('/master');
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
        <button onClick={handleStart} className={Style.button} type="button">
          START
        </button>
      </div>
      <div className={Style.footer} />
    </div>
  );
}

export default Home;
