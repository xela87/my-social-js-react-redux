import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css';

const DialogItem = ({ name, id }) => {
  return (
    <div className={style.dialog}>
      <NavLink to={`/messages/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
