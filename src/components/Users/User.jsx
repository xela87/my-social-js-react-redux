import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../assets/images/extra-large.jpg";
import {NavLink} from "react-router-dom";

let User = ({key, user, follow, unfollow, followingInProgress}) => {
    return <div>
        <div><span>
            <div><NavLink key={key} to={'/profile/' + user.id}><img className={styles.userPhoto} src={user.photos.small !== null ? user.photos.small : userPhoto} alt=''/></NavLink></div>
        <div>
          {user.followed
              ? <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            unfollow(user.id)
                        }}>
                  Unfollow</button>
              : <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => {
                            follow(user.id)
                        }}>
                  Follow</button>}</div>
      </span>
            <span>
        <span><div>{user.name}</div><div>{user.status}</div></span>
      </span>
        </div>
    </div>;
}

export default User;
