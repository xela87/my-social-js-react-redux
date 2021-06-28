import React from 'react';
import style from './Post.module.css';

interface IPost {
  message: string;
  like: number;
}

const Post = ({ like, message }: IPost): JSX.Element => {
  return (
    <div>
      <div className={style.item}>
        <img src="https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png" alt="ava" />
        {message}
        <div>
          <span>{like}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
