import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img src="https://dadabazar.online/upload/users/user-avatar.png" alt="ava" />
        {props.message}
        <div>
          <span>{props.like}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
