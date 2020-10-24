import React, { useMemo } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import classnames from 'classnames';
import Style from './Master.module.scss';
import DarthVader from './images/darth-vader.png';
import LukeSkywalker from './images/luke-skywalker.png';
import { BackButton, Header } from '../../components';
import { undashString } from '../../../utils/StringUtils';

type Params = {
  master: string;
};

function Master() {
  const history = useHistory();
  const { master } = useParams<Params>();

  function handleBack() {
    history.goBack();
  }

  const masterClasses = classnames(Style.master, {
    [Style.masterLuke]: master === 'Luke-Skywalker',
  });

  const image = useMemo(
    () => (master === 'Luke-Skywalker' ? LukeSkywalker : DarthVader),
    [master]
  );

  return (
    <div className={masterClasses}>
      <Header>
        <BackButton onClick={handleBack} dark={master === 'Luke-Skywalker'} />
      </Header>
      <main className={Style.main}>
        <img className={Style.masterImage} src={image} alt="master" />
        <span className={Style.masterName}>
          <span>Your master is </span>
          <b>{undashString(master)}</b>
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
