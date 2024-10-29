import React, { FC, ReactElement } from 'react';
import * as styles from '../../styles/components/navigation/navigation.module.scss';
import logo from '../../images/barry-profile.svg';

const Navigation: FC = (): ReactElement => {
  return (
      <nav className={styles.nav}>
        <a href='/home'><img src={logo} alt="Barry's Profile Logo" width='110' height='100' /></a>
        <ul>
          <li><a href='/home'>Home</a></li>
          <li><a href='/components'>Components</a></li>
          <li><a href='/styles'>Styles</a></li>
          <li><a href='types'>Types</a></li>
        </ul>
      </nav>);
}

export default Navigation;
