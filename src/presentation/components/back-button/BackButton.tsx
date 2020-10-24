import React from 'react';
import classnames from 'classnames';
import BackIcon from '../back-icon/BackIcon';
import Style from './BackButton.module.scss';

type Props = {
  onClick: () => void;
  dark: boolean;
};

function BackButton({ onClick, dark = false }: Props) {
  const classes = classnames(Style.backButton, {
    [Style.dark]: dark,
  });
  return (
    <button type="button" className={classes} onClick={onClick}>
      <BackIcon dark={dark} />
      <span>back</span>
    </button>
  );
}

export default BackButton;
