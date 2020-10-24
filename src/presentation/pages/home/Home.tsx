import React from 'react';
import Style from './Home.module.scss';

function Home() {
  return (
    <div className={Style.home}>
      <div className={Style.welcomeWrap}>
        <span className={Style.welcome}>
          Welcome to <b>IClinic</b>
        </span>
        <span className={Style.challenge}>Frontend challenge</span>
      </div>
      <div className={Style.buttonWrap}>
        <button className={Style.button} type="button">
          START
        </button>
      </div>
      <div className={Style.footer} />
    </div>
  );
}

export default Home;
