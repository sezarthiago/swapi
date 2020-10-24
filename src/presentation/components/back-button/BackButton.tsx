import React from 'react';
import BackIcon from '../back-icon/BackIcon';
import Style from './BackButton.module.scss';

type Props = {
  onClick: () => void;
};

function BackButton({ onClick }: Props) {
  return (
    <button type="button" className={Style.backButton} onClick={onClick}>
      <BackIcon />
      <span>back</span>
    </button>
  );
}

export default BackButton;
