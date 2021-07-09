import React from 'react';
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = ({isAuth, login, logout}) => {
    return <header className={styles.header}>
        <img
            className={styles.logo}
            src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
            alt="logo"
        />
        <div className={styles.loginBlock}>{isAuth
            ? <div>{login} <button onClick={logout}>logout</button></div>
            : <NavLink to={'/login'}>LOGIN</NavLink>}
        </div>
    </header>
};

export default Header;
