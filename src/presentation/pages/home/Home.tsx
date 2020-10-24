import React from 'react';
import { useHistory } from 'react-router-dom';
import RemoteChooseMaster from '../../../data/usecases/RemoteChooseMaster';
import AxiosHttpClient from '../../../infra/http/AxiosHttpClient';
import Masters from '../../../domain/data/Masters.json';
import Style from './Home.module.scss';

function Home() {
  const history = useHistory();

  async function handleStart() {
    const httpClient = new AxiosHttpClient();
    const response = await new RemoteChooseMaster(
      httpClient,
      'https://swapi.dev/api/people'
    ).choose(Masters);

    history.push('/master');
    console.log(response);
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
