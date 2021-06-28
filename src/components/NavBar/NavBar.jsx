import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={style.navigation}>
            <div>
                <NavLink to="/profile" className={style.item} activeClassName={style.active}>
                    Profile
                </NavLink>
            </div>
            <div>
                <NavLink to="/messages" className={style.item} activeClassName={style.active}>
                    Messages
                </NavLink>
            </div>
            <div>
                <NavLink to="/news" className={style.item} activeClassName={style.active}>
                    News
                </NavLink>
            </div>
            <div>
                <NavLink to="/music" className={style.item} activeClassName={style.active}>
                    Music
                </NavLink>
            </div>
            <div>
                <NavLink to="/users" className={style.item} activeClassName={style.active}>
                    Users
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings" className={style.item} activeClassName={style.active}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}
;

export default NavBar;
