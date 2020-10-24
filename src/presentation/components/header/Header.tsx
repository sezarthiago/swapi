import React from 'react';
import Style from './Header.module.scss';

type Props = {
  children: React.ReactElement;
};

function Header({ children }: Props) {
  return <header className={Style.header}>{children}</header>;
}

export default Header;
