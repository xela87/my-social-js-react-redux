import React from 'react';
import styles from './Header.module.css';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
