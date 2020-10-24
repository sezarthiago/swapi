import React from 'react';
import { useHistory } from 'react-router-dom';
import Style from './Master.module.scss';
import DarthVader from './darth-vader.png';
import BackButton from '../../components/back-button/BackButton';
import Header from '../../components/header/Header';

function Master() {
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <div className={Style.master}>
      <Header>
        <BackButton onClick={handleBack} />
      </Header>
      <main className={Style.main}>
        <img className={Style.masterImage} src={DarthVader} alt="master" />
        <span className={Style.masterName}>
          <span>Your master is </span>
          <b>Darth Vader</b>
        </span>
        <div className={Style.buttonWrap}>
          <button type="button" className={Style.button}>
            <span>choose your path again, Padawan</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Master;
